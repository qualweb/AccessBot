import * as data from './manifest.json'
import {generateEARLReport} from "@qualweb/earl-reporter";

let origin;
let website;
let manualAssertedBy;

export default async function resultToEarl(earlResult, accessbotResult, web, firstname, lastname) {

    origin = accessbotResult;
    website = web;

    let test = {
        system: {
            name: data.name,
            description: data.description,
            version: data.version,
            homepage: "https://github.com/qualweb/AccessBot",
            date: new Date(),
            url: {
                inputUrl: website,
                completeUrl: website
            },
        },
        modules: {
            "act-rules": earlResult
        },
    };

    const generatedEarl = await generateEARLReport({[test.system.url.completeUrl]: test});

    manualAssertedBy = firstname;

    const assign = Object.assign({}, generatedEarl[website]["@graph"][0].assertor);
    const newAssertor = {
        "@id" : firstname,
        name: firstname + " " + lastname,
        "@type": "Person"
    }
    
    generatedEarl[website]["@graph"][0].assertor = [assign, newAssertor]

    const newAssertions = generateAssertions();
    const filteredAutomaticAsertions = adjustAutotoManual(generatedEarl, assign["@id"]);

    generatedEarl[website]["@graph"][0].assertions = [...filteredAutomaticAsertions, ...newAssertions];

    return generatedEarl;
}

function adjustAutotoManual(generatedEarl, assertor) {
    const onlyAutomatic = generatedEarl[website]["@graph"][0].assertions.filter(assertion => assertion.mode === "earl:automatic");
    
    const filteredAssertions = []

    for (const assertion of onlyAutomatic) {
        let categoryIndex = -1;
        let ruleIndex = -1;
        origin.categories.some((category, index) => {
            return category.rules.some((rule, rIndex) => {
                if (rule.url === assertion.test["@id"]) {
                    categoryIndex = index;
                    ruleIndex = rIndex;
                    return true;
                }
              
                return false;
            })
        });

        if(ruleIndex === -1) {
            continue;
        }

        const assertionsToKeep = assertion.result.source.filter(question => {
            return !origin.categories[categoryIndex].rules[ruleIndex].questions.some(originQuestion => {
                return originQuestion.elements[0] && originQuestion.elements[0].pointer === question.result.pointer && originQuestion.type === "semi" ||
                originQuestion.manualAnswer && originQuestion.manualAnswer !== originQuestion.verdict
            })
        }).map((questionResult, index, originalArray) => {
            const questionIndex = origin.categories[categoryIndex].rules[ruleIndex].questions.findIndex(question => {
                return originalArray.some(earlQuestion => {
                    return question.elements[0] && question.elements[0].pointer === earlQuestion.result.pointer;
                })
            });
            return {
                ...questionResult,
                result: {
                    ...questionResult.result,
                    modified: false,
                    observations: questionIndex > -1 ? origin.categories[categoryIndex].rules[ruleIndex].questions[questionIndex].note : "",
                    description: questionIndex > -1 ? origin.categories[categoryIndex].rules[ruleIndex].questions[questionIndex].description : "",
                },
            }
        });

        if (assertionsToKeep.length > 0) {
            const duplicateAssertion = {
                ...assertion,
                test: {
                    ...assertion.test,
                    category: origin.categories[categoryIndex].name,
                    idRule: origin.categories[categoryIndex].rules[ruleIndex].id
                },
            };
            duplicateAssertion.result.source = assertionsToKeep;
            duplicateAssertion["@assertedBy"] = assertor;
            filteredAssertions.push(duplicateAssertion);
        }
    };

    return filteredAssertions;
}

function generateAssertions() {
    const assertions = [];

    const semiRules = filterRulesByType("semi");
    const manualRules = filterRulesByType("manual");

    return assertions.concat(addSemiRules(semiRules), addManualRules(manualRules));
}

function addRules(rules, mode) {
    let tests;
    let earlMode;
    let tree;

    if (!mode) {
        return;
    }

    switch(mode) {
        case "semi":
            tests = "questions"
            earlMode = "earl:semiAuto"
            tree = "decisionTree"
        break;
        case "manual":
            tests = "manualTest"
            earlMode = "earl:manual"
            tree = "manualTest"
        break;
        default:
        break;
    }

    const assertions = [];

    for (const rule of rules) {
        console.log("rule");
        console.log(rule);
        const autoAssertions = {
            "@type" : "Assertion",
            "@assertedBy": manualAssertedBy,
            mode: earlMode,
            result: {    
                date: new Date(),
                description: "",       
                source: [],
                "@type": "TestResult",
            },
            test: {
                "@id": rule.url,
                "@type": "TestCase",
                description: mode === "manual" && rule[tests] && rule[tests].test ? rule[tests].description : rule.description,
                title: rule.name,
                idRule: mode === "manual" ? rule.rule : rule.id,
                category: rule.category
            }
        }

        let getStatus;

        let questions = [];

        if(mode !== "manual") {
            for (const question of rule[tests]) {

                const status = question[tree].getStatus();

                if (!question.complete) {
                    continue;
                }

                switch (status) {
                    case "Pass":
                        getStatus = "passed"
                        break;
                    case "Fail":
                        getStatus = "failed"
                        break;
                    default:
                        getStatus = ""
                }

                if (!getStatus) {
                    continue;
                }

                let pointer = "";
                if (question.elements) {
                    question.elements.forEach(element => {
                        if (element.pointer) {
                            pointer = `${pointer}, ${element.pointer}`
                        }
                    });
                }

                questions.push({
                    result:{
                        outcome: getStatus === "passed" ? "earl:passed" : "earl:failed", 
                        pointer: pointer,
                        description: question[tree].current().title,
                        modified: false,
                        observations: question.note
                    }
                })
            }
        } else {
            if(rule[tests] && rule[tests].test) {
                const status = rule[tests].test.getStatus();

                autoAssertions.result = {
                    date: new Date(),
                    description: "",       
                    source: [],
                    "@type": "TestResult",
                }

                if (!rule.manualTest.complete) {
                    continue;
                }

                switch (status) {
                    case "Pass":
                        getStatus = "passed"
                        break;
                    case "Fail":
                        getStatus = "failed"
                        break;
                    default:
                        getStatus = ""
                }

                if (!getStatus) {
                    continue;
                }

                questions.push({
                    result:{
                        outcome: getStatus === "passed" ? "earl:passed" : "earl:failed", 
                        pointer: "",
                        description: rule[tests].test.current().title,
                        modified: false,
                        observations: rule[tests].note
                    }
                });
            } else {
                for (const question of rule.questions) {
    
                    if (!question.complete || 
                        question.type !== "auto" ||
                        question.manualAnswer === "" ||
                        question.manualAnswer !== "" && question.manualAnswer === question.verdict) {
                        continue;
                    }

                    let pointer = "";
                    if (question.elements) {
                        question.elements.forEach(element => {
                            if (element.pointer) {
                                pointer = `${pointer}, ${element.pointer}`;
                            }
                        });
                    }

                    let getStatus; 

                    switch(question.manualAnswer) {
                        case "passed": 
                            getStatus = "earl:passed";
                            break;
                        case "failed": 
                            getStatus = "earl:failed";
                            break;
                        case "innaplicable": 
                            getStatus = "earl:inapplicable";
                            break;
                        default:
                            getStatus = "earl:inapplicable";
                            break;
                    }
    
                    questions.push({
                        result:{
                            outcome: getStatus,
                            pointer: pointer,
                            description: question.description,
                            modified: true,
                            observations: question.note
                        }
                    })
                }
            } 
        }

        if(!questions.length) {
            continue;
        }

        const failedIndex = questions.findIndex(question => question.result.outcome === "earl:failed");
        autoAssertions.result.outcome = failedIndex === -1 ? "earl:passed" : "earl:failed";
        autoAssertions.result.description = questions[failedIndex > -1 ? failedIndex : 0].result.description; 

        questions.forEach(question => {
            // const {description, ...filterQuestion} = question.result;
            autoAssertions.result.source.push({result: question.result});
        });

        assertions.push(autoAssertions);
    };

    return assertions;
}

function addManualRules(manualRules) {
    return addRules(manualRules, "manual");
}

function addSemiRules(semiRules) {
    return addRules(semiRules, "semi"); 
}

function filterRulesByType(type) {
    let filterResults = [];

    origin.categories.forEach(category => {
        const filterRule = category.rules.forEach(rule => {
            if(rule.questions && type !== "manual") {
                const filterQuestions = rule.questions.filter(question => {
                    return question.type === "semi"
                })

                if (filterQuestions.length > 0) {
                    filterResults.push({
                        ...rule,
                        category: category.name,
                        questions: filterQuestions
                    });
                }

            } else if (rule.manualTest && type === "manual") {
                filterResults.push({
                    ...rule,
                    category: category.name,
                    manualTest: {
                        ...rule.manualTest,
                        type: "manual"
                    }
                });
            } else if (rule.questions && type === "manual") {
                const filterQuestions = rule.questions.filter(question => {
                    return question.type === "auto" && question.manualAnswer && question.manualAnswer !== question.verdict
                })

                if (filterQuestions.length > 0) {
                    filterResults.push({
                        ...rule,
                        category: category.name,
                        questions: filterQuestions
                    });
                }   
            }
        })
    })

    return filterResults;
}
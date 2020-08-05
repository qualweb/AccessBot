import * as data from './manifest.json'
import {generateEARLReport} from "@qualweb/earl-reporter";

let origin;

export default async function resultToEarl(earlResult, accessbotResult, website, firstname, lastname) {
    origin = Object.assign({},accessbotResult);

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

    const assign = Object.assign({}, generatedEarl[website]["@graph"][0].assertor);
    const newAssertor = {
        "@id" : firstname,
        name: firstname + " " + lastname,
        "@type": "Person"
    }
    
    generatedEarl[website]["@graph"][0].assertor = [assign, newAssertor]

    const newAssertions = generateAssertions();

    newAssertions.forEach(assert => {
        generatedEarl[website]["@graph"][0].assertions.push(assert)
    })

    return generatedEarl;
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
        const autoAssertions = {
            "@type" : "Assertion",
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
                description: mode === "manual" ? rule[tests].description : rule.description,
                title: rule.name
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
                        description: question[tree].current().title
                    }
                })
            }
        } else {
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
                    description: rule[tests].test.current().title
                }
            });
        }

        if(!questions.length) {
            continue;
        }

        console.log("questions");
        console.log(questions)

        const failedIndex = questions.findIndex(question => question.result.outcome === "earl:failed");

        console.log(failedIndex);

        autoAssertions.result.outcome = failedIndex === -1 ? "earl:passed" : "earl:failed";

        autoAssertions.result.description = questions[failedIndex > -1 ? failedIndex : 0].result.description; 

        questions.forEach(question => {
            const {description, ...filterQuestion} = question.result;
            autoAssertions.result.source.push({result: filterQuestion});
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
                    return question.type === type
                })

                if (filterQuestions.length > 0) {
                    const length = filterResults.push(rule) -1;
                    filterResults[length].questions = filterQuestions;
                }
            } else if (rule.manualTest && type === "manual") {
                const length = filterResults.push(rule) -1;
                filterResults[length].manualTest.type = "manual";
            }
        })
    })

    return filterResults;

}
import rules from "./rules/index.js";
import rulesCategories from "./rules/categories.js"; 
import assessments from "./rules/assessments/index.js";
import DecisionTree from "./DecisionTree.js";
import ManualSteps from "./ManualSteps.js";
import resultToEarl from "./earl.js";
import clone from "lodash.clonedeep";

let resultData = {};
let highlightedItems = [];

let filters = {
    pass : true,
    fail : true,
    cannotTell : true,
    inapplicable : true,
    uncompletedTests : true
}

let filtersLeft = {
    pass : true,
    fail : true,
    cannotTell : true,
    inapplicable : true,
    uncompletedTests : true
}

let storedQuestions = [];

let jsonResult = {};

chrome.runtime.sendMessage({message:"resultLoaded"});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message === "resultsToPopup") {
            resultData = generateManualTests(generateCategoriesData(request.values, request.options), request.options.manual);
            updateResults();
            const exportToEarlButton = document.querySelectorAll('#downloadEARL')[0];
            const exportToCSVButton = document.querySelectorAll('#downloadCSV')[0];
            const removeHighlights = document.querySelectorAll('.HighlightButton')[0];
            const popupClass = document.querySelectorAll('.popup-wrapper')[0];
            const popupClassButton = document.querySelectorAll('#popupContentId button')[0];
            const formAssertor = document.forms[0];
            let clickedDownload = "";

            const cloneresultData = clone(resultData);

            exportToEarlButton.onclick = async function() {
                clickedDownload = "earl";
                popupClass.classList.toggle('show');
            }

            exportToCSVButton.onclick = async function() {
                clickedDownload = "csv";
                popupClass.classList.toggle('show');
            }
            popupClassButton.onclick = async function() {
                const formData = new FormData(formAssertor);
                const firstname = formData.get("fname");
                const lastname = formData.get("lname");
                jsonResult = await resultToEarl(request.result, resultData, request.website, firstname, lastname);
                console.log(jsonResult)
                
                if (clickedDownload === "csv") {
                    downloadCSV(request.website);
                } else if (clickedDownload === "earl") {
                    downloadEARL();
                }
                
                popupClass.classList.toggle('show');
            }


            removeHighlights.onclick = async function() {
                highlightedItems.forEach(pointer => {
                    chrome.runtime.sendMessage({message:"outResultElement", element: pointer});
                });
                highlightedItems = [];
                resultData.categories.forEach(category => {
                    
                    category.rules.forEach(rule => {
                        if(rule.questions) {
                            rule.questions.forEach(question => {
                                if(question.selected === true) {
                                    question.selected = false;
                                }
                            });
                        }
                        if(rule.manualTest) {
                            rule.manualTest.selected = false
                        }
                    });
                });
                updateResults();
            }
        }
    }
);


function downloadEARL() {
    var  dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(jsonResult, null, 2));
    const newLocal = 'downloadEARL';
    const  dlAnchorElem = document.createElement("a");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "accessBot_earl.json");
    dlAnchorElem.click();
}

function downloadCSV(website) {
   
    console.log(jsonResult);

    let csv = [];

    //falata category, rule id, reason (by result), observations, modified
    const keys = ["ASSERT BY", "CATEGORY", "TYPE OF TEST", "RULE ID", "RULE NAME", "TEST RESULT", "REASON", "POINTER", "OBSERVATIONS", "MODIFIED" ];
    csv.push(keys);

    const result = jsonResult[website]["@graph"][0]["assertions"];

    for (let i = 0; i < result.length; i++){
        const mode = result[i].mode;
        const assertBy = result[i]["@assertedBy"];
        const ruleName = result[i]["test"]["title"];
        const ruleCategory = result[i]["test"]["category"];
        const ruleId = result[i]["test"]["idRule"];
        const sources = result[i]["result"]["source"];
        for (let source = 0; source < sources.length; source++) {
            let csvLine = new Array(keys.length);
            csvLine[0] = `\"${assertBy}\"`;
            csvLine[1] = `\"${ruleCategory}\"`;
            csvLine[2] = `\"${mode}\"`;
            csvLine[3] = `\"${ruleId}\"`;
            csvLine[4] = `\"${ruleName}\"`;
            csvLine[5] = `\"${sources[source]["result"]["outcome"]}\"`;
            csvLine[6] = `\"${sources[source]["result"]["description"]}\"`;
            csvLine[7] = `\"${sources[source]["result"]["pointer"]}\"`;
            csvLine[8] = `\"${sources[source]["result"]["observations"]}\"`;
            csvLine[9] = `\"${sources[source]["result"]["modified"]}\"`;
            csv.push(csvLine);
        }
    }

    csv.forEach((line, index) => {
        csv[index] = line.join(',');
    })

    console.log(csv);

    const csv2 = csv.join('\r\n');

    console.log(csv2)

    var  dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(csv2);
    const newLocal = 'downloadCSV';
    var  dlAnchorElem = document.createElement("a");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "accessBot_csv.csv");
    dlAnchorElem.click();
}

function isRuleValid(ruleToCheck, result) {
    return ruleToCheck.tree.some(function(step) {
        const prerequesiteArray = step.prerequisite.replace(/\s/g, '').split(',');
        return prerequesiteArray.some(prerequesite => {
            return result.resultCode === prerequesite;
        })
    });
}

function generateCategoriesData(result, options) {
    const semiManualTests = {
        total: 0,
        count: 0,
        pass: 0,
        fail: 0,
        inapplicable: 0,
        warning: 0,
        missing: 0,
        categories: []
    };

    for (let i = 0; i < result.length; i++) {
        const ruleValue = result[i];
        const ruleCode = ruleValue.code;
        const ruleName = ruleValue.name;
        const ruleDescription = ruleValue.description;
        const url = ruleValue.url;
        const id = ruleValue.id;

        const rulesArray = Object.entries(rulesCategories);

        const indexValue = rulesArray.findIndex(rule => {
            return rule[1].some(ruleCategoryValue => ruleCategoryValue === ruleCode.split("-")[2]); 
        });

        if(indexValue > -1) {
            const currentCategory = rulesArray[indexValue][0];
            const getCategoryIndex = semiManualTests.categories.findIndex(function(category) {
                return category.name === currentCategory;
            });

            const categoryNextIndex = semiManualTests.categories.length;

            const manualRuleIndex = rules.findIndex(manualRule => {
                return manualRule.code === ruleCode;
            });

            let manualRule;

            if (manualRuleIndex > -1) {
                manualRule = rules[manualRuleIndex];
            }

            let total = 0;
            let questions = [];

            ruleValue.results.forEach((result) => {
                if (manualRule && isRuleValid(manualRule, result) && options.semimanual) {
                    let ruleToDecisionTree;
                    manualRule.tree.forEach(function(manual) {
                        manual.prerequisite.split(',').forEach(function(prerequisite) {
                            const prerequisiteNoSpace = prerequisite.replace(/\s/g, '');
                            if (prerequisiteNoSpace === result.resultCode) {
                                ruleToDecisionTree = manual;
                            }
                        })
                    });

                    questions.push({
                        ...result,
                        decisionTree: new DecisionTree(ruleToDecisionTree),
                        complete: false,
                        selected: false,
                        manualAnswer: "",
                        note: '',
                        type: 'semi',
                        index: total
                    });
                    total++;
                } else if(options.automatic) {
                    questions.push({
                        ...result,
                        selected: false,
                        complete: true,
                        manualAnswer: "",
                        note: '',
                        type: 'auto',
                        index: total
                    });
                    total++;
                }
            });

            semiManualTests.total += total;

            if (getCategoryIndex === -1) {
                semiManualTests.categories.push({
                    name: currentCategory,
                    fixedName: currentCategory.replace(/ /g, '').replace(/[^A-Za-z0-9]/g, ''),
                    total: total,
                    count: 0,
                    pass: 0,
                    fail: 0,
                    inapplicable: 0,
                    warning: 0,
                    missing: 0,
                    selected: false,
                    index: categoryNextIndex,
                    rules: [
                        {
                            rule: ruleCode,
                            name: ruleName,
                            description: ruleDescription,
                            id,
                            url,
                            total: total,
                            count: 0,
                            questions: questions,
                            selected: false,
                            plusRule: manualRule && manualRule.plusRule ? manualRule.plusRule : [],
                            index: 0
                        }
                    ],
                });
            } else {
                const ruleNextIndex = semiManualTests.categories[getCategoryIndex].rules.length;
                semiManualTests.categories[getCategoryIndex].rules.push(
                    {
                        rule: ruleCode,
                        name: ruleName,
                        description: ruleDescription,
                        id,
                        url,
                        total: total,
                        count: 0,
                        questions: questions,
                        selected: false,
                        plusRule: manualRule && manualRule.plusRule ? manualRule.plusRule : [],
                        index: ruleNextIndex
                    }
                );
                semiManualTests.categories[getCategoryIndex].total += total;
            }
        }
    }
    return semiManualTests;
}

function generateManualTests(manualTests, optionManual) {
    if (!optionManual) {
        return manualTests;
    }

    let total = 0;

    assessments.forEach(function(assessment) {
        const getCategoryIndex = manualTests.categories.findIndex(function(category) {
            return category.name === assessment.category;
        });

        const categoryNextIndex = manualTests.categories.length;

        if (getCategoryIndex === -1) {
            manualTests.categories.push({
                name: assessment.category,
                fixedName: assessment.category.replace(/ /g, '').replace(/[^A-Za-z0-9]/g, ''),
                total: 1,
                count: 0,
                selected: false,
                index: categoryNextIndex,
                rules: [
                    {
                        rule: assessment.code,
                        name: assessment.name,
                        description: assessment.description,
                        code: assessment.code,
                        url: assessment.url,
                        id: assessment.id,
                        total: 1,
                        count: 0,
                        selected: false,
                        index: 0,
                        manualTest: {
                            test: new ManualSteps(assessment.tree),
                            description: assessment.descriptionTest,
                            importance: assessment.whyImportant,
                            complete: false,
                            selected: false,
                            note: '',
                        } 
                    }
                ],
            });
            total++;
        } else {
            const rulesNextIndex = manualTests.categories[getCategoryIndex].rules.length;
            manualTests.categories[getCategoryIndex].rules.push(
                {
                    rule: assessment.code,
                    name: assessment.name,
                    description: assessment.description,
                    code: assessment.code,
                    url: assessment.url,
                    id: assessment.id,
                    count: 0,
                    total: 1,
                    selected: false,
                    index: rulesNextIndex,
                    manualTest: {
                        test: new ManualSteps(assessment.tree),
                        description: assessment.descriptionTest,
                        importance: assessment.whyImportant,
                        complete: false,
                        selected: false,
                        note: '',
                    } 
                }
            );
            manualTests.categories[getCategoryIndex].total++;
            total++;
        }
    });

    manualTests.categories.sort(function(a, b) {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });

    manualTests.total += total;

    manualTests.categories.forEach((category, index) => {
        category.index = index;
    });

    return manualTests;
}

function filterResultDataLeft() {
    let filterCategories = [];
    resultData.categories.forEach(function(category) {
        let filterRules = [];
        let totalCategory = 0;
        let countCategory = 0;
        category.rules.forEach(function(rule) {
            let filterQuestions = [];
            let filterManual = undefined;
            if(rule.questions) {
                filterQuestions = rule.questions.filter(question => {
                    if(question.complete === false) {
                        return filtersLeft.uncompletedTests === true
                    } else if (question.manualAnswer) {
                        return  question.manualAnswer === "passed" && filtersLeft.pass === true ||
                        question.manualAnswer === "failed" && filtersLeft.fail === true ||
                        question.manualAnswer === "inapplicable" && filtersLeft.inapplicable === true
                    } else if (question.decisionTree) {
                        return question.decisionTree.getStatus() === "Pass" && filtersLeft.pass === true ||
                        question.decisionTree.getStatus() === "Fail" && filtersLeft.fail === true
                    } else {
                        return question.verdict === "passed" && filtersLeft.pass === true ||
                        question.verdict === "failed" && filtersLeft.fail === true ||
                        question.verdict === "inapplicable" && filtersLeft.inapplicable === true ||
                        question.verdict === "warning" && filtersLeft.cannotTell === true ||
                        question.verdict === "" && filtersLeft.cannotTell === true
                    }
                })
            } else if(rule.manualTest) {
                if(rule.manualTest.complete === false && filtersLeft.uncompletedTests === true) {
                    filterManual = rule.manualTest;
                } else if (rule.manualTest.test.getStatus() === "Pass" && filtersLeft.pass === true ||
                rule.manualTest.test.getStatus() === "Fail" && filtersLeft.fail === true) {
                    filterManual = rule.manualTest;
                }
            }

            if (filterQuestions.length > 0) {
                let count = 0;

                filterQuestions.forEach(question => {
                    if(question.complete)
                        count++
                });

                totalCategory += filterQuestions.length;
                countCategory += count;

                filterRules.push({
                    ...rule,
                    total: filterQuestions.length,
                    count,
                    questions: filterQuestions,
                })
            }else if (rule.questions && rule.questions.length === 0) {
                filterRules.push({
                    ...rule
                })
            } else if(filterManual) {
                const count = filterManual.complete ? 1 : 0;
                totalCategory += 1;
                countCategory += count;

                filterRules.push({
                    ...rule,
                    count,
                    manualTest: filterManual,
                })
            }
        });

        if (filterRules.length > 0) {
            filterCategories.push({
                ...category,
                rules: filterRules,
                total: totalCategory,
                count: countCategory
            });
        }
    });

    return {
        ...resultData,
        categories: filterCategories,
    }
}

function updateResults() {
    console.log(resultData);
    updateTotal();
    removeHTML();
    generateResultCount();
    filterResultDataLeft().categories.forEach(function (category){
        const originalCategory = resultData.categories[category.index];
        generateAccordions(originalCategory, category);
        category.rules.forEach(function(rule) {
            const originalRule = originalCategory.rules[rule.index];
            generatePanelRule(originalCategory, originalRule, rule);
            if (rule.selected) {
                if(rule.questions) {
                    generateQuestionSection(originalRule, rule);
                    showFilters()
                } else if(rule.manualTest) {
                    generateManualTestSection(originalRule, rule);
                }
            }
        })
    })
}


function showQuestion(question) {
    if(question.complete === false) {
        return filters.uncompletedTests;
    } else if (question.decisionTree && question.decisionTree.status === "") {
        return filters.uncompletedTests;
    } else if (question.decisionTree && question.decisionTree.status !== "") {
        const findIndex = storedQuestions.findIndex(storedQuestion => {
            if(!storedQuestion.elements[0] || !question.elements[0]) {
                return false;
            }
            return storedQuestion.elements[0].pointer === question.elements[0].pointer
        });
        if(findIndex > -1) {
            return filters.uncompletedTests;
        }
        switch(question.decisionTree.getStatus()) {
            case "Pass":
                return filters.pass;
            case "Fail":
                return filters.fail; 
        }
    } else {
        switch(question.verdict) {
            case "passed":
                return filters.pass;
            case "failed":
                return filters.fail;
            case "inapplicable":
                return filters.inapplicable;
            case "warning":
                return filters.cannotTell;
            case "":
                return filters.cannotTell;
        }
    }
}

/*
<
<div>
            <input type="checkbox" id="passLeftFilter" name="passLeftFilter" value="passLeftFilter" checked>
            <label class="checkbox" for="passLeftFilter">Pass:&nbsp</label>
            <span id="passCount">${resultData.pass}</span>
        </div>

 */


function showFilters() {
    const resultSection = document.querySelector('.ResultList');

    let checkboxesFilters = "";

    if (filtersLeft.pass) {
        checkboxesFilters += `<div>
            <input type="checkbox" id="passFilter" name="passFilter" value="passFilter" checked>
            <label class="checkbox" for="passFilter">Pass&nbsp</label>
        </div>`;
    }

    if (filtersLeft.pass) {
        checkboxesFilters += `<div>
            <input type="checkbox" id="passFilter" name="passFilter" value="passFilter" checked>
            <label class="checkbox" for="passFilter">Pass&nbsp</label>
        </div>`;
    }

    if (filtersLeft.fail) {
        checkboxesFilters += `<div>
        <input type="checkbox" id="failFilter" name="failFilter" value="failFilter" checked>
        <label class="checkbox" for="failFilter">Fail&nbsp</label>
        </div>`;
    }

    if (filtersLeft.cannotTell) {
        checkboxesFilters += `<div>
        <input type="checkbox" id="cannotTellFilter" name="cannotTellFilter" value="cannotTellFilter" checked>
        <label class="checkbox" for="cannotTellFilter">Cannot tell&nbsp</label>
        </div>`;
    }

    if (filtersLeft.inapplicable) {
        checkboxesFilters += `<div>
        <input type="checkbox" id="inapplicableFilter" name="inapplicableFilter"  value="inapplicableFilter" checked>
        <label class="checkbox" for="inapplicableFilter">Inapplicable&nbsp</label>
        </div>`;
    }

    if (filtersLeft.uncompletedTests) {
        checkboxesFilters += `<div>
        <input type="checkbox" id="uncompletedTestsFilter" name="uncompletedTestsFilter" value="uncompletedTestsFilter" checked>
        <label class="checkbox" for="uncompletedTestsFilter">Uncompleted tests&nbsp</label> 
        </div>`;
    }

    resultSection.insertAdjacentHTML('beforeBegin', `<div class="resultFilters">${checkboxesFilters}</div>`);

    const passFilter = document.querySelector('#passFilter');
    const failFilter = document.querySelector('#failFilter');
    const cannotTellFilter = document.querySelector('#cannotTellFilter');
    const inapplicableFilter = document.querySelector('#inapplicableFilter');
    const uncompletedTestsFilter = document.querySelector('#uncompletedTestsFilter');


    if (passFilter) {
        passFilter.checked = filters.pass;
        passFilter.onchange = function(e) {
            filters.pass = e.target.checked;
            storedQuestions = [];
            updateResults();
        }
    }

    if (failFilter) {
        failFilter.checked = filters.fail;
        failFilter.onchange = function(e) {
            filters.fail = e.target.checked;
            storedQuestions = [];
            updateResults();
        }
    }

    if (cannotTellFilter) {
        cannotTellFilter.checked = filters.cannotTell;
        cannotTellFilter.onchange = function(e) {
            filters.cannotTell = e.target.checked;
            storedQuestions = [];
            updateResults();
        }
    }  

    if (inapplicableFilter) {
        inapplicableFilter.checked = filters.inapplicable;
        inapplicableFilter.onchange = function(e) {
            filters.inapplicable = e.target.checked;
            storedQuestions = [];
            updateResults();
        }
    }  

    if (uncompletedTestsFilter) {
        uncompletedTestsFilter.checked = filters.uncompletedTests;
        uncompletedTestsFilter.onchange = function(e) {
            filters.uncompletedTests = e.target.checked;
            storedQuestions = [];
            updateResults();
        }
    }  
}

function removeHTML() {
    const questionSection = document.querySelectorAll('.result');
    questionSection.forEach(function(result, index) {
        result.innerHTML = '';
        if(index === 0) {
            result.innerHTML = '<div id="resultcount"></div>';
        }
     });
}

function generateQuestionSection(rule, filteredRule) {
    const questionSection = document.querySelector('.ResultPage .result:last-child');
    questionSection.innerHTML = `
    <h2 class="RuleTitle">${rule.name}</h2>
    <div class="plusRule">
        <span class="RuleLink">
            ${rule.rule} ACT <a href="${rule.url}" target="_blank">${rule.id}</a>
        </span>
    </div>
    <p class="RuleDescription">${rule.description}</p>
    <h2>Filter evaluations by result:</h2>
    <ol class="ResultList"></ol>`
    filteredRule.questions.forEach(function(question) {
        const originalQuestion = rule.questions[question.index]
        const isVisible = showQuestion(originalQuestion);
        if (isVisible) {
            if(!question.decisionTree) {
                generateResult(originalQuestion, question.index);
            } else {
                generateQuestion(originalQuestion, question.index);
            }
        }
    });

    rule.plusRule.forEach(function (plusLink) {
        const plusRuleSelection = document.querySelector('.ResultPage .result:last-child .plusRule .RuleLink');
        plusRuleSelection.insertAdjacentHTML('beforeend', `, <a href="${plusLink.plusRuleUrl}" target="_blank">${plusLink.plusRuleCode}</a>`);
    })

    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}

function generateManualTestSection(rule) {
    const questionSection = document.querySelector('.ResultPage .result:last-child');
    questionSection.innerHTML = `
    <h2 class="RuleTitle">${rule.name}</h2>
    <p class ="RuleLink">ACT <a href="${rule.url}">${rule.code}</a></p>
    <p class="RuleDescription">${rule.manualTest.description}</p>
    <p class="RuleImportance"><span class="RuleWhy">Why is this important:</span> ${rule.manualTest.importance}</p>
    <p class="stepsReproduce">Steps to reproduce:</p>
    <ol class="ResultList ManualTest"></ol>`
    generateManualTest(rule.manualTest, 0);
}

function generateManualTest(manualTest, index) {
    const manualSection = document.querySelector('.ResultList');
    const test = manualTest.test;
    const title = test.current().title;
    const status = test.getStatus();
    const question = test.getQuestion();

    if (!status) {
        manualSection.insertAdjacentHTML('beforeend', `<li>
            <div id="manualTest-${index}">
                <div class="manualTestText" id="text-0">${title}</div>
                <div class="Flex-h" id="manualTest-area-${index}">
                    <div class="manualTest-area">
                        <div class="manualTestQuestion" id="question-0">${question}</div>
                        <div id="radios-${index}">
                            <label for="yes">yes</label>
                            <input id="yes" type="radio" name="radio-${index}" value="1">
                            <label for="no">no</label>
                            <input id="no" type="radio" name="radio-${index}" value="0">
                        </div>
                    </div>
                </div>
            </div>
        </li>`);
    } else {
        manualSection.insertAdjacentHTML('beforeend', `<li>
            <div id="manualTest-${index}">
                <div class="CommunicateResult" id="manualTest-area-${index}">
                    <div>Status: <span>${status}</span></div>
                    <div>Reason: <span>${test.current().title}</span></div>
                    <textarea placeholder="add an observation here">${manualTest.note}</textarea>
                </div>
            </div>
        </li>`);
    }

    if(!test.firstElement()) {
        const manualTestArea = document.querySelector(`#manualTest-area-${index}`);
        manualTestArea.insertAdjacentHTML('beforeend', `<button id="button-revert-${index}">Revert</button>`);
    }

    const radios = document.querySelectorAll("input[type='radio'][name='radio-"+ index +"']");
    for (let f = 0; f < radios.length; f++) {
        radios[f].onchange = function (e) {
            if (e.target.value === "1") {
                test.next(true);
            } else {
                test.next(false);
            }
            if(test.getStatus()) {
                manualTest.complete = true;
            }
            updateResults();
        }
    }

    const button = document.querySelector(`#button-revert-${index}`);
    const textarea = document.querySelector(`#manualTest-area-${index} > textarea`);

    console.log("found textarea");
    console.log(textarea)

    if(button) {
        button.onclick = function() {
            test.revert(); 
            manualTest.complete = false;
            manualTest.note = '';
            updateResults();
        }
    }

    if(textarea) {
        console.log("area textarea");
        textarea.oninput = function(e) {
            console.log("textarea");
            console.log(manualTest)
            manualTest.note = e.target.value;
        }
    }
}

function generateResult(result, index) {
    let visible = '';

    if(result.manualAnswer !== "" && result.manualAnswer !== result.verdict) {
        visible = 'visible';
    }

    const questionSection = document.querySelector('.ResultList');
    let verdict = result.verdict;
    if(verdict === "warning") {
        verdict = "Cannot tell"
    }

    console.log(verdict);

    let counterClass = "";
    switch(verdict) {
        case "passed":
            counterClass = "result-counter-pass";
            break;
        case "failed":
            counterClass = "result-counter-fail";
            break;
        case "inapplicable":
            counterClass = "result-counter-inapplicable";
            break;
        case "Cannot tell":
            counterClass = "result-counter-cannottell";
            break;
        default:
            counterClass = "result-counter-uncompleted";
            break;
    }

    questionSection.insertAdjacentHTML('beforeend', `<li>
        <div id="question-${index}" class="result-counter-before ${counterClass}">
            <div class="htmlCodeWrapper">
            </div>
            <div class="CommunicateResult" id="question-area-${index}">
                <div>Status: <span>${verdict}</span></div>
                <div>Reason: <span>${result.description}</span></div>
                <textarea placeholder="add an observation here">${result.note}</textarea>
            </div>
            <i class="material-icons selectwarning ${visible}">warning</i>
            <label class="checkmark" for="select-${index}">Manually change this result</label>
            <select id="select-${index}">
                <option value="" selected>--</option>
                <option value="passed">Pass</option>
                <option value="failed">Fail</option>
                <option value="inapplicable">Inapplicable</option>
            </select>
        </div>
    </li>`);
    
    result.elements.forEach(function(htmlElement) {
        document.querySelector(`.ResultList #question-${index} .htmlCodeWrapper`).insertAdjacentHTML('beforeend', `<pre><code class="html">
        ${htmlElement.htmlCode.replace(/</g,"&lt;")}</code></pre>`);
    });

    if (result.elements[0]) {
        document.querySelector(`#question-${index}`).insertAdjacentHTML('afterbegin', `<label class="checkmark"><input type="checkbox" id="checkmark-question-${index}" name="checkmark-question-${index}" value="">Highlight on page</label>`);
    }

    function checkPageHighlight(checkmark) {
        checkmark.checked = result.selected;
        if (checkmark.checked) {
            result.elements.forEach(function(htmlElement) {
                highlightedItems.push(htmlElement.pointer);
                chrome.runtime.sendMessage({message:"overResultElement", element: htmlElement.pointer});
            });
        } else {
            result.elements.forEach(function(htmlElement) {
                const index = highlightedItems.findIndex(pointer => pointer === htmlElement.pointer);
                if (index > -1) {
                    highlightedItems.splice(index, 1);
                }
                chrome.runtime.sendMessage({message:"outResultElement", element: htmlElement.pointer});
            });
        }
    }

    const checkmark = document.querySelector(`#checkmark-question-${index}`);
    const select = document.querySelector(`#select-${index}`);
    const textarea = document.querySelector(`#question-area-${index} > textarea`);

    if (result.manualAnswer !== "warning" && result.manualAnswer !== "") {
        document.querySelector(`#select-${index} [value=${result.manualAnswer}]`).selected = true;
    }

    if (checkmark) {
        checkPageHighlight(checkmark);
        checkmark.onchange = function(e) {
            result.selected = e.target.checked;
            checkPageHighlight(checkmark);
        }
    }

    if(textarea) {
        console.log("area textarea");
        textarea.oninput = function(e) {
            console.log("textarea");
            console.log(result)
            result.note = e.target.value;
        }
    }

    select.onchange = function(e) {
        result.manualAnswer = e.target.value;
        updateResults();
    }

}

function generateQuestion(question, index) {
    const questionSection = document.querySelector('.ResultList');
    const decisionTree = question.decisionTree;
    let title = "";

    if (question.elements[0] && question.elements[0].accessibleName) {
        title = decisionTree.current().title.replace("#{a}", `"${question.elements[0].accessibleName}"`);
    } else {
        title = decisionTree.current().title.replace("#{a}", '');
    }
    
    const status = decisionTree.getStatus();

    console.log(status);

    let counterClass = "";
    switch(status) {
        case "Pass":
            counterClass = "result-counter-pass";
            break;
        case "Fail":
            counterClass = "result-counter-fail";
            break;
        default:
            counterClass = "result-counter-uncompleted";
            break;
    }

    if (!status) {
        questionSection.insertAdjacentHTML('beforeend', `<li>
            <div id="question-${index}" class="result-counter-before ${counterClass}">
                <div class="htmlCodeWrapper"> 
                </div>
                <div class="QuestionText" id="text-0">${title}</div>
                <div class="Flex-h" id="question-area-${index}">
                    <div id="radios-${index}">
                        <label for="yes">yes</label>
                        <input id="yes" type="radio" name="radio-${index}" value="1">
                        <label for="no">no</label>
                        <input id="no" type="radio" name="radio-${index}" value="0">
                    </div>
                </div>
            </div>
        </li>`);
    } else {
        questionSection.insertAdjacentHTML('beforeend', `<li>
            <div id="question-${index}" class="result-counter-before ${counterClass}">
                <div class="htmlCodeWrapper"> 
                </div>
                <div class="CommunicateResult" id="question-area-${index}">
                    <div>Status: <span>${status}</span></div>
                    <div>Reason: <span>${decisionTree.current().title}</span></div>
                    <textarea placeholder="add an observation here">${question.note}</textarea>
                </div>
            </div>
        </li>`);
    }

    question.elements.forEach(function(htmlElement) {
        document.querySelector(`.ResultList #question-${index} .htmlCodeWrapper`).insertAdjacentHTML('beforeend', `<pre><code class="html">
        ${htmlElement.htmlCode.replace(/</g,"&lt;")}</code></pre>`);
    });
    
    if(!decisionTree.firstElement()) {
        const question = document.querySelector(`#question-area-${index}`);
        question.insertAdjacentHTML('beforeend', `<button id="button-revert-${index}">Revert</button>`);
    }

    const radios = document.querySelectorAll("input[type='radio'][name='radio-"+ index +"']");
    for (let f = 0; f < radios.length; f++) {
        radios[f].onchange = function (e) {
            if (e.target.value === "1") {
                decisionTree.next(true);
            } else {
                decisionTree.next(false);
            }
            if(decisionTree.getStatus()) {
                storedQuestions.push(question);
                question.complete = true;
            }
            updateResults();
        }
    }

    if (question.elements[0]) {
        document.querySelector(`#question-${index}`).insertAdjacentHTML('afterbegin', `<label class="checkmark"><input type="checkbox" id="checkmark-question-${index}" name="checkmark-question-${index}" value="">Highlight on page</label>`);
    }

    function checkPageHighlight(checkmark) {
        checkmark.checked = question.selected;
        if (checkmark.checked) {
            question.elements.forEach(function(htmlElement) {
                highlightedItems.push(htmlElement.pointer);
                chrome.runtime.sendMessage({message:"overResultElement", element: htmlElement.pointer});
            });
        } else {
            question.elements.forEach(function(htmlElement) {
                const index = highlightedItems.findIndex(pointer => pointer === htmlElement.pointer);
                if (index > -1) {
                    highlightedItems.splice(index, 1);
                }
                chrome.runtime.sendMessage({message:"outResultElement", element: htmlElement.pointer});
            });
        }
    }

    const button = document.querySelector(`#button-revert-${index}`);
    const textarea = document.querySelector(`#question-area-${index} > textarea`);
    const checkmark = document.querySelector(`#checkmark-question-${index}`);

    console.log("found textarea");
    console.log(textarea)

    if(button) {
        button.onclick = function() {
            decisionTree.revert(); 
            question.complete = false;
            const storedQuestionIndex = storedQuestions.findIndex(storedQuestion => {
                if(!storedQuestion.elements[0]  || !question.elements[0]) {
                    return false;
                }
                return storedQuestion.elements[0].pointer === question.elements[0].pointer;
            });
            if (storedQuestionIndex > -1) {
                storedQuestions.splice(storedQuestionIndex, 1);
            }
            question.note = '';
            updateResults();
        }
    }

    if(textarea) {
        console.log("area textarea");
        textarea.oninput = function(e) {
            console.log("textarea");
            console.log(question)
            question.note = e.target.value;
        }
    }

    if(checkmark) {
        checkPageHighlight(checkmark);
        checkmark.onchange = function(e) {
            question.selected = e.target.checked;
            checkPageHighlight(checkmark);
        }
    }
}

function updateTotal() {
    resultData.count = 0;
    resultData.pass = 0;
    resultData.fail = 0;
    resultData.inapplicable = 0;
    resultData.warning = 0;
    resultData.missing = 0;
    resultData.categories.forEach(function (category) {
        category.count = 0;
        category.pass = 0;
        category.fail = 0;
        category.inapplicable = 0;
        category.warning = 0;
        category.missing = 0;
        category.rules.forEach(function(rule) {
            rule.count = 0;
            if (rule.manualTest) {
                if(rule.manualTest.complete) {
                    resultData.count++;
                    category.count++;
                    rule.count++;
                    switch(rule.manualTest.test.getStatus()) {
                        case 'Pass':
                            resultData.pass++;
                            category.pass++;
                            break;
                        case 'Fail':
                            resultData.fail++;
                            category.fail++;
                            break;
                    }
                } else {
                    category.missing++;
                    resultData.missing++;
                }
            } else {
                rule.questions.forEach(function(question) {
                    if(question.complete) {
                        resultData.count++;
                        category.count++;
                        rule.count++;
                        if (!question.decisionTree) {
                            const changed = question.manualAnswer || question.verdict;
                            switch(changed) {
                                case 'passed':
                                    resultData.pass++;
                                    category.pass++;
                                    break;
                                case 'failed':
                                    resultData.fail++;
                                    category.fail++;
                                    break;
                                case 'inapplicable':
                                    resultData.inapplicable++;
                                    category.inapplicable++;
                                    break;
                                case 'warning':
                                    resultData.warning++;
                                    category.warning++;
                                    break;
                            }
                        } else {
                            switch(question.decisionTree.getStatus()) {
                                case 'Pass':
                                    resultData.pass++;
                                    break;
                                case 'Fail':
                                    resultData.fail++;
                                    break;
                                case 'Inapplicable':
                                    resultData.inapplicable++;
                                    break;
                                case 'warning':
                                    resultData.warning++;
                                    break;
                            }
                        }
                    } else {
                        category.missing++;
                        resultData.missing++;
                    }
                });
            }
        });
    });
}




function generateResultCount() {
    const text = document.querySelector("#resultcount");
    text.innerHTML = 
    `
    <h2> Filter tests by result: </h2>
    <div>
        <div>
            <input type="checkbox" id="passLeftFilter" name="passLeftFilter" value="passLeftFilter" checked>
            <label class="checkbox" for="passLeftFilter">Pass:&nbsp</label>
            <span id="passCount" class="result-counter result-counter-pass">${resultData.pass}</span>
        </div>
        <div>
            <input type="checkbox" id="failLeftFilter" name="failLeftFilter" value="failLeftFilter" checked>
            <label class="checkbox" for="failLeftFilter">Fail:&nbsp</label>
            <span id="failCount" class="result-counter result-counter-fail">${resultData.fail}</span> 
        </div>
        <div>
            <input type="checkbox" id="cannotTellLeftFilter" name="cannotTellLeftFilter" value="cannotTellLeftFilter" checked>
            <label class="checkbox" for="cannotTellLeftFilter">Cannot tell:&nbsp</label>
            <span id="warningCount" class="result-counter result-counter-cannottell">${resultData.warning}</span>
        </div>
        <div>
            <input type="checkbox" id="inapplicableLeftFilter" name="inapplicableLeftFilter" value="inapplicableLeftFilter" checked>
            <label class="checkbox" for="inapplicableLeftFilter">Inapplicable:&nbsp</label>
            <span id="inappliacbleCount" class="result-counter result-counter-inapplicable">${resultData.inapplicable}</span> 
        </div>
        <div>
            <input type="checkbox" id="uncompletedLeftFilter" name="uncompletedLeftFilter" value="uncompletedLeftFilter" checked>
            <label class="checkbox" for="uncompletedLeftFilter">Uncompleted evaluations:&nbsp</label>
            <span id="missingCount" class="result-counter result-counter-uncompleted">${resultData.missing}</span>
         </div>
    </div>
    <br>
    <h2>Legend:</h2>
       <div>Pass:&nbsp<label class="result-counter result-counter-pass reduce-size"></label></div>
       <div>Fail:&nbsp<label class="result-counter result-counter-fail reduce-size"></label></div>
       <div>Cannot Tell:&nbsp<label class="result-counter result-counter-cannottell reduce-size"></label></div>
       <div>Innaplicable:&nbsp<label class="result-counter result-counter-inapplicable reduce-size"</label></div>
       <div>Uncompleted evaluations:&nbsp<label class="result-counter result-counter-uncompleted reduce-size"</label></div>
       <div>Total evaluations:&nbsp<label class="result-counter result-counter-total reduce-size"</label></div>
    <h2>List of tests:</h2>`;
  
    const uncompletedTestsFilter = document.querySelector('#uncompletedLeftFilter');
    const inapplicableFilter = document.querySelector('#inapplicableLeftFilter');
    const failFilter = document.querySelector('#failLeftFilter');
    const passFilter = document.querySelector('#passLeftFilter');
    const cannotTellFilter = document.querySelector('#cannotTellLeftFilter');

    passFilter.checked = filtersLeft.pass;
    failFilter.checked = filtersLeft.fail;
    cannotTellFilter.checked = filtersLeft.cannotTell;
    inapplicableFilter.checked = filtersLeft.inapplicable;
    uncompletedTestsFilter.checked = filtersLeft.uncompletedTests;

    uncompletedTestsFilter.onchange = function(e) {
        filtersLeft.uncompletedTests = e.target.checked;
        updateResults();
    }
    inapplicableFilter.onchange = function(e) {
        filtersLeft.inapplicable = e.target.checked;
        updateResults();        
    }
    failFilter.onchange = function(e) {
        filtersLeft.fail = e.target.checked;
        updateResults();        
    }
    cannotTellFilter.onchange = function(e) {
        filtersLeft.cannotTell = e.target.checked;
        updateResults();        
    }
    passFilter.onchange = function(e) {
        filtersLeft.pass = e.target.checked;
        updateResults();        
    }
}

function generateAccordions(originalCategory, category) {
    const accordionSection = document.querySelector('.ResultPage .result:first-child');

    let text = "";
    if (category.total === 0) {
        text = `No evaluations available.`;
    } else if (category.total === category.count) {
            text = `All evaluations completed.`;
    } else {
        text = `Completed ${category.count} out of ${category.total} evaluations.`;
    }

    let filterCategoryCount = "";

    if(filtersLeft.pass)
        filterCategoryCount += `<li><div class="result-counter result-counter-pass">${category.pass}</div></li>`;
    if(filtersLeft.fail)
        filterCategoryCount += `<li><div class="result-counter result-counter-fail">${category.fail}</div></li>`;
   
    if(filtersLeft.cannotTell)
        filterCategoryCount += `<li><div class="result-counter result-counter-cannottell">${category.warning}</div></li>`;
    if(filtersLeft.inapplicable)
        filterCategoryCount += `<li><div class="result-counter result-counter-inapplicable">${category.inapplicable}</div></li>`;
    if(filtersLeft.uncompletedTests)
        filterCategoryCount += `<li><div class="result-counter result-counter-uncompleted">${category.missing}</div></li>`;

    filterCategoryCount += `<li><div class="result-counter result-counter-total">${category.total}</div></li>`;

    accordionSection.insertAdjacentHTML('beforeend', `<div class="accordion-group">
    <button id="category-button-${category.fixedName}" class="accordion">
        <div class="category-content">
            <span>${category.name}</span>
            <ul class="counter-list-color">
                ${filterCategoryCount}
            </ul>
        </div>
    </button>
    <div id="panel-category-${category.fixedName}" class="panel ${category.selected ? 'active' : ''}"></div>
    </div>`);

    const button = document.querySelector(`#category-button-${category.fixedName}`);

    button.onclick = function() {
        originalCategory.selected = !originalCategory.selected;
        updateResults();
    }
}

function generatePanelRule(category, originalRule, rule) {
    const accordion = document.querySelector(`#panel-category-${category.fixedName}`);

    let hasAuto = false;
    let hasSemi = false;
    let hasManual = false;

    if(rule.questions) {
        hasAuto = rule.questions.some(question => question.type === 'auto');
        hasSemi = rule.questions.some(question => question.type === 'semi');
    } else {
        hasManual = true;
    }

    let text = "";
    if (rule.total === 0) {
        text = `No evaluations available.`;
    } else if (rule.total === rule.count) {
            text = `All ${rule.total} evaluations completed.`;
    } else {
        text = `Completed ${rule.count} out of ${rule.total} evaluations.`;
    }


    const panel = `<button id="rule-button-${rule.rule}" class="Flex-h PanelButton ${rule.selected ? 'active' : ''}">
        <div class="panelRule">
            <span class="panelRuleName">${rule.name}</span>
        </div>
        <span class="panelRuleCount">${text}</span>
    </button>`

    

    accordion.insertAdjacentHTML('beforeend', panel);

    
    //antes afterbegin

    const ruleName = document.querySelector(`#rule-button-${rule.rule} .panelRuleName`);
    if (hasManual) {
        ruleName.insertAdjacentHTML('afterend', `<i class="material-icons testtype">person</i>`);
    }

    if (hasSemi) {
        ruleName.insertAdjacentHTML('afterend', `<i class="material-icons testtype">engineering</i>`);
    }

    if (hasAuto) {
        ruleName.insertAdjacentHTML('afterend', `<i class="material-icons testtype">miscellaneous_services</i>`);
    }


    const button = document.querySelector(`#rule-button-${rule.rule}`);
    button.onclick = function() {
        resultData.categories.forEach(function(category) {
            category.rules.forEach(function (changeRule) {
                changeRule.selected = false;
            });
        });
        originalRule.selected = true;
        document.querySelector(`.ResultSection.result`).scrollTop = 0;
        storedQuestions = [];
        updateResults();
    }
}
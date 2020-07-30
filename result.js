import rules from "./rules/index.js";
import rulesCategories from "./rules/categories.js"; 
import assessments from "./rules/assessments/index.js";
import DecisionTree from "./DecisionTree.js";
import ManualSteps from "./ManualSteps.js";
//const generateEARLAssertions = require('./node_modules/@qualweb/earl-reporter/dist/index.js').generateEARLAssertions;
import resultToEarl from "./earl.js";

//import result from "./testData.js";
let resultData = {};
let highlightedItems = [];

let filters = {
    pass : true,
    fail : true,
    cannotTell : true,
    inapplicable : true,
    uncompletedTests : true
}

let storedQuestions = [];

chrome.runtime.sendMessage({message:"resultLoaded"});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        //console.log("receiving message");
        if(request.message === "resultsToPopup") {
            //console.log("request.values", request);
            resultData = generateManualTests(generateCategoriesData(request.values, request.options), request.options.manual);
            updateResults();
            const exportButton = document.querySelectorAll('.ExportButton')[0];
            const removeHighlights = document.querySelectorAll('.HighlightButton')[0];
            exportButton.onclick = async function() {
                const name = "Tânia Frazão";
                console.log(await resultToEarl(request.result, resultData, request.website, name));
            }

            removeHighlights.onclick = async function() {
                console.log(highlightedItems);
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
/*
//for tests. remove this

const options = {
    manual: true,
    semimanual: true,
    automatic: true,
}

const rulesToArray = Object.values(result.rules);
const onlyValidResults = rulesToArray.map(rule => {
    const results = rule.results.filter(item => {
        return item.verdict !== "inapplicable" && item.verdict !== "";
    });

    return {
        code: rule.code,
        description: rule.description,
        results: results,
        name: rule.name
    }
});

resultData = generateManualTests(generateCategoriesData(result, options), options.manual);
updateResults();
//
*/
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

        //console.log(ruleValue);
/*
        const indexValue = rules.findIndex(rule => {
            if(Array.isArray(rule)) {
                return rule[0].code === ruleCode;
            }
            return rule.code === ruleCode;
        });
*/

        const rulesArray = Object.entries(rulesCategories);

        const indexValue = rulesArray.findIndex(rule => {
            return rule[1].some(ruleCategoryValue => ruleCategoryValue === ruleCode.split("-")[2]); 
        });

        //console.log("values", result);
        //console.log("ruleCode", ruleCode);
        //console.log("results", ruleValue.results);
        
        if(indexValue > -1) {
            /*
            const manualRule = rules[indexValue];

            //console.log("manualRule", manualRule);

            const currentCategory = manualRule.category;
            const getCategoryIndex = semiManualTests.categories.findIndex(function(category) {
                return category.name === currentCategory;
            });
            */

            const currentCategory = rulesArray[indexValue][0];
            const getCategoryIndex = semiManualTests.categories.findIndex(function(category) {
                return category.name === currentCategory;
            });

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
                        //console.log(manual.prerequisite);
                        //console.log(result.resultCode);
                        manual.prerequisite.split(',').forEach(function(prerequisite) {
                            const prerequisiteNoSpace = prerequisite.replace(/\s/g, '');
                            if (prerequisiteNoSpace === result.resultCode) {
                                ruleToDecisionTree = manual;
                            }
                        })
                    });

                    //console.log(ruleToDecisionTree)

                    total++;
                    questions.push({
                        ...result,
                        decisionTree: new DecisionTree(ruleToDecisionTree),
                        complete: false,
                        selected: false,
                        manualAnswer: "",
                        note: '',
                        type: 'semi',
                    });
                } else if(options.automatic) {
                    total++;
                    questions.push({
                        ...result,
                        selected: false,
                        complete: true,
                        manualAnswer: "",
                        note: '',
                        type: 'auto'
                    });
                }
            });

            semiManualTests.total += total;

            if (getCategoryIndex === -1) {
                semiManualTests.categories.push({
                    name: currentCategory,
                    fixedName: currentCategory.replace(/ /g, '').replace(/[^A-Za-z0-9]/g, ''),
                    total: total,
                    count: 0,
                    selected: false,
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
                            plusRule: manualRule && manualRule.plusRule ? manualRule.plusRule : []
                        }
                    ],
                });
            } else {
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
                        plusRule: manualRule && manualRule.plusRule ? manualRule.plusRule : []
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

        //console.log("assessment", assessment);

        if (getCategoryIndex === -1) {
            manualTests.categories.push({
                name: assessment.category,
                fixedName: assessment.category.replace(/ /g, '').replace(/[^A-Za-z0-9]/g, ''),
                total: 1,
                count: 0,
                selected: false,
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

    return manualTests;
}

function updateResults() {
    console.log(resultData);
    updateTotal();
    removeHTML();
    generateResultCount();
    resultData.categories.forEach(function (category){
        generateAccordions(category);
        category.rules.forEach(function(rule) {
            generatePanelRule(category, rule);
            if (rule.selected) {
                if(rule.questions) {
                    generateQuestionSection(rule);
                    showFilters()
                } else if(rule.manualTest) {
                    generateManualTestSection(rule);
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
        console.log(storedQuestions);
        console.log(question);
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

function showFilters() {
    const resultSection = document.querySelector('.ResultList');
    resultSection.insertAdjacentHTML('beforeBegin', `<div class="resultFilters">
    Pass<input type="checkbox" id="passFilter" name="passFilter">
    Fail<input type="checkbox" id="failFilter" name="failFilter">
    Cannot tell<input type="checkbox" id="cannotTellFilter" name="cannotTellFilter">
    Inapplicable<input type="checkbox" id="inapplicableFilter" name="inapplicableFilter">
    Uncompleted tests <input type="checkbox" id="uncompletedTestsFilter" name="uncompletedTestsFilter">
    </div>`);

    const passFilter = document.querySelector('#passFilter');
    const failFilter = document.querySelector('#failFilter');
    const cannotTellFilter = document.querySelector('#cannotTellFilter');
    const inapplicableFilter = document.querySelector('#inapplicableFilter');
    const uncompletedTestsFilter = document.querySelector('#uncompletedTestsFilter');

    passFilter.checked = filters.pass;
    failFilter.checked = filters.fail;
    cannotTellFilter.checked = filters.cannotTell;
    inapplicableFilter.checked = filters.inapplicable;
    uncompletedTestsFilter.checked = filters.uncompletedTests;

    passFilter.onchange = function(e) {
        filters.pass = e.target.checked;
        storedQuestions = [];
        updateResults();
    }
    failFilter.onchange = function(e) {
        filters.fail = e.target.checked;
        storedQuestions = [];
        updateResults();
    }
    cannotTellFilter.onchange = function(e) {
        filters.cannotTell = e.target.checked;
        storedQuestions = [];
        updateResults();
    }
    inapplicableFilter.onchange = function(e) {
        filters.inapplicable = e.target.checked;
        storedQuestions = [];
        updateResults();
    }
    uncompletedTestsFilter.onchange = function(e) {
        filters.uncompletedTests = e.target.checked;
        storedQuestions = [];
        updateResults();
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

function generateQuestionSection(rule) {
    const questionSection = document.querySelector('.ResultPage .result:last-child');
    questionSection.innerHTML = `<h2 class="RuleTitle">${rule.name}</h2>
    <div class="plusRule">
        <span class="RuleLink">
            ${rule.rule} ACT <a href="${rule.url}" target="_blank">${rule.id}</a>
        </span>
    </div>
    <p class="RuleDescription">${rule.description}</p>
    <ol class="ResultList"></ol>`
    rule.questions.forEach(function(question, index) {
        const isVisible = showQuestion(question);
        if (isVisible) {
            if(!question.decisionTree) {
                generateResult(question, index);
            } else {
                generateQuestion(question, index);
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
    console.log(rule);
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

    if(button) {
        button.onclick = function() {
            test.revert(); 
            manualTest.complete = false;
            manualTest.note = '';
            updateResults();
        }
    }

    if(textarea) {
        textarea.oninput = function(e) {
            manualTest.note = e.target.value;
        }
    }
}

function generateResult(result, index) {
    //console.log(result);
    let visible = '';

    if(result.manualAnswer !== "" && result.manualAnswer !== result.verdict) {
        visible = 'visible';
    }

    const questionSection = document.querySelector('.ResultList');
    let verdict = result.verdict;
    if(verdict === "warning") {
        verdict = "Cannot tell"
    }

    questionSection.insertAdjacentHTML('beforeend', `<li>
        <div id="question-${index}">
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
        //console.log(question.selected);
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

    //var selectOptions = Array.apply(null, select.options).map(option => option.value);
    console.log(result.manualAnswer)
    if (result.manualAnswer !== "warning" && result.manualAnswer !== "") {
        document.querySelector(`#select-${index} [value=${result.manualAnswer}]`).selected = true;
    }

    if (checkmark) {
        checkPageHighlight(checkmark);
        checkmark.onchange = function(e) {
            console.log("changed highlight state");
            result.selected = e.target.checked;
            checkPageHighlight(checkmark);
        }
    }

    select.onchange = function(e) {
        //console.log(e.target.value)
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
    }
    
    const status = decisionTree.getStatus();

    if (!status) {
        questionSection.insertAdjacentHTML('beforeend', `<li>
            <div id="question-${index}">
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
            <div id="question-${index}">
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
        //console.log(question.selected);
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
        textarea.oninput = function(e) {
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
    resultData.categories.forEach(function (category) {
        category.count = 0;
        category.rules.forEach(function(rule) {
            rule.count = 0;
            if (rule.manualTest) {
                //console.log(rule.manualTest)
                if(rule.manualTest.complete) {
                    resultData.count++;
                    category.count++;
                    rule.count++;
                    switch(rule.manualTest.test.getStatus()) {
                        case 'Pass':
                            resultData.pass++;
                            break;
                        case 'Fail':
                            resultData.fail++;
                            break;
                    }
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
                                    break;
                                case 'failed':
                                    resultData.fail++;
                                    break;
                                case 'inapplicable':
                                    resultData.inapplicable++;
                                    break;
                                case 'warning':
                                    resultData.warning++;
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
                    }
                });
            }
            resultData.missing = resultData.total - resultData.count;
        });
    });
}

function generateResultCount() {
    const text = document.querySelector("#resultcount");
    text.innerHTML = `Pass: <span id="passCount">${resultData.pass}</span>  
    Fail: <span id="failCount">${resultData.fail}</span> 
    Cannot tell: <span id="warningCount">${resultData.warning}</span> 
    Inapplicable: <span id="inappliacbleCount">${resultData.inapplicable}</span> 
    Uncompleted tests: <span id="missingCount">${resultData.missing}</span>`;
}

function generateAccordions(category) {
    const accordionSection = document.querySelector('.ResultPage .result:first-child');

    let text = "";
    if (category.total === 0) {
        text = `No tests available.`;
    } else if (category.total === category.count) {
            text = `All tests completed.`;
    } else {
        text = `Completed ${category.count} out of ${category.total} tests.`;
    }

    accordionSection.insertAdjacentHTML('beforeend', `<div class="accordion-group">
    <button id="category-button-${category.fixedName}" class="accordion">
        <div class=Flex-h>
            <span>${category.name}</span>
            <span>${text}</span>
        </div>
    </button>
    <div id="panel-category-${category.fixedName}" class="panel ${category.selected ? 'active' : ''}"></div>
    </div>`);

    const button = document.querySelector(`#category-button-${category.fixedName}`);
    //console.log(button);
    button.onclick = function() {
        category.selected = !category.selected;
        updateResults();
    }
}

function generatePanelRule(category, rule) {
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
        text = `No tests available.`;
    } else if (rule.total === rule.count) {
            text = `All ${rule.total} tests completed.`;
    } else {
        text = `Completed ${rule.count} out of ${rule.total} tests.`;
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
        rule.selected = true;
        document.querySelector(`.ResultSection.result`).scrollTop = 0;
        storedQuestions = [];
        updateResults();
    }
}
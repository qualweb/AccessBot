import rules from "./rules/index.js";
import assessments from "./rules/assessments/index.js";
import DecisionTree from "./DecisionTree.js";
import ManualSteps from "./ManualSteps.js";
//const generateEARLAssertions = require('./node_modules/@qualweb/earl-reporter/dist/index.js').generateEARLAssertions;
import {generateEARLAssertions} from "@qualweb/earl-reporter";

//import result from "./testData.js";

let resultData = {};

chrome.runtime.sendMessage({message:"resultLoaded"});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        //console.log("receiving message");
        if(request.message === "resultsToPopup") {
            //console.log("request.values", request.values);
            resultData = generateManualTests(generateCategoriesData(request.values, request.options), request.options.manual);
            updateResults();
            const exportButton = document.querySelectorAll('.ExportButton')[0];
            exportButton.onclick = async function() {
                console.log("new object");
                console.log(request.result);
                console.log(await generateEARLAssertions(request.result));
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

        const indexValue = rules.findIndex(rule => {
            if(Array.isArray(rule)) {
                return rule[0].code === ruleCode;
            }
            return rule.code === ruleCode;
        });

        //console.log("values", result);
        //console.log("ruleCode", ruleCode);
        //console.log("results", ruleValue.results);
        
        if(indexValue > -1) {
            const manualRule = rules[indexValue];

            //console.log("manualRule", manualRule);

            const currentCategory = manualRule.category;
            const getCategoryIndex = semiManualTests.categories.findIndex(function(category) {
                return category.name === currentCategory;
            });

            let total = 0;
            let questions = [];

            ruleValue.results.forEach((result) => {
                if (isRuleValid(manualRule, result) && options.semimanual) {
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
                        type: 'semi'
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
        } else {
            manualTests.categories[getCategoryIndex].rules.push(
                {
                    rule: assessment.code,
                    name: assessment.name,
                    description: ruleDescription,
                    total: manualTests.categories[getCategoryIndex].rules.total++,
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
            );
            manualTests.categories[getCategoryIndex].total++;
        }
    });

    manualTests.categories.sort(function(a, b) {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });

    return manualTests;
}

function updateResults() {
    //console.log(resultData);
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
                } else if(rule.manualTest) {
                    generateManualTestSection(rule);
                }
            }
        })
    })
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
    <span class="RuleLink">${rule.rule} ACT <a href="${rule.url}" target="_blank">${rule.id}</a></span>
    <p class="RuleDescription">${rule.description}</p>
    <ol class="ResultList"></ol>`
    rule.questions.forEach(function(question, index) {
        if(!question.decisionTree) {
            generateResult(question, index);
         } else {
            generateQuestion(question, index);
        }
    });

    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}

function generateManualTestSection(rule) {
    const questionSection = document.querySelector('.ResultPage .result:last-child');
    questionSection.innerHTML = `
    <h2 class="RuleTitle">${rule.name}</h2>
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
                            <input type="radio" name="radio-${index}" value="1">yes
                            <input type="radio" name="radio-${index}" value="0">no
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
    const code = result.htmlCode.replace(/</g,"&lt;");
    questionSection.insertAdjacentHTML('beforeend', `<li>
        <div id="question-${index}">
            <label class="checkmark"><input type="checkbox" id="checkmark-question-${index}" name="checkmark-question-${index}" value="">Highlight on page</label>
            <pre><code class="html">
                ${code}
            </code></pre>
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

    function checkPageHighlight(checkmark) {
        //console.log(question.selected);
        checkmark.checked = result.selected;
        if (checkmark.checked) {
            chrome.runtime.sendMessage({message:"overResultElement", element: result.pointer});
        } else {
            chrome.runtime.sendMessage({message:"outResultElement", element: result.pointer});
        }
    }

    const checkmark = document.querySelector(`#checkmark-question-${index}`);
    const select = document.querySelector(`#select-${index}`);

    //var selectOptions = Array.apply(null, select.options).map(option => option.value);
    console.log(result.manualAnswer)
    if (result.manualAnswer !== "warning" && result.manualAnswer !== "") {
        document.querySelector(`#select-${index} [value=${result.manualAnswer}]`).selected = true;
    }

    checkPageHighlight(checkmark);

    checkmark.onchange = function(e) {
        result.selected = e.target.checked;
        checkPageHighlight(checkmark);
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
    const title = decisionTree.current().title;
    const code = question.htmlCode.replace(/</g,"&lt;");
    const status = decisionTree.getStatus();

    if (!status) {
        questionSection.insertAdjacentHTML('beforeend', `<li>
            <div id="question-${index}">
                <label class="checkmark"><input type="checkbox" id="checkmark-question-${index}" name="checkmark-question-${index}" value="">Highlight on page</label>
                <pre><code class="html">
                    ${code}
                </code></pre>
                <div class="QuestionText" id="text-0">${title}</div>
                <div class="Flex-h" id="question-area-${index}">
                    <div id="radios-${index}">
                        <input type="radio" name="radio-${index}" value="1">yes
                        <input type="radio" name="radio-${index}" value="0">no
                    </div>
                </div>
            </div>
        </li>`);
    } else {
        questionSection.insertAdjacentHTML('beforeend', `<li>
            <div id="question-${index}">
                <label class="checkmark"><input type="checkbox" id="checkmark-question-${index}" name="checkmark-question-${index}" value="">Highlight on page</label>
                <pre><code class="html">
                    ${code}
                </code></pre>
                <div class="CommunicateResult" id="question-area-${index}">
                    <div>Status: <span>${status}</span></div>
                    <div>Reason: <span>${decisionTree.current().title}</span></div>
                    <textarea placeholder="add an observation here">${question.note}</textarea>
                </div>
            </div>
        </li>`);
    }

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
                question.complete = true;
            }
            updateResults();
        }
    }

    function checkPageHighlight(checkmark) {
        //console.log(question.selected);
        checkmark.checked = question.selected;
        if (checkmark.checked) {
            chrome.runtime.sendMessage({message:"overResultElement", element: question.pointer});
        } else {
            chrome.runtime.sendMessage({message:"outResultElement", element: question.pointer});
        }
    }

    const button = document.querySelector(`#button-revert-${index}`);
    const textarea = document.querySelector(`#question-area-${index} > textarea`);
    const checkmark = document.querySelector(`#checkmark-question-${index}`);

    if(button) {
        button.onclick = function() {
            decisionTree.revert(); 
            question.complete = false;
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
        });
    });
}

function generateResultCount() {
    const text = document.querySelector("#resultcount");
    text.innerHTML = `Pass: <span id="passCount">${resultData.pass}</span> Fail: <span id="failCount">${resultData.fail}</span> Cannot tell: <span id="warningCount">${resultData.warning}</span> Inapplicable: <span id="inappliacbleCount">${resultData.inapplicable}</span>`;
}

function generateAccordions(category) {
    const accordionSection = document.querySelector('.ResultPage .result:first-child');

    accordionSection.insertAdjacentHTML('beforeend', `<button id="category-button-${category.fixedName}" class="accordion">
        <div class=Flex-h>
            <span>${category.name}</span>
            <span>${category.count} / ${category.total}</span>
        </div>
    </button>
    <div id="panel-category-${category.fixedName}" class="panel ${category.selected ? 'active' : ''}">
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


    const panel = `<button id="rule-button-${rule.rule}" class="Flex-h PanelButton ${rule.selected ? 'active' : ''}">
        <span class="panelRuleName">${rule.name}</span>
        <span class="panelRuleCount">${rule.count} / ${rule.total}</span>
    </button>`

    accordion.insertAdjacentHTML('beforeend', panel);

    const button = document.querySelector(`#rule-button-${rule.rule}`);

    if (hasManual) {
        button.insertAdjacentHTML('afterbegin', `<i class="material-icons testtype">person</i>`);
    }

    if (hasSemi) {
        button.insertAdjacentHTML('afterbegin', `<i class="material-icons testtype">engineering</i>`);
    }

    if (hasAuto) {
        button.insertAdjacentHTML('afterbegin', `<i class="material-icons testtype">miscellaneous_services</i>`);
    }

    button.onclick = function() {
        resultData.categories.forEach(function(category) {
            category.rules.forEach(function (changeRule) {
                changeRule.selected = false;
            });
        });
        rule.selected = true;
        updateResults();
    }
}
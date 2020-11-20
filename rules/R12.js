import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R12',
    category: CategoryConst.LINKS,
    plusRule: [ {plusRuleCode:'5effbb', plusRuleUrl: 'https://act-rules.github.io/rules/5effbb', plusRuleName: 'Link in context is descriptive.'}],
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Does accessible name #{a} describe purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has a valid accessible name and it describes its purpose",
                
            },
            {
                key: 'Fail',
                title: "The test target has a valid accessible name but doesn't describe its purpose.",
            
            }
        ]
    }]
}
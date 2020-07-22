import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R1',
    category: CategoryConst.TITLE,
    plusRule: [ {plusRuleCode:'c4a8a4', plusRuleUrl: 'https://act-rules.github.io/rules/c4a8a4', plusRuleName: 'HTML page title is descriptive.'}],
    tree: [{
        prerequisite: 'RC3',
        fluxo: [
            {
                key: '1A',
                title: 'Does title describe page?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The \`title\` element exists and it's not empty and describes page. ",
                
            },
            {
                key: 'Fail',
                title: "The \`title\` element exists and is not empy but does not describe page. ",
            
            }
        ]
    }]
}
import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R35',
    category: CategoryConst.HEADINGS,
    plusRule: [{plusRuleCode:'b49b2e', plusRuleUrl: 'https://act-rules.github.io/rules/b49b2e', plusRuleName: 'Heading is descriptive.'}],
    tree: [{
        prerequisite: 'RC1',
        fluxo: [
            {
                key: '1A',
                title: 'Does the heading describe the contents of its section?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The heading describes the contents of its section."
                
            },
            {
                key: "Fail",
                title: "The heading does not describe the contents of its section."
            },
        ]
    }]
}
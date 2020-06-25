import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R22',
    category: CategoryConst.LANGUAGE,
    tree: [{
        prerequisite: 'RC2',
        fluxo: [
            {
                key: '1A',
                title: 'Is the language  of the content the same as the value of lang attribute?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has a valid `lang` attribute which is according to the language of  the content.",
                
            },
            {
                key: 'Fail',
                title: "`The \`lang\` attribute value  isn't according to the language  of the content.",
            
            }
        ]
    }]
}
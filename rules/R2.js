import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R2',
    category: CategoryConst.LANGUAGE,
    tree: [{
        prerequisite: 'RC1',
        fluxo: [
            {
                key: '1A',
                title: 'Is the content of the page according to the value of lang attribute?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "`The \`lang\` attribute exists and its value is according to the content of the page. ",
                
            },
            {
                key: 'Fail',
                title: "`The \`lang\` attribute value  isn't according to the content of the page. ",
            
            }
        ]
    }]
}
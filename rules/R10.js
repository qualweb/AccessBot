import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R10',
    category: CategoryConst.IFRAMES,
    tree: [{
        prerequisite: 'RC3',
        fluxo: [
            {
                key: '1A',
                title: 'Is the content equivalent?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The \`iframes\` with the same accessible name have equal content.",
                
            },
            {
                key: 'Fail',
                title: "`The \`iframes\` with the same accessible name have different content.",
            
            }
        ]
    }]
}
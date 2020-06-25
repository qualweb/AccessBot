import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R9',
    category: CategoryConst.LINKS,
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
                title: "The \`links\` with the same accessible name have equivalent content.`",
                
            },
            {
                key: 'Fail',
                title: "`The \`links\` with the same accessible name have different content.",
            
            }
        ]
    }]
}
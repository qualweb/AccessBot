import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R44',
    category: CategoryConst.LINKS,
    tree: [{
        prerequisite: 'RC3',
        flow: [
            {
                key: '1A',
                title: 'Do the links have the same purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The \`links\` with the same accessible name have equal purpose."
                
            },
            {
                key: "Fail",
                title: "`The \`links\` with the same accessible name have different content."
            },
        ]
    }]
}
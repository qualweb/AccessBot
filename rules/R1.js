import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R1',
    category: CategoryConst.TITLE,
    tree: [{
        prerequisite: 'RC3',
        fluxo: [
            {
                key: '1A',
                title: 'Does title describes page?',
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
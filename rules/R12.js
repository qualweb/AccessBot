import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R12',
    category: CategoryConst.LINKS,
    tree: [{
        prerequisite: 'RC1',
        fluxo: [
            {
                key: '1A',
                title: 'accessible name describes purpose?',
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
import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R19',
    category: CategoryConst.IFRAMES,
    tree: [{
        prerequisite: 'RC2',
        fluxo: [
            {
                key: '1A',
                title: 'Does accessible name describes purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has an accessible name and describes its purpose",
                
            },
            {
                key: 'Fail',
                title: "The test target has a valid accessible name but doesn't describe its purpose.",
            
            }
        ]
    }]
}
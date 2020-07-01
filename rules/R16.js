import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R16',
    category: CategoryConst.FORMS,
    tree: [{
        prerequisite: 'RC1',
        fluxo: [
            {
                key: '1A',
                title: 'Does accessible name describes purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has an accessible name and describes purpose",
                
            },
            {
                key: 'Fail',
                title: "The test target has an accessible name but does not describe purpose",
            
            }
        ]
    }]
}
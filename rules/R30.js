import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R30',
    category: CategoryConst.LABEL,
    tree: [{
        prerequisite: 'RC4',
        fluxo: [
            {
                key: '1A',
                title: 'Does accessible name describes purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The complete visible text content of the test target either matches or is contained within its accessible name. It's accessible name also describes purpose.",
                
            },
            {
                key: 'Fail',
                title: "The complete visible text content of the test target either matches or is contained within its accessible name but it doesn't describe purpose.",
            
            }
        ]
    }]
}
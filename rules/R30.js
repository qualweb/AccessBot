import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R30',
    category: CategoryConst.LABEL,
    tree: [{
        prerequisite: 'RC4',
        fluxo: [
            {
                key: '1A',
                title: 'Does accessible name #{a} describe purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The complete visible text content of the test target either matches or is contained within its accessible name and it's accessible name also describes purpose.",
                
            },
            {
                key: 'Fail',
                title: "The complete visible text content of the test target either matches or is contained within its accessible name but the accessible name does not describe purpose.",
            
            }
        ]
    }]
}
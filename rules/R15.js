import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R15',
    category: CategoryConst.AUDIOVIDEO,
    tree: [{
        prerequisite: 'RC5',
        fluxo: [
            {
                key: '1A',
                title: 'Does the  target has a visible control mechanism?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has a control mechanism to stop or mute it.",
                
            },
            {
                key: 'Fail',
                title: "The test target doesn't have a control mechanism to stop or mute it.",
            
            }
        ]
    }]
}
import CategoryConst from "./const.js";

export default {
    code: 'QW-ACT-R6',
    category: CategoryConst.IMAGE,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Does accessible name #{a} describe purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The `image button` has an accessible name #{a} that describes purpose",
                
            },
            {
                key: 'Fail',
                title: "The \`image button\` has an accessible name #{a} that does not describe purpose",
            
            }
        ]
    }]
}
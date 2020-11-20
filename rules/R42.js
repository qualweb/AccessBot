import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R42',
    category: CategoryConst.OBJECT,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Accessible name #{a} describes purpose?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The test target has a non-empty accessible name and it describes its purpose."
                
            },
            {
                key: "Fail",
                title: "The test target has a valid accessible name but doesn't describe its purpose."
            },
        ]
    }]
}
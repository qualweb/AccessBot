import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R40',
    category: CategoryConst.SENSORYVISUALCLUES,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Can you verify if text content is not clipped?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "Text content is not clipped."
                
            },
            {
                key: "Fail",
                title: "Text content is clipped."
            },
        ]
    }]
}
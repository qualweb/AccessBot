import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R37',
    category: CategoryConst.CONTRAST,
    tree: [{
        prerequisite: 'RC12',
        fluxo: [
            {
                key: '1A',
                title: 'Can you read text presented over the background?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "Text is readable over the background."
                
            },
            {
                key: "Fail",
                title: "Text is not readable over the background."
            },
        ]
    }]
}
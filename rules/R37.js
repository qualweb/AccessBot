import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R37',
    category: CategoryConst.CONTRAST,
    tree: [{
        prerequisite: 'RC12',
        flow: [
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
            }
        ]
    },
    {
        prerequisite: 'RC13',
        flow: [
            {
                key: '1A',
                title: 'Can you verify if element has a gradient?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "Element has a gradient that is verifiable."
                
            },
            {
                key: "Fail",
                title: "Element has a gradient that is not verifiable."
            }
        ]

    }
    ]
}
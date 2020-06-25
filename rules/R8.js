import categoryConst from "./const.js";


export default {
    code: 'QW-ACT-R8',
    category: categoryConst.IMAGE,
    tree: [{
        prerequisite: 'RC1',
        fluxo:[
            {
            key: '1A',
            title: 'Accessible name describes purpose?',
            answerYes: 'Pass',
            answerNo: 'Fail',
            },
            {
            key: 'Pass',
            title: "This element's accessible name uses the filename which accurately describes the image and purpose",
            
            },
            {
            key: 'Fail',
            title: "The presence of the file extension in the accessible name doesn't accurately describe purpose of the image",
            }
        ]
    }]
}
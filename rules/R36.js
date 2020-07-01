import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R36',
    category: CategoryConst.TABLES,
    tree: [{
        prerequisite: 'RC7',
        fluxo: [
            {
                key: '1A',
                title: 'Does the data cells have appropriate headers?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The data cells have appropriate headers."
                
            },
            {
                key: "Fail",
                title: "The data cells do not have appropriate headers."
            },
        ]
    }]
}
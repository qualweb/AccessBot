import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R36',
    category: CategoryConst.TABLES,
    tree: [{
        prerequisite: 'RC7',
        fluxo: [
            {
                key: '1A',
                title: 'Has the data cells appropriate headers? ',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "The data cells have appropriate headers."
                
            },
            {
                key: "Fail",
                title: "The data cells don't have appropriate headers."
            },
        ]
    }]
}
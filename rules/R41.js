import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R41',
    category: CategoryConst.FORMS,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'An error indicator appeared when there is an invalid form field value?',
                answerYes: '2A',
                answerNo: '1AFail',
            },
            {
                key: '2A',
                title: 'Does the error  indicator identify the cause of the error or how to fix the error?',
                answerYes: 'Pass',
                answerNo: 'Fail',
            },
            {
                key: 'Pass',
                title: "Error messages appear and they describe invalid form fields values."
                
            },
            {
                key: "Fail",
                title: "Error indicator appear  when there is an invalid form field value but the error message does not identify the cause of error or how to fix the error."
            },
            {
                key: '1AFail',
                title: 'Error indicator do not appear when there is an invalid form field value'

            }
        ]
    }]
}
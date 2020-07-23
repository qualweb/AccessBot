import CategoryConst from "../const.js";


export default {
    code: 'efbfc7',
    url: 'https://act-rules.github.io/rules/efbfc7',
    name: 'Text content that changes automatically can be paused, stopped or hidden.',
    category: CategoryConst.TIME,
    whyImportant: `The intent of this Success Criterion is to avoid distracting users during their interaction with a Web page.`,
    descriptionTest:`This rule checks that for any text content that automatically changes in a 10 minute time span, there are instruments to pause, stop, or hide it or to control its changing frequency. The arbitrary 10 minute time span, selected so that testing this rule would not be impractical, is not included in WCAG. Content that changes less frequently may fail success criteria 2.2.2 without failing this rule.`,
    tree: [
        {
            key: '',
            title: `Interact with the Web page. `,
            question: 'Can you see if there is any text content  that automatically changes?',
            answerYes: 'nextStep1',
            answerNo: '1APass'
        },
        {
            key: "nextStep1",
            title: `Verify if there is any mechanism that allow you to  pause, stop and hide or to control its changing frequency?`,
            question: 'Is the mechanism present?',
            answerYes: "Pass",
            answerNo: "Fail"
        
        },
        {
            key: '1APass',
            title: "There is no text content that changes automaticallyon the Web page.",
        },
        {
            key: 'Pass',
            title: "There is a mechanism present that allows user to pause, stop, hide or control text content changing frequency.",
        },
        {
            key: 'Fail',
            title: "There is no mechanism present that allows user to pause, stop, hide or control text content changing frequency.",
        }
    ],


    
}
import CategoryConst from "./const.js";

export default {
    code: 'QW-ACT-R21',
    category: CategoryConst.IMAGE,
    tree: [{
    prerequisite: 'RC2',
    fluxo: [
    {
        key: '1A',
        title: 'is image a complex image (ex. graph)?',
        answerYes: '2A',
        answerNo: '2B',
    },
    {
        key: '2A',
        title: "Accessible name describes purpose?",
        answerYes:"3A",
        answerNo: "2AFail"    
    },
    {
        key: '3A',
        title: "Accessible name describes content?",
        answerYes:"3APass",
        answerNo: "3AFail"
            
    },
    {   key: '3APass',
        title: "Accessible name describes purpose and content"
    },
    {
        key: '3AFail',
        title: "Accessible names doesn't describe purpose and content"
    },
    {
        key: "2B",
        title: "Is image a CAPTCHA image?",
        answerYes: "3B",
        answerNo: "3C"
    },
    {
        key: "3B",
        title: "Accessible name comunicates purpose?",
        answerYes: "4A",
        answerNo: "3BFail"
    },
    {
        key: "4A",
        title: "Accessible name communicates content?",
        answerYes: "4AFail",
        answerNo: "4APass"
    },
    {
        key: '4AFail',
        title: "Accessible name communicates purpose and communicates content."
    },
    {
        key: '4APass',
        title: "Accessible name communicates purpose and doesn't communicates content."
    },
    {
        key: '3BFail',
        title: "Accessible name doesn't communicate purpose"
    
    },
    {
        key: '3C',
        title: 'Is an image of text?',
        answerYes:"4B",
        answerNo:'5A'
    },
    {
        key: '4B',
        title: 'Accessible name matches text within image',
        answerYes:"4BPass",
        answerNo:'4BFail'
    },
    {
        key: '4BPass',
        title: 'Accessible name matches text ',
    },
    {
        key: '4BFail',
        title: "Accessible name doesn't match text within image",
    },
    {
        key: "5A",
        title: "Accessible name describes purpose?",
        answerYes: "5APass",
        answerNo: "5AFail"
    },
    {
        key: '5APass',
        title: "This element's accessible name describes purpose.",
    },
    {
        key: '5AFail',
        title: "The element's accessible name doesn't describe purpose."

    }
]
}]
}

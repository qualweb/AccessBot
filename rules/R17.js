import CategoryConst from "./const.js";

export default {
        code: 'QW-ACT-R17',
        category: CategoryConst.IMAGE,
        tree: [{
            prerequisite: 'RC1',
            flow: [
                {
                    key: '1A',
                    title: 'Is the image decorative?',
                    answerYes: 'Pass',
                    answerNo: 'Fail',
                },
                {
                    key: 'Pass',
                    title: "The test target is decorative.",
                },
                {
                    key: 'Fail',
                    title: "The presence of the file extension in the accessible name does not accurately describe purpose of the image",
                }
            ]
        },
        {
            prerequisite: 'RC3, RC6',
            flow: [
                {
                    key: '1B',
                    title: 'Is image a complex image (for example, a graph)?',
                    answerYes: '2A',
                    answerNo: '2B',
                },
                {
                    key: '2A',
                    title: "Does accessible name #{a} describe purpose?",
                    answerYes:"3A",
                    answerNo: "2AFail"
                },
                {
                    key: '3A',
                    title: "Does accessible name #{a} describe content?",
                    answerYes:"3APass",
                    answerNo: "3AFail"
                    
                },
                {   key: '3APass',
                    title: "Accessible name describes purpose and content."
                },
                {
                    key: '3AFail',
                    title: "Accessible name does not describe purpose and content."
                },
                {
                    key: "2B",
                    title: "Is image a CAPTCHA image?",
                    answerYes: "3B",
                    answerNo: "3C"
                },
                {
                    key: "3B",
                    title: "Accessible name #{a} comunicates purpose?",
                    answerYes: "4A",
                    answerNo: "3BFail"
                },
                {
                    key: "4A",
                    title: "Accessible name #{a} communicates content?",
                    answerYes: "4AFail",
                    answerNo: "4APass"
                },
                {
                    key: '4AFail',
                    title: "Accessible name communicates purpose and communicates content."
            
                },
                {
                    key: '4APass',
                    title: "Accessible name communicates purpose and does not communicate content."
            
                },
                {
                    key: '3BFail',
                    title: "Accessible name does not communicate purpose"
            
                },
                {
                    key: '3C',
                    title: 'Is an image of text?',
                    answerYes:"4B",
                    answerNo:'5A'
            
                },
                {
                    key: '4B',
                    title: 'Does accessible name #{a} matches text within image?',
                    answerYes:"4BPass",
                    answerNo:'4BFail'
            
                },
                {
                    key: '4BPass',
                    title: 'Accessible name matches text.',
            
                },
                {
                    key: '4BFail',
                    title: "Accessible name does not match text within image.",
                },
                {
                    key: "5A",
                    title: "Does accessible name #{a} describe purpose?",
                    answerYes: "5APass",
                    answerNo: "5AFail"
                },
                {
                    key: '5APass',
                    title: "The element's accessible name describes purpose.",
                },
                {
                    key: '5AFail',
                    title: "The element's accessible name does not describe purpose."
                }
            ]
        }]
}
import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R29',
    category: CategoryConst.AUDIOVIDEO,
    tree: [{
        prerequisite: 'RC1',
        flow: [
            {
                key: '1A',
                title: 'Does it have a text alternative?',
                answerYes: '2A',
                answerNo: '1AFail',
            },
            {
                key: '1AFail',
                title: "The audio element does not have a text alternative"
                
            },
            {
                key: '2A',
                title: "Does it describe the purpose of audio?",
                answerYes: "2APass",
                answerNo: "2AFail"
            
            },
            {
                key: "2AFail",
                title: "The text alternative does not describe the purpose of audio."
            },
            {
                key: "2APass",
                title: "The text alternative describes the purpose of audio."
            }
        ]
    }]
}
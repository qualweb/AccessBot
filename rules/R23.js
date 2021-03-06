import CategoryConst from "./const.js";


export default {
    code: 'QW-ACT-R23',
    category: CategoryConst.AUDIOVIDEO,
    tree: [{
        prerequisite: 'RC3',
        flow: [
            {
                key: '1A',
                title: "Is it an  audio alternative (voice over)?",
                answerYes: '1B',
                answerNo: '2B',
            },
            {
                key: '1B',
                title: "Does the audio content describe its purpose?",
                answerYes: "1BPass",
                answerNO: "1BFail"
                
            },
            {
                key: '1BPass',
                title: "The audio alternative describes the video content.",
            
            },
            {
                key: '1BFail',
                title: "'The audio alternative doesn/'t describe video content."

            },
            {
                key:"2B",
                title: "Is there text overlaid when media is playing?",
                answerYes:"2C" ,
                answerNo: "3A"

            },
            {
                key:"2C",
                title: "Does they describe the content of the video?",
                answerYes:"2CPass",
                answerNo: "2CFail"

            },
            {
                key: "2CPass",
                title: "The `track` element correctly describes the auditive content of the video."

            },
            {
                key:"2CFail",
                title: "The track element does not describe the content of the video."
            },
            {
                key: "3A",
                title: "Do you have access to a transcript?",
                answerYes: "3B",
                answerNo: "4A"
            },
            {
                key: "3B",
                title: "Does the transcript describe the video?",
                answerYes: "3BPass",
                answerNo: "3BFail"
            },
            {
                key: "3BPass",
                title: "The transcript correctly describes the auditive content of the video."
            },
            {
                key:"3BFail",
                title: "The transcript does not describe the auditive content of the video."
            },
            {
                key: "4A",
                title: "Does text on a page describe enterily the video content?",
                answerYes: "4APass",
                answerNo: "4AFail"
            },
            {
                key: "4APass",
                title: "The text on the page describes the content of the video."
            },
            {
                key: "4AFail",
                title: "The video does not have any content alternative."
            }
        ]
    }]
}
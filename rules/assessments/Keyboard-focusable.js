import CategoryConst from "../const.js";


export default {
    code: '80af7b',
    link: 'https://act-rules.github.io/rules/80af7b',
    name: 'Is focusable with keyboard',
    category: CategoryConst.KEYBOARD,
    whyImportant: `Users must be able to access and interact with interface components using only the
    keyboard because using a mouse is not possible when the user has no vision or low vision
    or doesn't have the physical capability or dexterity to effectively control a pointing
    device.`,
    descriptionTest:`Users must be able to navigate away from all components
    using a keyboard.`,
    tree: [
        {
            key: '',
            title: `Tab through content from start to finish by using  standard keyboard commands 
            (Tab key; Shift+Tab; Arrow keys
                Esc key
                Enter key
                Space key) to navigate through
            all the interactive interface components in the target page.Check to see that keyboard focus is not trapped in any of the content.`,
            question: 'Can you navigate?',
            answerYes: 'Pass',
            answerNo: 'nextStep1'
        },
        {
            key: "nextStep1",
            title: `If you can't navigate away from a component using standard keyboard commands 
            (keyboard focus appears to be trapped in any of the content), check that help information is 
            available explaining how to exit the content and can be accessed via the keyboard.
            Examine the component's accessible name and accessible description to
            determine whether they describe an alternative keyboard command.
            If an alternative keyboard command is documented, test whether it works.`,
            question: 'Could you find an alternative way to navigate?',
            answerYes: "Pass",
            answerNo: "Fail"
        
        },
        {
            key: 'Pass',
            title: "No trap for keyboard navigation.",
        },
        {
            key: 'Fail',
            title: "There are traps in keyboard navigation",
        }
    ],


    
}
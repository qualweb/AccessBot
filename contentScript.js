function pointerToElement (pointer) {
    const pointerArray = pointer.split(" > ");
    
    if(pointerArray[1] === "head") {
        return null;
    }
    
    //queryselector n funciona on polymer window.shadowRoot.
    //https://github.com/qualweb/qualweb-extension/blob/develop/src/content.js
    console.log(pointer);
    const resultsEvaluation = document.querySelector(pointer);
    console.log(resultsEvaluation);
    return resultsEvaluation;
}

chrome.runtime.onMessage.addListener(
  async function(request, sender, sendResponse) {
    if(request.message === "overResultElement") {
        const selectedElements = pointerToElement(request.element);

        
        if (selectedElements !== null ){
            selectedElements.style.border = "thick solid red";
        }
    }
    
  if(request.message === "outResultElement") {
      const selectedElements = pointerToElement(request.element);
        
        if (selectedElements !== null ){
            selectedElements.style.border = "";
        }
    }

    //return string with whole page
  if(request.message === "getDocument") {
    const result = new QWPage.QWPage(document, window);
    let act = new ACTRules.ACTRules()
    const actResult = await act.execute({},result,[]);
    sendResponse(actResult);
  }
});
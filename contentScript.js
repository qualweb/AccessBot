

function pointerToElement (pointer) {
    const pointerArray = pointer.split(" > ");
    
    if(pointerArray[1] === "head") {
        return null;
    }
    
    //queryselector n funciona on polymer window.shadowRoot.
    const resultsEvaluation = document.querySelector(pointer);
    console.log(resultsEvaluation);
    return resultsEvaluation;
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
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
  }
);
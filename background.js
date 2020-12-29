let onlyValidResults = [];
let options = {};
let qualwebResult = {};
let url = ""; 

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "clickedStartPopup") {
      chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
          options = request.options;
          console.log(options);
          if (request.options.semimanual || request.options.automatic) {
            //search for the window to work
            let windowId;
            chrome.windows.getAll({}, function(windows) {
              for (let i=0; i < windows.length; i++) {
                if (windows[i].type === "normal") {
                  windowId = windows[i].id;
                  break;
                }
              }
            });

            chrome.tabs.query({active: true, windowId: windowId}, function(tabs) {
              const activeTabId = tabs[0].id;
              url = tabs[0].url;
              chrome.tabs.sendMessage(activeTabId, {message: "getDocument"}, async function(actResult){
                qualwebResult = actResult; //from content to background with callback function to handle the result from content response
                
                console.log("resultado sem filtro")
                console.log(actResult);

                const rulesToArray = Object.values(actResult.assertions);

                onlyValidResults = rulesToArray.map(rule => {
                  const results = rule.results.map(item => {
                    return {
                      ...item,
                      verdict: item.verdict || "inapplicable"
                    }
                  })

                  return { //object filtrado
                    code: rule.code,
                    description: rule.description,
                    results: results,
                    name: rule.name,
                    id: rule.mapping,
                    url: rule.metadata.url,
                    accessiblename: rule.accessiblename
                  }
                });
                
                
                console.log("onlyValidResults", onlyValidResults)


                  //apos objecto filtrado call to the browser - open result.html como popup para o utilizador
                chrome.windows.create({
                  url: chrome.runtime.getURL("result.html"),
                  type: "popup",
                  height: 1000,
                  width: 950
                });
              })
            })
          } else { //if only manual nao vai object bucar document

            chrome.windows.create({
              url: chrome.runtime.getURL("result.html"),
              type: "popup",
              height: 1000,
              width: 950
            });
          }

        });
    }
    if (request.message === "resultLoaded") {
      chrome.runtime.sendMessage({message: "resultsToResultPopup", values: onlyValidResults, options, result: qualwebResult, website: url });
    } //para garantir q fica tudo carregado

      //from background to content
    if(request.message === "overResultElement") {
      let windowId;

      chrome.windows.getAll({}, function(windows) {
        for (let i=0; i < windows.length; i++) {
          if (windows[i].type === "normal") {
            windowId = windows[i].id;
            break;
          }
        }
      });

      chrome.tabs.query({active: true, windowId: windowId}, function(tabs) {
        const activeTabId = tabs[0].id;
        console.log(tabs[0].id);
        chrome.tabs.sendMessage(activeTabId, {message: request.message, element: request.element});
      })
    }

    if(request.message === "outResultElement") {
      let windowId;

      chrome.windows.getAll({}, function(windows) {
          for (let i=0; i < windows.length; i++) {
            if (windows[i].type === "normal") {
              windowId = windows[i].id;
              break;
            }
          }
      });

      chrome.tabs.query({active: true, windowId: windowId}, function(tabs) {
        const activeTabId = tabs[0].id;
        chrome.tabs.sendMessage(activeTabId, {message: request.message, element: request.element});
      })
    }
});
  
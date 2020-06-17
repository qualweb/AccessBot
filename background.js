const puppeteer = require('puppeteer');

let onlyValidResults = [];
let options = {};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "clickedStartPopup") {
      chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
          options = request.options;
          console.log(options);
          if (request.options.semimanual || request.options.automatic) {
            const browser = await puppeteer.connect({browserURL: 'http://127.0.0.1:9222', defaultViewport: null});

            const pages = await browser.pages();
            const result = pages[0];
            console.log(result);
          
            let act = new ACTRules.ACTRules();
            console.log("actrules");
            act.execute({},result,[]).then(result =>{ //objecto json {} regras a incluir!!!!!!!
              console.log(result);
              // document.getElementById('n_pages').innerHTML = 'Nº of pages: teste ' + JSON.stringify(result);
/*
                // procurar o que se pretende dentro do result
                const imgRules = ["QW-ACT-R6", "QW-ACT-R8", "QW-ACT-R17", "QW-ACT-R21"];

                const rulesToArray = Object.values(result.rules);
                const imgOnlyRules = rulesToArray.filter(function(rule) {
                    return imgRules.includes(rule.code);     
                });
*/

                const rulesToArray = Object.values(result.rules);
/*
                imgOnlyRules.forEach(function(rule) {
                    rule.results.forEach(function(result) {
                        resultsToShow.push(result);
                    });
                });
*/
                onlyValidResults = rulesToArray.map(rule => {
                  const results = rule.results.filter(item => {
                    return item.verdict !== "inapplicable";
                  });

                  return {
                    code: rule.code,
                    description: rule.description,
                    results: results,
                    name: rule.name,
                    id: rule.mapping,
                    url: rule.metadata.url
                  }
                });

                console.log("onlyValidResults", onlyValidResults)

                chrome.windows.create({
                  url: chrome.runtime.getURL("result.html"),
                  type: "popup"
                });
            })
          } else {

            chrome.windows.create({
              url: chrome.runtime.getURL("result.html"),
              type: "popup"
            });
          }

        });
    }
    if (request.message === "resultLoaded") {
      chrome.runtime.sendMessage({message: "resultsToPopup", values: onlyValidResults, options});
    }

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
  
//const puppeteer = require('puppeteer');
import {QWPage} from "@qualweb/qw-page";
//import { ACTRules } from "./node_modules/@qualweb/act-rules/dist/index.js"; //updated act - do act develop

let onlyValidResults = [];
let options = {};
let qualwebResult = {};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "clickedStartPopup") {
      chrome.tabs.query({active: true, currentWindow: true}, async function(tabs) {
          options = request.options;
          console.log(options);
          if (request.options.semimanual || request.options.automatic) {
            //const browser = await puppeteer.connect({browserURL: 'http://127.0.0.1:9222', defaultViewport: null});

            //const pages = await browser.pages();
            //const result = pages[0];
            
            
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
              chrome.tabs.sendMessage(activeTabId, {message: "getDocument"}, async function(response) { 
                const pageDocument = new DOMParser().parseFromString(response, 'text/html'); //generate DOM
                console.log(pageDocument.documentElement);
                console.log(pageDocument);
                const result = new QWPage(pageDocument, window); //generate obj QWPAGE
                /*let act = new ACTRules({ rules: [
                  'QW-ACT-R1',
                  'QW-ACT-R2',
                  'QW-ACT-R3',
                  'QW-ACT-R4',
                  'QW-ACT-R5',
                  'QW-ACT-R6',
                  'QW-ACT-R7',
                  'QW-ACT-R8',
                  'QW-ACT-R10',
                  'QW-ACT-R11',
                  'QW-ACT-R13',
                  'QW-ACT-R14',
                  'QW-ACT-R15',
                  'QW-ACT-R16',
                  'QW-ACT-R17',
                  'QW-ACT-R18',
                  'QW-ACT-R19',
                  'QW-ACT-R20',
                  'QW-ACT-R21',
                  'QW-ACT-R22',
                  'QW-ACT-R23',
                  'QW-ACT-R24',
                  'QW-ACT-R25',
                  'QW-ACT-R26',
                  'QW-ACT-R27',
                  'QW-ACT-R28',
                  'QW-ACT-R29',
                  'QW-ACT-R30',
                  'QW-ACT-R31',
                  'QW-ACT-R32',
                  'QW-ACT-R33',
                  'QW-ACT-R34',
                  'QW-ACT-R35',
                  'QW-ACT-R36',
                  'QW-ACT-R38',
                  'QW-ACT-R39',
                  'QW-ACT-R9',
                  'QW-ACT-R12',
                  'QW-ACT-R37'
                ]});*/
                let act = new ACTRules.ACTRules()
                const actResult = await act.execute({},result,[]);
                //act.execute({},result,[]).then(result =>{ //objecto json {} regras a incluir!!!!!!!
                qualwebResult = actResult;
                // document.getElementById('n_pages').innerHTML = 'Nº of pages: teste ' + JSON.stringify(result);
  /*
                  // procurar o que se pretende dentro do result
                  const imgRules = ["QW-ACT-R6", "QW-ACT-R8", "QW-ACT-R17", "QW-ACT-R21"];
  
                  const rulesToArray = Object.values(result.rules);
                  const imgOnlyRules = rulesToArray.filter(function(rule) {
                      return imgRules.includes(rule.code);     
                  });
  */
                  
                  const rulesToArray = Object.values(actResult.assertions);
  /*
                  imgOnlyRules.forEach(function(rule) {
                      rule.results.forEach(function(result) {
                          resultsToShow.push(result);
                      });
                  });
  */
                  onlyValidResults = rulesToArray.map(rule => {
                    /*
                    const results = rule.results.filter(item => {
                      return item.verdict !== "inapplicable" && item.verdict !== "";
                    });
                    */
                    const results = rule.results.map(item => {
                      return {
                        ...item,
                        verdict: item.verdict || "inapplicable"
                      }
                    })

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
      chrome.runtime.sendMessage({message: "resultsToPopup", values: onlyValidResults, options, result: qualwebResult });
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
  
var background =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.QWPage = void 0;
const qw_element_1 = __webpack_require__(11);
class QWPage {
    constructor(document, window) {
        this.document = document;
        this.window = window;
        this.defaultWidth = this.window.innerWidth;
        this.defaultHeight = this.window.innerHeight;
    }
    getURL() {
        return this.document.URL;
    }
    getElement(selector) {
        const element = this.document.querySelector(selector);
        return element ? new qw_element_1.QWElement(element) : null;
    }
    getElements(selector) {
        const elements = this.document.querySelectorAll(selector);
        const qwList = [];
        for (const element of elements || []) {
            qwList.push(new qw_element_1.QWElement(element));
        }
        return qwList;
    }
    getElementByID(id, elementQW) {
        const treeSelector = elementQW.getTreeSelector();
        const element = this.document.querySelector(`#${id}` + treeSelector);
        return element ? new qw_element_1.QWElement(element) : null;
    }
    getElementByAttributeName(name) {
        const element = this.document.querySelector(`[name="${name}"]`);
        return element ? new qw_element_1.QWElement(element) : null;
    }
    processShadowDom() {
        const listElements = this.document.querySelectorAll('*');
        let shadowCounter = 0;
        for (const element of listElements || []) {
            if (element.shadowRoot !== null) {
                element.innerHTML = element.shadowRoot.innerHTML;
                const elementsFromShadowDom = element.querySelectorAll('*');
                this.setShadowAttribute(elementsFromShadowDom, shadowCounter);
                shadowCounter++;
            }
        }
    }
    setShadowAttribute(elements, counter) {
        for (const element of elements || []) {
            element.setAttribute('shadowTree', counter + '');
        }
    }
    getPageRootElement() {
        const documentElement = this.document.documentElement;
        return documentElement ? new qw_element_1.QWElement(documentElement) : null;
    }
    getHTMLContent() {
        return this.document.documentElement.outerHTML;
    }
    getFocusedElement() {
        const activeElement = this.document.activeElement;
        return activeElement ? new qw_element_1.QWElement(activeElement) : null;
    }
    changeToDefaultViewport() {
        this.window.resizeTo(this.defaultWidth, this.defaultHeight);
    }
    changeViewport(width, height) {
        this.window.resizeTo(width, height);
    }
}
exports.QWPage = QWPage;


/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _qualweb_qw_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _qualweb_qw_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_qualweb_qw_page__WEBPACK_IMPORTED_MODULE_0__);
//const puppeteer = require('puppeteer');

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
                const result = new _qualweb_qw_page__WEBPACK_IMPORTED_MODULE_0__["QWPage"](pageDocument, window); //generate obj QWPAGE
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
  

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.QWElement = void 0;
class QWElement {
    constructor(element) {
        this.element = element;
    }
    elementHasAttribute(attribute) {
        return this.element.getAttributeNames().includes(attribute);
    }
    elementHasAttributes() {
        return this.element.getAttributeNames().length > 0;
    }
    elementHasChild(childName) {
        for (const child of this.element.children || []) {
            if (child.tagName.toLowerCase() === childName.toLowerCase()) {
                return true;
            }
        }
        return false;
    }
    elementHasChildren() {
        return this.element.children.length > 0;
    }
    elementHasParent(parent) {
        const parentElement = this.element['parentElement'];
        return parentElement ? parentElement['tagName'].toLowerCase() === parent.toLowerCase() : false;
    }
    getElementAttribute(attribute) {
        return this.element.getAttribute(attribute);
    }
    getElementAttributes() {
        const attributes = {};
        for (const attr of this.element.getAttributeNames() || []) {
            attributes[attr] = this.element.getAttribute(attr);
        }
        return attributes;
    }
    getElementAttributesName() {
        return this.element.getAttributeNames();
    }
    getElementChildren() {
        const selector = this.getElementSelector();
        let treeSelector = this.getTreeSelector();
        let elements = this.element.querySelectorAll(selector + ' > *' + treeSelector);
        let qwList = [];
        for (let element of elements) {
            qwList.push(new QWElement(element));
        }
        return qwList;
    }
    getTreeSelector() {
        const attribute = this.getElementAttribute('shadowTree');
        let result = ':not([shadowTree])';
        if (attribute !== null) {
            result = `[shadowTree="${attribute}"]`;
        }
        return result;
    }
    getElementChildTextContent(childName) {
        for (const child of this.element.children || []) {
            if (child.tagName.toLowerCase() === childName.toLowerCase()) {
                return child['textContent'] || undefined;
            }
        }
        return undefined;
    }
    getElementHtmlCode(withText, fullElement) {
        const clonedElem = this.element.cloneNode(true);
        if (fullElement) {
            return clonedElem.outerHTML;
        }
        else if (withText) {
            const text = clonedElem['text'];
            clonedElem.innerHTML = text !== undefined ? text : '';
            return clonedElem.outerHTML;
        }
        else {
            clonedElem.innerHTML = '';
            return clonedElem.outerHTML;
        }
    }
    getElement(selector) {
        let element = this.element.querySelector(selector);
        return this.convertElementToQWElement(element);
    }
    convertElementToQWElement(element) {
        if (element)
            return new QWElement(element);
        else
            return null;
    }
    convertElementsToQWElement(elements) {
        let qwList = [];
        for (let element of elements) {
            qwList.push(new QWElement(element));
        }
        return qwList;
    }
    getElements(selector) {
        return this.convertElementsToQWElement(this.element.querySelectorAll(selector));
    }
    getElementNextSibling() {
        return this.convertElementToQWElement(this.element.nextElementSibling);
    }
    getElementParent() {
        return this.convertElementToQWElement(this.element.parentElement);
    }
    getElementPreviousSibling() {
        return this.convertElementToQWElement(this.element.previousElementSibling);
    }
    getElementProperty(property) {
        let propertyValue = this.element[property];
        return propertyValue === null ? "" : propertyValue;
    }
    getElementSelector() {
        if (this.element.tagName.toLowerCase() === 'html') {
            return 'html';
        }
        else if (this.element.tagName.toLowerCase() === 'head') {
            return 'html > head';
        }
        else if (this.element.tagName.toLowerCase() === 'body') {
            return 'html > body';
        }
        let selector = 'html > ';
        let parents = new Array();
        let parent = this.element.parentElement;
        while (parent && parent.tagName.toLowerCase() !== 'html') {
            parents.unshift(this.getSelfLocationInParent(parent));
            parent = parent['parentElement'];
        }
        selector += parents.join(' > ');
        selector += ' > ' + this.getSelfLocationInParent(this.element);
        return selector;
    }
    getSelfLocationInParent(element) {
        let selector = '';
        if (element.tagName.toLowerCase() === 'body' || element.tagName.toLowerCase() === 'head') {
            return element.tagName.toLowerCase();
        }
        let sameEleCount = 0;
        let prev = element.previousElementSibling;
        while (prev) {
            if (prev.tagName.toLowerCase() === element.tagName.toLowerCase()) {
                sameEleCount++;
            }
            prev = prev.previousElementSibling;
        }
        selector += `${element.tagName.toLowerCase()}:nth-of-type(${sameEleCount + 1})`;
        return selector;
    }
    getElementStyleProperty(property, pseudoStyle) {
        const styles = getComputedStyle(this.element, pseudoStyle);
        return styles.getPropertyValue(property);
    }
    getElementTagName() {
        return this.element['tagName'].toLowerCase();
    }
    getElementText() {
        return this.element.textContent || '';
    }
    getElementType() {
        return this.element.nodeType === 1 ? 'tag' : this.element.nodeType === 2 ? 'attribute' : this.element.nodeType === 3 ? 'text' : 'comment';
    }
    getNumberOfSiblingsWithTheSameTag() {
        let aCount = 1;
        let nextSibling = this.element.nextElementSibling;
        while (nextSibling) {
            if (nextSibling.tagName.toLowerCase() === 'a') {
                aCount++;
            }
            nextSibling = nextSibling.nextElementSibling;
        }
        return aCount;
    }
    setElementAttribute(attribute, value) {
        this.element.setAttribute(attribute, value);
    }
    concatANames(aNames) {
        const children = this.element.childNodes;
        let result = '';
        let textContent;
        let i = 0;
        let counter = 0;
        for (const child of children || []) {
            textContent = child.textContent;
            if (child.nodeType === 3 && !!textContent && textContent.trim() !== "") {
                result = result + (counter === 0 ? "" : " ") + textContent.trim();
                counter++;
            }
            else if (child.nodeType === 1) {
                result = result + (counter > 0 && !!aNames[i] ? " " : "") + aNames[i];
                i++;
            }
        }
        if (!result) {
            result = '';
        }
        return result;
    }
    isOffScreen() {
        const scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
        const scrollWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientHeight);
        const bounding = this.element.getBoundingClientRect();
        const left = bounding.left;
        const right = bounding.right;
        const bottom = bounding.bottom;
        const top = bounding.top;
        const noParentScrollTop = this.noParentScrolled(bottom);
        return left > scrollWidth || right < 0 || bottom < 0 && noParentScrollTop || top > scrollHeight || right === 0 && left === 0;
    }
    isElementHTMLElement() {
        return this.element instanceof HTMLElement;
    }
    getContentFrame() {
        let page = null;
        if (this.getElementTagName() === "iframe") {
            const element = this.element;
            const contentWindow = element.contentWindow;
            if (contentWindow) {
                page = contentWindow.document;
            }
        }
        return page;
    }
    elementHasTextNode() {
        if (this.element.firstChild !== null) {
            return this.element.firstChild.nodeType === 3;
        }
        else {
            return false;
        }
    }
    noParentScrolled(offset) {
        let element = this.element.parentElement;
        while (element && element.nodeName.toLowerCase() !== 'html') {
            if (element.scrollTop) {
                offset += element.scrollTop;
                if (offset >= 0) {
                    return false;
                }
            }
            element = element.parentElement;
        }
        return true;
    }
    focusElement() {
        const htmlElement = this.element;
        htmlElement.focus();
    }
    getBoundingBox() {
        return this.element.getBoundingClientRect();
    }
}
exports.QWElement = QWElement;


/***/ })

/******/ });
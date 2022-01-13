/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stopWatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stopWatch.js */ \"./src/stopWatch.js\");\n/* harmony import */ var _quoteGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quoteGenerator.js */ \"./src/quoteGenerator.js\");\n// All the imports at the top of the file! (Although import statements are hoisted)\n // the .js is needed here!\n\n// \"import\" => brings (import) code from one file to another\n// variable, function, classes.....\n\n//  The import statement is written like this\n/* import ..... from \"directory\" */\n\n// For named exports (guess what, exported by name) the statement is:\n/* import { variable } from \"directory\" */\n\n// For default exports the statement is:\n/* import variable from \"directory\" */\n\n\n\nconst buttonHTML = document.getElementById('new-quote');\n\n// the imported class\nlet newStopWatchObject = new _stopWatch_js__WEBPACK_IMPORTED_MODULE_0__.StopWatch();\nconsole.log(newStopWatchObject.duration);\n\n// Adding an event listener\nbuttonHTML.addEventListener(\n\t'click',\n\t// Dynamic import\n\tasync () =>\n\t\tawait Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./quoteGenerator.js */ \"./src/quoteGenerator.js\")).then((imported) =>\n\t\t\timported.getQuotes().then(_quoteGenerator_js__WEBPACK_IMPORTED_MODULE_1__.newQuote)\n\t\t)\n);\n\n\n//# sourceURL=webpack://quotegenerator/./src/app.js?");

/***/ }),

/***/ "./src/quoteGenerator.js":
/*!*******************************!*\
  !*** ./src/quoteGenerator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newQuote\": () => (/* binding */ newQuote),\n/* harmony export */   \"getQuotes\": () => (/* binding */ getQuotes)\n/* harmony export */ });\n/* harmony import */ var _stopWatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stopWatch.js */ \"./src/stopWatch.js\");\n\n\nconst container = document.getElementById('quote-container');\nconst authorHTML = document.getElementById('author');\nconst quoteHTML = document.getElementById('quote');\nconst loader = document.getElementById('loader');\n\nconst quote = {};\n\nconst isLoading = () => {\n\tloader.hidden = false;\n\tcontainer.hidden = true;\n};\n\nconst isComplete = () => {\n\tloader.hidden = true;\n\tcontainer.hidden = false;\n};\n\n//Named export\nconst newQuote = () => {\n\tauthorHTML.textContent = quote.author;\n\tquoteHTML.textContent = quote.text;\n};\n\nisLoading();\n\nconst getQuotes = async () => {\n\t// requesting data from the url\n\tawait fetch('https://type.fit/api/quotes')\n\t\t.then((res) => {\n\t\t\tconsole.log('Responce Object', res);\n\t\t\treturn res.json();\n\t\t}) // .then(function(res){return res.json()})\n\n\t\t.then((data) => {\n\t\t\tconsole.log('Data', data);\n\t\t\t// selecting a random element\n\t\t\treturn data[Math.floor(Math.random() * data.length)];\n\t\t})\n\n\t\t//  {text:....., author: .....}\n\t\t.then((data) => {\n\t\t\tconsole.log('Random selected value', data);\n\n\t\t\tisLoading();\n\t\t\tdata?.author ? (quote.author = data.author) : (quote.author = 'Unknown');\n\t\t\tquote.text = data?.text;\n\t\t\t// Starting stop watch\n\t\t\t_stopWatch_js__WEBPACK_IMPORTED_MODULE_0__.sw.start();\n\t\t\tsetTimeout(() => {\n\t\t\t\tisComplete();\n\t\t\t\t// Reseting stop watch\n\t\t\t\t_stopWatch_js__WEBPACK_IMPORTED_MODULE_0__.sw.reset();\n\t\t\t}, Math.floor(Math.random() * 5) * 1000);\n\t\t});\n};\n\ngetQuotes().then(newQuote);\n// Default export\n// export default getQuotes;\n\n\n//# sourceURL=webpack://quotegenerator/./src/quoteGenerator.js?");

/***/ }),

/***/ "./src/stopWatch.js":
/*!**************************!*\
  !*** ./src/stopWatch.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StopWatch\": () => (/* binding */ StopWatch),\n/* harmony export */   \"sw\": () => (/* binding */ sw)\n/* harmony export */ });\n// Named export\n\nclass StopWatch {\n\tconstructor() {\n\t\tthis.watchRunning = false;\n\t\tthis.interval = 0;\n\n\t\tthis.duration = 0;\n\t}\n\n\tstart() {\n\t\tif (this.watchRunning) {\n\t\t\treturn console.error('watch is already running');\n\t\t}\n\t\tthis.watchRunning = true;\n\t\tconsole.log('duration starts at: ', this.duration, 's');\n\n\t\tthis.interval = setInterval(() => (this.duration += 1), 1000);\n\t}\n\n\tstop() {\n\t\tif (!this.watchRunning) {\n\t\t\treturn console.error(\"watch isn't running\");\n\t\t}\n\t\tthis.watchRunning = false;\n\n\t\tclearInterval(this.interval);\n\n\t\tconsole.log('duration stops at: ', this.duration, 's');\n\t}\n\n\treset() {\n\t\tif (this.watchRunning) {\n\t\t\tthis.stop();\n\t\t}\n\t\tthis.duration = 0;\n\t\tconsole.log('Reset clock');\n\t}\n}\n\nlet sw = new StopWatch();\n\n// Another way for named exports\n\n// export { sw };\n\n\n//# sourceURL=webpack://quotegenerator/./src/stopWatch.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
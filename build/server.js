/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Amount.js":
/*!**********************************!*\
  !*** ./src/components/Amount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _razorpay_i18nify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @razorpay/i18nify */ \"@razorpay/i18nify\");\n/* harmony import */ var _razorpay_i18nify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_razorpay_i18nify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _razorpay_i18nify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @razorpay/i18nify-react */ \"@razorpay/i18nify-react\");\n/* harmony import */ var _razorpay_i18nify_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_razorpay_i18nify_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar Amount = function Amount(_ref) {\n  var value = _ref.value,\n    data = _ref.data;\n  var _useI18nContext = (0,_razorpay_i18nify_react__WEBPACK_IMPORTED_MODULE_1__.useI18nContext)(),\n    setI18nState = _useI18nContext.setI18nState,\n    i18nState = _useI18nContext.i18nState;\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setI18nState(data);\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    console.log(\"🚀 ~ useEffect ~ i18nState:\", i18nState);\n  }, [i18nState]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", null, (0,_razorpay_i18nify__WEBPACK_IMPORTED_MODULE_0__.formatNumber)(value));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Amount);\n\n//# sourceURL=webpack://react-ssr/./src/components/Amount.js?");

/***/ }),

/***/ "./src/containers/App.js":
/*!*******************************!*\
  !*** ./src/containers/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Amount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Amount */ \"./src/components/Amount.js\");\n/* harmony import */ var _razorpay_i18nify_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @razorpay/i18nify-react */ \"@razorpay/i18nify-react\");\n/* harmony import */ var _razorpay_i18nify_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_razorpay_i18nify_react__WEBPACK_IMPORTED_MODULE_2__);\n// src/components/App.js\n\n\n\nvar App = function App(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_razorpay_i18nify_react__WEBPACK_IMPORTED_MODULE_2__.I18nProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Server-Side Rendering without Next.js\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Amount__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    value: 2000000,\n    data: data\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://react-ssr/./src/containers/App.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n// server/index.js\nvar express = __webpack_require__(/*! express */ \"express\");\nvar React = __webpack_require__(/*! react */ \"react\");\nvar ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar AppServer = (__webpack_require__(/*! ../containers/App */ \"./src/containers/App.js\")[\"default\"]);\nvar path = __webpack_require__(/*! path */ \"path\");\nvar app = express();\nvar PORT = process.env.PORT || 3001;\napp.use(express[\"static\"](\"public\"));\n\n// Middleware to extract the locale from the 'Accept-Language' header\napp.use(function (req, res, next) {\n  // Parse the 'Accept-Language' header to get the preferred language and locale\n  var acceptLanguage = req.header(\"Accept-Language\");\n  var _acceptLanguage$split = acceptLanguage.split(\",\"),\n    _acceptLanguage$split2 = _slicedToArray(_acceptLanguage$split, 1),\n    preferredLanguage = _acceptLanguage$split2[0];\n\n  // Extract the locale from the preferred language (e.g., 'en-US' from 'en-US,en;q=0.9')\n  var _preferredLanguage$sp = preferredLanguage.split(\";\")[0].trim().split(\"-\"),\n    _preferredLanguage$sp2 = _slicedToArray(_preferredLanguage$sp, 1),\n    locale = _preferredLanguage$sp2[0];\n\n  // Attach the extracted locale to the request object for later use\n  req.locale = locale;\n\n  // Call the next middleware in the stack\n  next();\n});\napp.get(\"/\", function (req, res) {\n  var content = ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(AppServer, {\n    data: {\n      locale: req.locale\n    }\n  }));\n  console.log(\"🚀 ~ app.get ~ req.locale:\", req.locale);\n  var html = \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"UTF-8\\\" />\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n        <title>React SSR</title>\\n        <script>\\n          // Embedding data in the window object\\n          window.__INITIAL_DATA__ = \".concat(JSON.stringify({\n    locale: req.locale\n  }), \";\\n        </script>\\n        <script defer src=\\\"/bundle.js\\\"></script>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\").concat(content, \"</div>\\n        <div id=\\\"approot\\\"></div>\\n      </body>\\n    </html>\\n  \");\n  res.send(html);\n});\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://react-ssr/./src/server/index.js?");

/***/ }),

/***/ "@razorpay/i18nify":
/*!************************************!*\
  !*** external "@razorpay/i18nify" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@razorpay/i18nify");

/***/ }),

/***/ "@razorpay/i18nify-react":
/*!******************************************!*\
  !*** external "@razorpay/i18nify-react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@razorpay/i18nify-react");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles/Post",{

/***/ "./pages/articles/Post.js":
/*!********************************!*\
  !*** ./pages/articles/Post.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NoPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoPost */ \"./pages/articles/NoPost.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Post(param) {\n    let { jsonRes  } = param;\n    _s();\n    const [getData, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setData(jsonRes);\n    }, [\n        setData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \" \",\n                        jsonRes[0].text\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space\",\n                style: {\n                    padding: \"1px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" container box\",\n                children: getData === undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                    lineNumber: 22,\n                    columnNumber: 34\n                }, this) : getData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: [\n                                item.key.startsWith(\"topHeading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-center my-3\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 53\n                                }, this),\n                                item.key.startsWith(\"title\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-start my-2\",\n                                    children: item.text.includes(\"<br/>\") ? item.text.replace(/<br\\/>/g, \"<br>\") : \" \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 48\n                                }, this),\n                                item.key.startsWith(\"heading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-start my-2\",\n                                    children: item.text.replace(\"<br/>\", \" \")\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 50\n                                }, this),\n                                item.key.startsWith(\"subheading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-start my-2\",\n                                    children: item.text.replace(\"<br/>\", \" \")\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 53\n                                }, this),\n                                item.key.startsWith(\"content\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-start my-2\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 50\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-flex justify-content-center\",\n                                    children: item.key.startsWith(\"image\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: item.text,\n                                        style: {\n                                            width: \"100%\",\n                                            maxWidth: \"500px\",\n                                            height: \"100%\",\n                                            maxHeight: \"500px\"\n                                        },\n                                        onError: \"\",\n                                        alt: jsonRes[0].text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 50\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Post, \"yi7TMRsbU2e+Cx2DQzwL5dk5/j4=\");\n_c = Post;\nPost.requireNavbarAndFooter = true;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9Qb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDcEI7QUFDRDtBQUU3QixTQUFTSyxLQUFLLEtBQVcsRUFBRTtRQUFiLEVBQUVDLFFBQU8sRUFBRSxHQUFYOztJQUVaLE1BQU0sQ0FBQ0MsU0FBU0MsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXRDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLFFBQVFGO0lBQ1YsR0FBRztRQUFDRTtLQUFRO0lBR1oscUJBQ0U7OzBCQUNFLDhEQUFDSixrREFBSUE7MEJBQ0gsNEVBQUNLOzt3QkFBTTt3QkFBRUgsT0FBTyxDQUFDLEVBQUUsQ0FBQ0ksSUFBSTs7Ozs7Ozs7Ozs7OzBCQUcxQiw4REFBQ0M7Z0JBQUlDLFdBQVU7Z0JBQVFDLE9BQU87b0JBQUVDLFNBQVM7Z0JBQU07Ozs7OzswQkFDL0MsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNaTCxZQUFZUSwwQkFBWSw4REFBQ1osK0NBQU1BOzs7OzJCQUFNSSxRQUFRUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBRXZELDhEQUFDUDtrQ0FFQyw0RUFBQ0E7NEJBQUlDLFdBQVU7O2dDQUNaSyxLQUFLRSxHQUFHLENBQUNDLFVBQVUsQ0FBQywrQkFBaUIsOERBQUNDO29DQUFHVCxXQUFVOzhDQUFxQkssS0FBS1AsSUFBSTs7Ozs7O2dDQUNqRk8sS0FBS0UsR0FBRyxDQUFDQyxVQUFVLENBQUMsMEJBQVksOERBQUNFO29DQUFHVixXQUFVOzhDQUFtQixLQUFNRixJQUFJLENBQUVhLFFBQVEsQ0FBQyxXQUFXTixLQUFLUCxJQUFJLENBQUNjLE9BQU8sQ0FBQyxXQUFXLFVBQVUsR0FBRzs7Ozs7O2dDQUMzSVAsS0FBS0UsR0FBRyxDQUFDQyxVQUFVLENBQUMsNEJBQWMsOERBQUNLO29DQUFFYixXQUFVOzhDQUFvQkssS0FBS1AsSUFBSSxDQUFDYyxPQUFPLENBQUMsU0FBUTs7Ozs7O2dDQUM3RlAsS0FBS0UsR0FBRyxDQUFDQyxVQUFVLENBQUMsK0JBQWlCLDhEQUFDSztvQ0FBRWIsV0FBVTs4Q0FBb0JLLEtBQUtQLElBQUksQ0FBQ2MsT0FBTyxDQUFDLFNBQVE7Ozs7OztnQ0FDaEdQLEtBQUtFLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLDRCQUFjLDhEQUFDSztvQ0FBRWIsV0FBVTs4Q0FBb0JLLEtBQUtQLElBQUk7Ozs7Ozs4Q0FDN0UsOERBQUNDO29DQUFJQyxXQUFVOzhDQUNaSyxLQUFLRSxHQUFHLENBQUNDLFVBQVUsQ0FBQywwQkFBWSw4REFBQ007d0NBQUlDLEtBQU1WLEtBQUtQLElBQUk7d0NBQUdHLE9BQU87NENBQUVlLE9BQU87NENBQVFDLFVBQVU7NENBQVFDLFFBQU87NENBQU9DLFdBQVU7d0NBQVE7d0NBQUdDLFNBQVM7d0NBQUlDLEtBQUszQixPQUFPLENBQUMsRUFBRSxDQUFDSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFUbEtROzs7OzZCQWFWOzs7Ozs7OztBQUlWO0dBcENTYjtLQUFBQTtBQXFDVEEsS0FBSzZCLHNCQUFzQixHQUFHLElBQUk7O0FBQ2xDLCtEQUFlN0IsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy9Qb3N0LmpzPzFiNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOb1Bvc3QgZnJvbSAnLi9Ob1Bvc3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZnVuY3Rpb24gUG9zdCh7IGpzb25SZXMgfSkge1xuXG4gIGNvbnN0IFtnZXREYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGF0YShqc29uUmVzKVxuICB9LCBbc2V0RGF0YV0pXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPiB7anNvblJlc1swXS50ZXh0fTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZScgc3R5bGU9e3sgcGFkZGluZzogXCIxcHhcIiB9fT48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgY29udGFpbmVyIGJveCcgPlxuICAgICAgICB7Z2V0RGF0YSA9PT0gdW5kZWZpbmVkID8gPE5vUG9zdCAvPiA6IGdldERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcInRvcEhlYWRpbmdcIikgJiYgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbXktMyc+eyhpdGVtLnRleHQpfTwvaDE+fVxuICAgICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcInRpdGxlXCIpICYmIDxoMyBjbGFzc05hbWU9J3RleHQtc3RhcnQgbXktMic+eyhpdGVtLnRleHQpLmluY2x1ZGVzKFwiPGJyLz5cIikgPyBpdGVtLnRleHQucmVwbGFjZSgvPGJyXFwvPi9nLCBcIjxicj5cIikgOiBcIiBcIn08L2gzPn1cbiAgICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJoZWFkaW5nXCIpICYmIDxwIGNsYXNzTmFtZT0ndGV4dC1zdGFydCBteS0yJz57KGl0ZW0udGV4dC5yZXBsYWNlKCc8YnIvPicsXCIgXCIpKX08L3A+fVxuICAgICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcInN1YmhlYWRpbmdcIikgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LXN0YXJ0IG15LTInPnsoaXRlbS50ZXh0LnJlcGxhY2UoXCI8YnIvPlwiLFwiIFwiKSl9PC9wPn1cbiAgICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJjb250ZW50XCIpICYmIDxwIGNsYXNzTmFtZT0ndGV4dC1zdGFydCBteS0yJz57KGl0ZW0udGV4dCl9PC9wPn1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcImltYWdlXCIpICYmIDxpbWcgc3JjPXsoaXRlbS50ZXh0KX0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogXCI1MDBweFwiLGhlaWdodDpcIjEwMCVcIixtYXhIZWlnaHQ6XCI1MDBweFwiIH19IG9uRXJyb3I9e1wiXCJ9IGFsdD17anNvblJlc1swXS50ZXh0fSAvPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuUG9zdC5yZXF1aXJlTmF2YmFyQW5kRm9vdGVyID0gdHJ1ZTtcbmV4cG9ydCBkZWZhdWx0IFBvc3RcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYmxvZ19zbHVnIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICAgIGNvbnNvbGUubG9nKGJsb2dfc2x1ZylcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIlgtQXBpLUtleVwiLCBcIjY3MDZkNmViLWU2YWUtNDhhZS1hZDgyLTllNGMwYWM1MGU5NlwiKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovLzEzLjIzMy43Mi4yMTU6NDAwMS9jYXRlZ29yeS9ibG9nLyR7YmxvZ19zbHVnfWAsIHtcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICB0aW1lb3V0OiAwLFxuICAgXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zdCBqc29uUmVzID0gZGF0YVswXS5ibG9nX2Rlc2NcbiAgICBjb25zb2xlLmxvZyhqc29uUmVzKVxuICAgIHJldHVybiB7IHByb3BzOiB7IGpzb25SZXMgfSB9XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHt9IH1cbiAgfVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTm9Qb3N0IiwiSGVhZCIsIlBvc3QiLCJqc29uUmVzIiwiZ2V0RGF0YSIsInNldERhdGEiLCJ0aXRsZSIsInRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBhZGRpbmciLCJ1bmRlZmluZWQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJrZXkiLCJzdGFydHNXaXRoIiwiaDEiLCJoMyIsImluY2x1ZGVzIiwicmVwbGFjZSIsInAiLCJpbWciLCJzcmMiLCJ3aWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0IiwibWF4SGVpZ2h0Iiwib25FcnJvciIsImFsdCIsInJlcXVpcmVOYXZiYXJBbmRGb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/Post.js\n"));

/***/ })

});
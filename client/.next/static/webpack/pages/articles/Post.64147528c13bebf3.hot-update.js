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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NoPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoPost */ \"./pages/articles/NoPost.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Post(param) {\n    let { jsonRes  } = param;\n    _s();\n    const [getData, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setData(jsonRes);\n    }, [\n        setData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \" \",\n                        jsonRes[0].text\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space\",\n                style: {\n                    padding: \"1px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"60%\",\n                            padding: \"1rem\"\n                        },\n                        children: getData === undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                            lineNumber: 43,\n                            columnNumber: 34\n                        }, this) : getData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"container\",\n                                    children: [\n                                        item.key.startsWith(\"topHeading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-center my-3\",\n                                            children: item.text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 53\n                                        }, this),\n                                        item.key.startsWith(\"title\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"text-start my-2\",\n                                            children: item.text.includes(\"<br/>\") ? item.text.replace(/<br\\/>/g, \"<br>\") : \" \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 48\n                                        }, this),\n                                        item.key.startsWith(\"heading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-start my-2\",\n                                            children: item.text.replace(\"<br/>\", \" \")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 50\n                                        }, this),\n                                        item.key.startsWith(\"subheading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-start my-2\",\n                                            children: item.text.replace(\"<br/>\", \" \")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 53\n                                        }, this),\n                                        item.key.startsWith(\"content\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-start my-2\",\n                                            children: item.text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 50\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"d-flex justify-content-center\",\n                                            children: item.key.startsWith(\"image\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: item.text,\n                                                style: {\n                                                    width: \"100%\",\n                                                    maxWidth: \"500px\",\n                                                    height: \"100%\",\n                                                    maxHeight: \"500px\"\n                                                },\n                                                onError: (e)=>{\n                                                    e.target.onerror = null;\n                                                    e.target.src = \"https://images.pexels.com/photos/5000455/pexels-photo-5000455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\";\n                                                },\n                                                alt: jsonRes[0].text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 50\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"40%\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                border: \"2px solid black\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"dvs\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Post, \"yi7TMRsbU2e+Cx2DQzwL5dk5/j4=\");\n_c = Post;\nPost.requireNavbarAndFooter = true;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9Qb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDcEI7QUFDRDtBQUU3QixTQUFTSyxLQUFLLEtBQVcsRUFBRTtRQUFiLEVBQUVDLFFBQU8sRUFBRSxHQUFYOztJQUVaLE1BQU0sQ0FBQ0MsU0FBU0MsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXRDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLFFBQVFGO0lBQ1YsR0FBRztRQUFDRTtLQUFRO0lBR1oscUJBQ0U7OzBCQUNFLDhEQUFDSixrREFBSUE7MEJBQ0gsNEVBQUNLOzt3QkFBTTt3QkFBRUgsT0FBTyxDQUFDLEVBQUUsQ0FBQ0ksSUFBSTs7Ozs7Ozs7Ozs7OzBCQUcxQiw4REFBQ0M7Z0JBQUlDLFdBQVU7Z0JBQVFDLE9BQU87b0JBQUVDLFNBQVM7Z0JBQU07Ozs7OzswQkFxQi9DLDhEQUFDSDtnQkFBSUUsT0FBTztvQkFBQ0UsU0FBUTtnQkFBTTs7a0NBQ3pCLDhEQUFDSjt3QkFBSUUsT0FBTzs0QkFBQ0csT0FBTTs0QkFBTUYsU0FBUTt3QkFBTTtrQ0FDdENQLFlBQVlVLDBCQUFZLDhEQUFDZCwrQ0FBTUE7Ozs7bUNBQU1JLFFBQVFXLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFFdkQsOERBQUNUOzBDQUVDLDRFQUFDQTtvQ0FBSUMsV0FBVTs7d0NBQ1pPLEtBQUtFLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLCtCQUFpQiw4REFBQ0M7NENBQUdYLFdBQVU7c0RBQXFCTyxLQUFLVCxJQUFJOzs7Ozs7d0NBQ2pGUyxLQUFLRSxHQUFHLENBQUNDLFVBQVUsQ0FBQywwQkFBWSw4REFBQ0U7NENBQUdaLFdBQVU7c0RBQW1CLEtBQU1GLElBQUksQ0FBRWUsUUFBUSxDQUFDLFdBQVdOLEtBQUtULElBQUksQ0FBQ2dCLE9BQU8sQ0FBQyxXQUFXLFVBQVUsR0FBRzs7Ozs7O3dDQUMzSVAsS0FBS0UsR0FBRyxDQUFDQyxVQUFVLENBQUMsNEJBQWMsOERBQUNLOzRDQUFFZixXQUFVO3NEQUFvQk8sS0FBS1QsSUFBSSxDQUFDZ0IsT0FBTyxDQUFDLFNBQVE7Ozs7Ozt3Q0FDN0ZQLEtBQUtFLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLCtCQUFpQiw4REFBQ0s7NENBQUVmLFdBQVU7c0RBQW9CTyxLQUFLVCxJQUFJLENBQUNnQixPQUFPLENBQUMsU0FBUTs7Ozs7O3dDQUNoR1AsS0FBS0UsR0FBRyxDQUFDQyxVQUFVLENBQUMsNEJBQWMsOERBQUNLOzRDQUFFZixXQUFVO3NEQUFvQk8sS0FBS1QsSUFBSTs7Ozs7O3NEQUM3RSw4REFBQ0M7NENBQUlDLFdBQVU7c0RBQ1pPLEtBQUtFLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLDBCQUFZLDhEQUFDTTtnREFBSUMsS0FBTVYsS0FBS1QsSUFBSTtnREFBR0csT0FBTztvREFBRUcsT0FBTztvREFBUWMsVUFBVTtvREFBUUMsUUFBTztvREFBT0MsV0FBVTtnREFBUTtnREFBRUMsU0FBUyxDQUFDQyxJQUFNO29EQUFFQSxFQUFFQyxNQUFNLENBQUNDLE9BQU8sR0FBRyxJQUFJO29EQUFFRixFQUFFQyxNQUFNLENBQUNOLEdBQUcsR0FBRztnREFBbUg7Z0RBQUdRLEtBQUsvQixPQUFPLENBQUMsRUFBRSxDQUFDSSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OzsrQkFUcFVVOzs7O3FDQWFWOzs7Ozs7a0NBR0YsOERBQUNUO3dCQUFJRSxPQUFPOzRCQUFDRyxPQUFNO3dCQUFLO2tDQUN0Qiw0RUFBQ0w7NEJBQUlFLE9BQU87Z0NBQUN5QixRQUFPOzRCQUFpQjtzQ0FDbkMsNEVBQUNYOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQWhFU3RCO0tBQUFBO0FBaUVUQSxLQUFLa0Msc0JBQXNCLEdBQUcsSUFBSTs7QUFDbEMsK0RBQWVsQyxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FydGljbGVzL1Bvc3QuanM/MWI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5vUG9zdCBmcm9tICcuL05vUG9zdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5mdW5jdGlvbiBQb3N0KHsganNvblJlcyB9KSB7XG5cbiAgY29uc3QgW2dldERhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREYXRhKGpzb25SZXMpXG4gIH0sIFtzZXREYXRhXSlcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+IHtqc29uUmVzWzBdLnRleHR9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlJyBzdHlsZT17eyBwYWRkaW5nOiBcIjFweFwiIH19PjwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPScgIGJveCcgPlxuICAgICAgICB7Z2V0RGF0YSA9PT0gdW5kZWZpbmVkID8gPE5vUG9zdCAvPiA6IGdldERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgIFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcInRvcEhlYWRpbmdcIikgJiYgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgbXktMyc+eyhpdGVtLnRleHQpfTwvaDE+fVxuICAgICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcInRpdGxlXCIpICYmIDxoNCBjbGFzc05hbWU9J3RleHQtc3RhcnQgbXktMic+eyhpdGVtLnRleHQpLmluY2x1ZGVzKFwiPGJyLz5cIikgPyBpdGVtLnRleHQucmVwbGFjZSgvPGJyXFwvPi9nLCBcIjxicj5cIikgOiBcIiBcIn08L2g0Pn1cbiAgICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJoZWFkaW5nXCIpICYmIDxwIGNsYXNzTmFtZT0ndGV4dC1zdGFydCBteS0yJz57KGl0ZW0udGV4dC5yZXBsYWNlKCc8YnIvPicsXCIgXCIpKX08L3A+fVxuICAgICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcInN1YmhlYWRpbmdcIikgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LXN0YXJ0IG15LTInPnsoaXRlbS50ZXh0LnJlcGxhY2UoXCI8YnIvPlwiLFwiIFwiKSl9PC9wPn1cbiAgICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJjb250ZW50XCIpICYmIDxwIGNsYXNzTmFtZT0ndGV4dC1zdGFydCBteS0yJz57KGl0ZW0udGV4dCl9PC9wPn1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcImltYWdlXCIpICYmIDxpbWcgc3JjPXsoaXRlbS50ZXh0KX0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXhXaWR0aDogXCI1MDBweFwiLGhlaWdodDpcIjEwMCVcIixtYXhIZWlnaHQ6XCI1MDBweFwiIH19b25FcnJvcj17KGUpID0+IHsgZS50YXJnZXQub25lcnJvciA9IG51bGw7IGUudGFyZ2V0LnNyYyA9IFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTAwMDQ1NS9wZXhlbHMtcGhvdG8tNTAwMDQ1NS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCI7IH19IGFsdD17anNvblJlc1swXS50ZXh0fSAvPn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj4gKi99XG5cblxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCJ9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOic2MCUnLHBhZGRpbmc6JzFyZW0nfX0+XG4gICAgICAgIHtnZXREYXRhID09PSB1bmRlZmluZWQgPyA8Tm9Qb3N0IC8+IDogZ2V0RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwidG9wSGVhZGluZ1wiKSAmJiA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBteS0zJz57KGl0ZW0udGV4dCl9PC9oMT59XG4gICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwidGl0bGVcIikgJiYgPGg0IGNsYXNzTmFtZT0ndGV4dC1zdGFydCBteS0yJz57KGl0ZW0udGV4dCkuaW5jbHVkZXMoXCI8YnIvPlwiKSA/IGl0ZW0udGV4dC5yZXBsYWNlKC88YnJcXC8+L2csIFwiPGJyPlwiKSA6IFwiIFwifTwvaDQ+fVxuICAgICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcImhlYWRpbmdcIikgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LXN0YXJ0IG15LTInPnsoaXRlbS50ZXh0LnJlcGxhY2UoJzxici8+JyxcIiBcIikpfTwvcD59XG4gICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwic3ViaGVhZGluZ1wiKSAmJiA8cCBjbGFzc05hbWU9J3RleHQtc3RhcnQgbXktMic+eyhpdGVtLnRleHQucmVwbGFjZShcIjxici8+XCIsXCIgXCIpKX08L3A+fVxuICAgICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcImNvbnRlbnRcIikgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LXN0YXJ0IG15LTInPnsoaXRlbS50ZXh0KX08L3A+fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwiaW1hZ2VcIikgJiYgPGltZyBzcmM9eyhpdGVtLnRleHQpfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiBcIjUwMHB4XCIsaGVpZ2h0OlwiMTAwJVwiLG1heEhlaWdodDpcIjUwMHB4XCIgfX1vbkVycm9yPXsoZSkgPT4geyBlLnRhcmdldC5vbmVycm9yID0gbnVsbDsgZS50YXJnZXQuc3JjID0gXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy81MDAwNDU1L3BleGVscy1waG90by01MDAwNDU1LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTJcIjsgfX0gYWx0PXtqc29uUmVzWzBdLnRleHR9IC8+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOlwiNDAlXCJ9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Ym9yZGVyOicycHggc29saWQgYmxhY2snfX0+XG4gICAgICAgICAgICA8cD5kdnM8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblBvc3QucmVxdWlyZU5hdmJhckFuZEZvb3RlciA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCBQb3N0XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGJsb2dfc2x1ZyB9ID0gY29udGV4dC5xdWVyeTtcbiAgICBcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIlgtQXBpLUtleVwiLCBcIjY3MDZkNmViLWU2YWUtNDhhZS1hZDgyLTllNGMwYWM1MGU5NlwiKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAxL2NhdGVnb3J5L2Jsb2cvJHtibG9nX3NsdWd9YCwge1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIHRpbWVvdXQ6IDAsXG4gICBcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnN0IGpzb25SZXMgPSBkYXRhWzBdLmJsb2dfZGVzY1xuICAgIFxuICAgIHJldHVybiB7IHByb3BzOiB7IGpzb25SZXMgfSB9XG4gIH1cbiAgY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgcHJvcHM6IHt9IH1cbiAgfVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTm9Qb3N0IiwiSGVhZCIsIlBvc3QiLCJqc29uUmVzIiwiZ2V0RGF0YSIsInNldERhdGEiLCJ0aXRsZSIsInRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBhZGRpbmciLCJkaXNwbGF5Iiwid2lkdGgiLCJ1bmRlZmluZWQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJrZXkiLCJzdGFydHNXaXRoIiwiaDEiLCJoNCIsImluY2x1ZGVzIiwicmVwbGFjZSIsInAiLCJpbWciLCJzcmMiLCJtYXhXaWR0aCIsImhlaWdodCIsIm1heEhlaWdodCIsIm9uRXJyb3IiLCJlIiwidGFyZ2V0Iiwib25lcnJvciIsImFsdCIsImJvcmRlciIsInJlcXVpcmVOYXZiYXJBbmRGb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/Post.js\n"));

/***/ })

});
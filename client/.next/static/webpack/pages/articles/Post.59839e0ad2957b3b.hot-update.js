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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NoPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoPost */ \"./pages/articles/NoPost.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Post(param) {\n    let { jsonRes  } = param;\n    _s();\n    const [getData, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setData(jsonRes);\n    }, [\n        setData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \" \",\n                        jsonRes[0].text\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space\",\n                style: {\n                    padding: \"1px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"60%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"40%\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                border\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Post, \"yi7TMRsbU2e+Cx2DQzwL5dk5/j4=\");\n_c = Post;\nPost.requireNavbarAndFooter = true;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9Qb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDcEI7QUFDRDtBQUU3QixTQUFTSyxLQUFLLEtBQVcsRUFBRTtRQUFiLEVBQUVDLFFBQU8sRUFBRSxHQUFYOztJQUVaLE1BQU0sQ0FBQ0MsU0FBU0MsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXRDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLFFBQVFGO0lBQ1YsR0FBRztRQUFDRTtLQUFRO0lBR1oscUJBQ0U7OzBCQUNFLDhEQUFDSixrREFBSUE7MEJBQ0gsNEVBQUNLOzt3QkFBTTt3QkFBRUgsT0FBTyxDQUFDLEVBQUUsQ0FBQ0ksSUFBSTs7Ozs7Ozs7Ozs7OzBCQUcxQiw4REFBQ0M7Z0JBQUlDLFdBQVU7Z0JBQVFDLE9BQU87b0JBQUVDLFNBQVM7Z0JBQU07Ozs7OzswQkFxQi9DLDhEQUFDSDtnQkFBSUUsT0FBTztvQkFBQ0UsU0FBUTtnQkFBTTs7a0NBQ3pCLDhEQUFDSjt3QkFBSUUsT0FBTzs0QkFBQ0csT0FBTTt3QkFBSzs7Ozs7O2tDQUd4Qiw4REFBQ0w7d0JBQUlFLE9BQU87NEJBQUNHLE9BQU07d0JBQUs7a0NBQ3RCLDRFQUFDTDs0QkFBSUUsT0FBTztnQ0FBQ0k7NEJBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0I7R0E5Q1NaO0tBQUFBO0FBK0NUQSxLQUFLYSxzQkFBc0IsR0FBRyxJQUFJOztBQUNsQywrREFBZWIsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy9Qb3N0LmpzPzFiNjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOb1Bvc3QgZnJvbSAnLi9Ob1Bvc3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZnVuY3Rpb24gUG9zdCh7IGpzb25SZXMgfSkge1xuXG4gIGNvbnN0IFtnZXREYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGF0YShqc29uUmVzKVxuICB9LCBbc2V0RGF0YV0pXG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPiB7anNvblJlc1swXS50ZXh0fTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZScgc3R5bGU9e3sgcGFkZGluZzogXCIxcHhcIiB9fT48L2Rpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nICBib3gnID5cbiAgICAgICAge2dldERhdGEgPT09IHVuZGVmaW5lZCA/IDxOb1Bvc3QgLz4gOiBnZXREYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJ0b3BIZWFkaW5nXCIpICYmIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIG15LTMnPnsoaXRlbS50ZXh0KX08L2gxPn1cbiAgICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJ0aXRsZVwiKSAmJiA8aDQgY2xhc3NOYW1lPSd0ZXh0LXN0YXJ0IG15LTInPnsoaXRlbS50ZXh0KS5pbmNsdWRlcyhcIjxici8+XCIpID8gaXRlbS50ZXh0LnJlcGxhY2UoLzxiclxcLz4vZywgXCI8YnI+XCIpIDogXCIgXCJ9PC9oND59XG4gICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwiaGVhZGluZ1wiKSAmJiA8cCBjbGFzc05hbWU9J3RleHQtc3RhcnQgbXktMic+eyhpdGVtLnRleHQucmVwbGFjZSgnPGJyLz4nLFwiIFwiKSl9PC9wPn1cbiAgICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJzdWJoZWFkaW5nXCIpICYmIDxwIGNsYXNzTmFtZT0ndGV4dC1zdGFydCBteS0yJz57KGl0ZW0udGV4dC5yZXBsYWNlKFwiPGJyLz5cIixcIiBcIikpfTwvcD59XG4gICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwiY29udGVudFwiKSAmJiA8cCBjbGFzc05hbWU9J3RleHQtc3RhcnQgbXktMic+eyhpdGVtLnRleHQpfTwvcD59XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgICAgICAge2l0ZW0ua2V5LnN0YXJ0c1dpdGgoXCJpbWFnZVwiKSAmJiA8aW1nIHNyYz17KGl0ZW0udGV4dCl9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgbWF4V2lkdGg6IFwiNTAwcHhcIixoZWlnaHQ6XCIxMDAlXCIsbWF4SGVpZ2h0OlwiNTAwcHhcIiB9fW9uRXJyb3I9eyhlKSA9PiB7IGUudGFyZ2V0Lm9uZXJyb3IgPSBudWxsOyBlLnRhcmdldC5zcmMgPSBcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzUwMDA0NTUvcGV4ZWxzLXBob3RvLTUwMDA0NTUuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MlwiOyB9fSBhbHQ9e2pzb25SZXNbMF0udGV4dH0gLz59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+ICovfVxuXG5cbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwifX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonNjAlJ319PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCI0MCVcIn19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tib3JkZXJ9fT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuUG9zdC5yZXF1aXJlTmF2YmFyQW5kRm9vdGVyID0gdHJ1ZTtcbmV4cG9ydCBkZWZhdWx0IFBvc3RcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgYmxvZ19zbHVnIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICAgIFxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiWC1BcGktS2V5XCIsIFwiNjcwNmQ2ZWItZTZhZS00OGFlLWFkODItOWU0YzBhYzUwZTk2XCIpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDEvY2F0ZWdvcnkvYmxvZy8ke2Jsb2dfc2x1Z31gLCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgdGltZW91dDogMCxcbiAgIFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc3QganNvblJlcyA9IGRhdGFbMF0uYmxvZ19kZXNjXG4gICAgXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsganNvblJlcyB9IH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4geyBwcm9wczoge30gfVxuICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOb1Bvc3QiLCJIZWFkIiwiUG9zdCIsImpzb25SZXMiLCJnZXREYXRhIiwic2V0RGF0YSIsInRpdGxlIiwidGV4dCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwicGFkZGluZyIsImRpc3BsYXkiLCJ3aWR0aCIsImJvcmRlciIsInJlcXVpcmVOYXZiYXJBbmRGb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/Post.js\n"));

/***/ })

});
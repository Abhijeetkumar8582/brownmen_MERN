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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NoPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoPost */ \"./pages/articles/NoPost.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Post(param) {\n    let { jsonRes  } = param;\n    _s();\n    const [getData, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setData(jsonRes);\n    }, [\n        setData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \" \",\n                        jsonRes[0].text\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space\",\n                style: {\n                    padding: \"1px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" container box\",\n                children: getData === undefined ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NoPost__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                    lineNumber: 22,\n                    columnNumber: 34\n                }, this) : getData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"container\",\n                            children: [\n                                item.key.startsWith(\"topHeading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-center my-3\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 53\n                                }, this),\n                                item.key.startsWith(\"title\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-start my-2\",\n                                    children: item.text.includes(\"<br/>\") ? item.text.replace(/<br\\/>/g, \"<br>\") : \" \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 48\n                                }, this),\n                                item.key.startsWith(\"heading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-start my-2\",\n                                    children: item.text.replace(\"</br>\", \" \")\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 50\n                                }, this),\n                                item.key.startsWith(\"subheading\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-start my-2\",\n                                    children: item.text.replace(\"<br/>\", \" \")\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 53\n                                }, this),\n                                item.key.startsWith(\"content\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-start my-2\",\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 50\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-flex justify-content-center\",\n                                    children: item.key.startsWith(\"image\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: item.text,\n                                        style: {\n                                            width: \"100%\",\n                                            maxWidth: \"500px\",\n                                            height: \"100%\",\n                                            maxHeight: \"500px\"\n                                        },\n                                        alt: item.text\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 50\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Post.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Post, \"yi7TMRsbU2e+Cx2DQzwL5dk5/j4=\");\n_c = Post;\nPost.requireNavbarAndFooter = true;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9Qb3N0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDcEI7QUFDRDtBQUU3QixTQUFTSyxLQUFLLEtBQVcsRUFBRTtRQUFiLEVBQUVDLFFBQU8sRUFBRSxHQUFYOztJQUVaLE1BQU0sQ0FBQ0MsU0FBU0MsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXRDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPLFFBQVFGO0lBQ1YsR0FBRztRQUFDRTtLQUFRO0lBR1oscUJBQ0U7OzBCQUNFLDhEQUFDSixrREFBSUE7MEJBQ0gsNEVBQUNLOzt3QkFBTTt3QkFBRUgsT0FBTyxDQUFDLEVBQUUsQ0FBQ0ksSUFBSTs7Ozs7Ozs7Ozs7OzBCQUcxQiw4REFBQ0M7Z0JBQUlDLFdBQVU7Z0JBQVFDLE9BQU87b0JBQUVDLFNBQVM7Z0JBQU07Ozs7OzswQkFDL0MsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNaTCxZQUFZUSwwQkFBWSw4REFBQ1osK0NBQU1BOzs7OzJCQUFNSSxRQUFRUyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBRXZELDhEQUFDUDtrQ0FFQyw0RUFBQ0E7NEJBQUlDLFdBQVU7O2dDQUNaSyxLQUFLRSxHQUFHLENBQUNDLFVBQVUsQ0FBQywrQkFBaUIsOERBQUNDO29DQUFHVCxXQUFVOzhDQUFxQkssS0FBS1AsSUFBSTs7Ozs7O2dDQUNqRk8sS0FBS0UsR0FBRyxDQUFDQyxVQUFVLENBQUMsMEJBQVksOERBQUNFO29DQUFHVixXQUFVOzhDQUFtQixLQUFNRixJQUFJLENBQUVhLFFBQVEsQ0FBQyxXQUFXTixLQUFLUCxJQUFJLENBQUNjLE9BQU8sQ0FBQyxXQUFXLFVBQVUsR0FBRzs7Ozs7O2dDQUMzSVAsS0FBS0UsR0FBRyxDQUFDQyxVQUFVLENBQUMsNEJBQWMsOERBQUNLO29DQUFFYixXQUFVOzhDQUFvQkssS0FBS1AsSUFBSSxDQUFDYyxPQUFPLENBQUMsU0FBUTs7Ozs7O2dDQUM3RlAsS0FBS0UsR0FBRyxDQUFDQyxVQUFVLENBQUMsK0JBQWlCLDhEQUFDSztvQ0FBRWIsV0FBVTs4Q0FBb0JLLEtBQUtQLElBQUksQ0FBQ2MsT0FBTyxDQUFDLFNBQVE7Ozs7OztnQ0FDaEdQLEtBQUtFLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLDRCQUFjLDhEQUFDSztvQ0FBRWIsV0FBVTs4Q0FBb0JLLEtBQUtQLElBQUk7Ozs7Ozs4Q0FDN0UsOERBQUNDO29DQUFJQyxXQUFVOzhDQUNaSyxLQUFLRSxHQUFHLENBQUNDLFVBQVUsQ0FBQywwQkFBWSw4REFBQ007d0NBQUlDLEtBQU1WLEtBQUtQLElBQUk7d0NBQUdHLE9BQU87NENBQUVlLE9BQU87NENBQVFDLFVBQVU7NENBQVFDLFFBQU87NENBQU9DLFdBQVU7d0NBQVE7d0NBQUdDLEtBQU1mLEtBQUtQLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQVRoSlE7Ozs7NkJBYVY7Ozs7Ozs7O0FBSVY7R0FwQ1NiO0tBQUFBO0FBcUNUQSxLQUFLNEIsc0JBQXNCLEdBQUcsSUFBSTs7QUFDbEMsK0RBQWU1QixJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FydGljbGVzL1Bvc3QuanM/MWI2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5vUG9zdCBmcm9tICcuL05vUG9zdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5mdW5jdGlvbiBQb3N0KHsganNvblJlcyB9KSB7XG5cbiAgY29uc3QgW2dldERhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXREYXRhKGpzb25SZXMpXG4gIH0sIFtzZXREYXRhXSlcblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+IHtqc29uUmVzWzBdLnRleHR9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlJyBzdHlsZT17eyBwYWRkaW5nOiBcIjFweFwiIH19PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9JyBjb250YWluZXIgYm94JyA+XG4gICAgICAgIHtnZXREYXRhID09PSB1bmRlZmluZWQgPyA8Tm9Qb3N0IC8+IDogZ2V0RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwidG9wSGVhZGluZ1wiKSAmJiA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBteS0zJz57KGl0ZW0udGV4dCl9PC9oMT59XG4gICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwidGl0bGVcIikgJiYgPGgzIGNsYXNzTmFtZT0ndGV4dC1zdGFydCBteS0yJz57KGl0ZW0udGV4dCkuaW5jbHVkZXMoXCI8YnIvPlwiKSA/IGl0ZW0udGV4dC5yZXBsYWNlKC88YnJcXC8+L2csIFwiPGJyPlwiKSA6IFwiIFwifTwvaDM+fVxuICAgICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcImhlYWRpbmdcIikgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LXN0YXJ0IG15LTInPnsoaXRlbS50ZXh0LnJlcGxhY2UoJzwvYnI+JyxcIiBcIikpfTwvcD59XG4gICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwic3ViaGVhZGluZ1wiKSAmJiA8cCBjbGFzc05hbWU9J3RleHQtc3RhcnQgbXktMic+eyhpdGVtLnRleHQucmVwbGFjZShcIjxici8+XCIsXCIgXCIpKX08L3A+fVxuICAgICAgICAgICAgICB7aXRlbS5rZXkuc3RhcnRzV2l0aChcImNvbnRlbnRcIikgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LXN0YXJ0IG15LTInPnsoaXRlbS50ZXh0KX08L3A+fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgICAgICAgIHtpdGVtLmtleS5zdGFydHNXaXRoKFwiaW1hZ2VcIikgJiYgPGltZyBzcmM9eyhpdGVtLnRleHQpfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiBcIjUwMHB4XCIsaGVpZ2h0OlwiMTAwJVwiLG1heEhlaWdodDpcIjUwMHB4XCIgfX0gYWx0PXsoaXRlbS50ZXh0KX0gLz59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblBvc3QucmVxdWlyZU5hdmJhckFuZEZvb3RlciA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCBQb3N0XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGJsb2dfc2x1ZyB9ID0gY29udGV4dC5xdWVyeTtcbiAgICBjb25zb2xlLmxvZyhibG9nX3NsdWcpXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJYLUFwaS1LZXlcIiwgXCI2NzA2ZDZlYi1lNmFlLTQ4YWUtYWQ4Mi05ZTRjMGFjNTBlOTZcIik7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMy4yMzMuNzIuMjE1OjQwMDEvY2F0ZWdvcnkvYmxvZy8ke2Jsb2dfc2x1Z31gLCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgdGltZW91dDogMCxcbiAgIFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc3QganNvblJlcyA9IGRhdGFbMF0uYmxvZ19kZXNjXG4gICAgY29uc29sZS5sb2coanNvblJlcylcbiAgICByZXR1cm4geyBwcm9wczogeyBqc29uUmVzIH0gfVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHByb3BzOiB7fSB9XG4gIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5vUG9zdCIsIkhlYWQiLCJQb3N0IiwianNvblJlcyIsImdldERhdGEiLCJzZXREYXRhIiwidGl0bGUiLCJ0ZXh0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwYWRkaW5nIiwidW5kZWZpbmVkIiwibWFwIiwiaXRlbSIsImluZGV4Iiwia2V5Iiwic3RhcnRzV2l0aCIsImgxIiwiaDMiLCJpbmNsdWRlcyIsInJlcGxhY2UiLCJwIiwiaW1nIiwic3JjIiwid2lkdGgiLCJtYXhXaWR0aCIsImhlaWdodCIsIm1heEhlaWdodCIsImFsdCIsInJlcXVpcmVOYXZiYXJBbmRGb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/Post.js\n"));

/***/ })

});
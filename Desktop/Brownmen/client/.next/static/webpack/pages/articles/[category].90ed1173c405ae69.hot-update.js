"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles/[category]",{

/***/ "./pages/articles/[category].js":
/*!**************************************!*\
  !*** ./pages/articles/[category].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../JSON/Blog.json */ \"./pages/JSON/Blog.json\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Category(param) {\n    let { response  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [getCategory, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.category);\n    // const router = useRouter()\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const category = router.query.category;\n        setCategory(category);\n    }, [\n        router.query.category\n    ]);\n    const handleCLick = (slug)=>{\n        console.log(slug);\n        router.push({\n            pathname: \"/articles/Post\",\n            query: {\n                pid: slug\n            }\n        });\n    };\n    // console.log(response)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 32,\n                columnNumber: 2\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\",\n                            style: {\n                                width: \"100%\",\n                                height: \"100%\"\n                            },\n                            height: 500,\n                            alt: \"https://images.pe750&dpr=2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        style: {\n                            backgroundColor: \"#C4B05D\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"30%\",\n                                    position: \"relative\",\n                                    color: \"wheat\"\n                                },\n                                children: [\n                                    \"I Want to Eat\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                        lineNumber: 40,\n                                        columnNumber: 113\n                                    }, this),\n                                    \" Better\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"30%\",\n                                    position: \"relative\",\n                                    color: \"wheat\"\n                                },\n                                children: \"Ready to take charge of your diet? These nutrition-focused guides, tips and recipes will set you up for success.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex-wrap my-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: getCategory\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row mx-4 my-3 \",\n                        children: _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, 12).map((element, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-3 my-3 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"#\",\n                                    onClick: ()=>handleCLick(element.slug),\n                                    style: {\n                                        textDecoration: \"none\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dynamicCardDisplay\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                loading: \"lazy\",\n                                                src: element.image,\n                                                width: 285,\n                                                height: 220,\n                                                className: \"card-img-top\",\n                                                alt: \"...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                lineNumber: 56,\n                                                columnNumber: 38\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"card-body\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.category\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.blogtitle\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.author\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                lineNumber: 57,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                        lineNumber: 55,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                    lineNumber: 54,\n                                    columnNumber: 29\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Category, \"iQ0fNr1SpJOWXA8gzionN5Ya5Vk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Category;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9bY2F0ZWdvcnldLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDUjtBQUNFO0FBQ1M7QUFHdkMsU0FBU08sU0FBUyxLQUFZLEVBQUU7UUFBZCxFQUFFQyxTQUFRLEVBQUUsR0FBWjs7SUFDaEIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ksYUFBWUMsWUFBWSxHQUFDVCwrQ0FBUUEsQ0FBQ08sT0FBT0csS0FBSyxDQUFDQyxRQUFRO0lBQzlELDZCQUE2QjtJQUM3QlosZ0RBQVNBLENBQUMsSUFBSTtRQUNaLE1BQU1ZLFdBQVdKLE9BQU9HLEtBQUssQ0FBQ0MsUUFBUTtRQUN0Q0YsWUFBWUU7SUFDZCxHQUFFO1FBQUNKLE9BQU9HLEtBQUssQ0FBQ0MsUUFBUTtLQUFDO0lBTXpCLE1BQU1DLGNBQWMsQ0FBQ0MsT0FBUztRQUM1QkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaTixPQUFPUyxJQUFJLENBQUM7WUFDVkMsVUFBVTtZQUNWUCxPQUFPO2dCQUFFUSxLQUFLTDtZQUFLO1FBRXJCO0lBQ0Y7SUFDQSx3QkFBd0I7SUFDeEIscUJBQ0U7OzBCQUNILDhEQUFDTTtnQkFBSUMsV0FBVTs7Ozs7OzBCQUVWLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDQzs0QkFBSUMsS0FBSTs0QkFBZ0hDLE9BQU87Z0NBQUVDLE9BQU87Z0NBQVFDLFFBQVE7NEJBQU87NEJBQUdBLFFBQVE7NEJBQUtDLEtBQUk7Ozs7Ozs7Ozs7O2tDQUV0TCw4REFBQ1A7d0JBQUlDLFdBQVU7d0JBQU1HLE9BQU87NEJBQUVJLGlCQUFpQjt3QkFBVTs7MENBQ3ZELDhEQUFDQztnQ0FBR1IsV0FBVTtnQ0FBY0csT0FBTztvQ0FBRU0sS0FBSztvQ0FBT0MsVUFBVTtvQ0FBWUMsT0FBTztnQ0FBUTs7b0NBQUc7a0RBQWEsOERBQUNDOzs7OztvQ0FBSzs7Ozs7OzswQ0FDNUcsOERBQUNDO2dDQUFHYixXQUFVO2dDQUFjRyxPQUFPO29DQUFFTSxLQUFLO29DQUFPQyxVQUFVO29DQUFZQyxPQUFPO2dDQUFROzBDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBUTdGLDhEQUFDWjtnQkFBSUMsV0FBVTs7a0NBQ0wsOERBQUNRO2tDQUFJcEI7Ozs7OztrQ0FDTCw4REFBQ1c7d0JBQUlDLFdBQVU7a0NBQ1ZuQixrREFBVSxDQUFDLEdBQUcsSUFBSWtDLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDN0IsOERBQUNsQjtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ2xCLGtEQUFJQTtvQ0FBQ29DLE1BQUs7b0NBQUlDLFNBQVMsSUFBTTNCLFlBQVl3QixRQUFRdkIsSUFBSTtvQ0FBR1UsT0FBTzt3Q0FBRWlCLGdCQUFnQjtvQ0FBTzs4Q0FDckYsNEVBQUNyQjt3Q0FBSUMsV0FBVTs7MERBQ1YsOERBQUNqQixtREFBS0E7Z0RBQUNzQyxTQUFRO2dEQUFPbkIsS0FBS2MsUUFBUU0sS0FBSztnREFBRWxCLE9BQU87Z0RBQUtDLFFBQVE7Z0RBQUtMLFdBQVU7Z0RBQWVNLEtBQUk7Ozs7OzswREFDakcsOERBQUNQO2dEQUFJQyxXQUFVOztrRUFDWCw4REFBQ2E7d0RBQUdiLFdBQVU7a0VBQW1CZ0IsUUFBUXpCLFFBQVE7Ozs7OztrRUFDakQsOERBQUNzQjt3REFBR2IsV0FBVTtrRUFBbUJnQixRQUFRTyxTQUFTOzs7Ozs7a0VBQ2xELDhEQUFDQzt3REFBRXhCLFdBQVU7a0VBQW1CZ0IsUUFBUVMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBUHpCUjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUI3RDtHQTlEU2hDOztRQUNRRCxrREFBU0E7OztLQURqQkM7QUFpRVQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMvW2NhdGVnb3J5XS5qcz84Zjg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJsb2cgZnJvbSAnLi4vSlNPTi9CbG9nLmpzb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmZ1bmN0aW9uIENhdGVnb3J5KHsgcmVzcG9uc2UgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbZ2V0Q2F0ZWdvcnksc2V0Q2F0ZWdvcnldPXVzZVN0YXRlKHJvdXRlci5xdWVyeS5jYXRlZ29yeSlcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc3QgY2F0ZWdvcnkgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnlcbiAgICBzZXRDYXRlZ29yeShjYXRlZ29yeSlcbiAgfSxbcm91dGVyLnF1ZXJ5LmNhdGVnb3J5XSlcblxuXG5cblxuXG4gIGNvbnN0IGhhbmRsZUNMaWNrID0gKHNsdWcpID0+IHtcbiAgICBjb25zb2xlLmxvZyhzbHVnKVxuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiAnL2FydGljbGVzL1Bvc3QnLFxuICAgICAgcXVlcnk6IHsgcGlkOiBzbHVnIH0sXG5cbiAgICB9KVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICByZXR1cm4gKFxuICAgIDw+XG4gPGRpdiBjbGFzc05hbWU9J215LTUnPjwvZGl2Plxuey8qIDw+SG9tZXtjYXRlZ29yeX08Lz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktNSc+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93ICc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjM1OTIyL3BleGVscy1waG90by0yMzU5MjIuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MlwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSBoZWlnaHQ9ezUwMH0gYWx0PVwiaHR0cHM6Ly9pbWFnZXMucGU3NTAmZHByPTJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCcgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNDNEIwNURcIiB9fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcicgc3R5bGU9e3sgdG9wOiBcIjMwJVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBjb2xvcjogXCJ3aGVhdFwiIH19PkkgV2FudCB0byBFYXQ8YnIgLz4gQmV0dGVyPC9oMT5cbiAgICAgICAgICA8aDYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcicgc3R5bGU9e3sgdG9wOiBcIjMwJVwiLCBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBjb2xvcjogXCJ3aGVhdFwiIH19PlJlYWR5IHRvIHRha2UgY2hhcmdlIG9mIHlvdXIgZGlldD8gVGhlc2UgbnV0cml0aW9uLWZvY3VzZWQgZ3VpZGVzLCB0aXBzIGFuZCByZWNpcGVzIHdpbGwgc2V0IHlvdSB1cCBmb3Igc3VjY2Vzcy48L2g2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG5cblxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgZmxleC13cmFwIG15LTUgJz5cbiAgICAgICAgICAgICAgICA8aDE+e2dldENhdGVnb3J5fTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBteC00IG15LTMgJz5cbiAgICAgICAgICAgICAgICAgICAge2Jsb2cuc2xpY2UoMCwgMTIpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMyBteS0zICcga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nIycgb25DbGljaz17KCkgPT4gaGFuZGxlQ0xpY2soZWxlbWVudC5zbHVnKX0gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR5bmFtaWNDYXJkRGlzcGxheVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgbG9hZGluZz0nbGF6eScgc3JjPXtlbGVtZW50LmltYWdlfSB3aWR0aD17Mjg1fSBoZWlnaHQ9ezIyMH0gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0nZHluYW1pY0NhcmRUZXh0Jz57ZWxlbWVudC5jYXRlZ29yeX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2R5bmFtaWNDYXJkVGV4dCc+e2VsZW1lbnQuYmxvZ3RpdGxlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkeW5hbWljQ2FyZFRleHQnPntlbGVtZW50LmF1dGhvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYmxvZyIsIkxpbmsiLCJJbWFnZSIsInVzZVJvdXRlciIsIkNhdGVnb3J5IiwicmVzcG9uc2UiLCJyb3V0ZXIiLCJnZXRDYXRlZ29yeSIsInNldENhdGVnb3J5IiwicXVlcnkiLCJjYXRlZ29yeSIsImhhbmRsZUNMaWNrIiwic2x1ZyIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwicGF0aG5hbWUiLCJwaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYmFja2dyb3VuZENvbG9yIiwiaDEiLCJ0b3AiLCJwb3NpdGlvbiIsImNvbG9yIiwiYnIiLCJoNiIsInNsaWNlIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiaHJlZiIsIm9uQ2xpY2siLCJ0ZXh0RGVjb3JhdGlvbiIsImxvYWRpbmciLCJpbWFnZSIsImJsb2d0aXRsZSIsInAiLCJhdXRob3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/[category].js\n"));

/***/ })

});
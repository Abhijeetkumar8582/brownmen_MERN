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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../JSON/Blog.json */ \"./pages/JSON/Blog.json\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Category() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [getCategory, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.category);\n    const [carousel_tittle, setCarousel_tittle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [carousel_description, setCarousel_description] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [getColor, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#04A123\");\n    const [carousel_Image, setCarousel_Image] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const category = router.query.category;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCategory(category);\n        if (category == \"Exercise\") {\n            setCarousel_tittle(\"Pushing Your Limits\");\n            setCarousel_description(\"Regular exercise improves physical fitness, boosts mood, and reduces the risk of chronic diseases\");\n            setColor(\"#04A123\");\n            setCarousel_Image(\"https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        } else if (category == \"Healthy\") {\n            setCarousel_tittle(\"Eating Well for Life\");\n            setCarousel_description(\"Maintaining a healthy lifestyle is crucial for overall well-being and longevity\");\n            setColor(\"#A27202\");\n            setCarousel_Image(\"https://images.pexels.com/photos/287354/pexels-photo-287354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        } else if (category == \"Live_well\") {\n            setCarousel_tittle(\"The Power of Self-Care\");\n            setCarousel_description(\"Living well involves making healthy choices for a fulfilling and balanced life\");\n            setColor(\"#043DA1\");\n            setCarousel_Image(\"https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        } else {\n            setCarousel_tittle(\"Yoga for Stress Relief\");\n            setCarousel_description(\"Regular practice of yoga can help improve flexibility, balance, and strength\");\n            setColor(\"#4C0099\");\n            setCarousel_Image(\"https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        }\n    }, [\n        router.query.category\n    ]);\n    const refirect_to_post = (slug)=>{\n        console.log(slug);\n        router.push({\n            pathname: \"/articles/Post\",\n            query: {\n                pid: slug\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: carousel_Image,\n                            style: {\n                                width: \"100%\",\n                                height: \"100%\"\n                            },\n                            height: 500,\n                            alt: \"https://images.pe750&dpr=2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col carousel_text_box\",\n                        style: {\n                            backgroundColor: getColor\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"30%\",\n                                    position: \"relative\",\n                                    color: \"white\"\n                                },\n                                children: carousel_tittle\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"35%\",\n                                    position: \"relative\",\n                                    color: \"white\"\n                                },\n                                children: carousel_description\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex-wrap my-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Featured\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row mx-4 my-3 \",\n                        children: _JSON_Blog_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, 12).map((element, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-3 my-3 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"#\",\n                                    onClick: ()=>refirect_to_post(element.slug),\n                                    style: {\n                                        textDecoration: \"none\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dynamicCardDisplay\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                                loading: \"lazy\",\n                                                src: element.image,\n                                                width: 285,\n                                                height: 220,\n                                                className: \"card-img-top\",\n                                                alt: \"...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"card-body\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.category\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.blogtitle\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.author\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                                lineNumber: 80,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/[category].js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Category, \"2RCSCq4Lakz4t+MMXWen3cT60FI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Category;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBS0MsUUFBUTtnREFBS0wsV0FBVTtnREFBZU0sS0FBSTs7Ozs7OzBEQUNoRyw4REFBQ1A7Z0RBQUlDLFdBQVU7O2tFQUNiLDhEQUFDc0I7d0RBQUd0QixXQUFVO2tFQUFtQmUsUUFBUWhDLFFBQVE7Ozs7OztrRUFDakQsOERBQUN1Qzt3REFBR3RCLFdBQVU7a0VBQW1CZSxRQUFRUSxTQUFTOzs7Ozs7a0VBQ2xELDhEQUFDQzt3REFBRXhCLFdBQVU7a0VBQW1CZSxRQUFRVSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFQakJUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQmpEO0dBckZTdEM7O1FBRVFELGtEQUFTQTs7O0tBRmpCQzs7QUF3RlQsK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMvW2NhdGVnb3J5XS5qcz84Zjg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGJsb2cgZnJvbSAnLi4vSlNPTi9CbG9nLmpzb24nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmZ1bmN0aW9uIENhdGVnb3J5KCkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtnZXRDYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5LmNhdGVnb3J5KVxuICBjb25zdCBbY2Fyb3VzZWxfdGl0dGxlLCBzZXRDYXJvdXNlbF90aXR0bGVdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2Nhcm91c2VsX2Rlc2NyaXB0aW9uLCBzZXRDYXJvdXNlbF9kZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZ2V0Q29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiIzA0QTEyM1wiKVxuICBjb25zdCBbY2Fyb3VzZWxfSW1hZ2UsIHNldENhcm91c2VsX0ltYWdlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IGNhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDYXRlZ29yeShjYXRlZ29yeSlcbiAgICBpZiAoY2F0ZWdvcnkgPT0gXCJFeGVyY2lzZVwiKSB7XG4gICAgICBzZXRDYXJvdXNlbF90aXR0bGUoXCJQdXNoaW5nIFlvdXIgTGltaXRzXCIpXG4gICAgICBzZXRDYXJvdXNlbF9kZXNjcmlwdGlvbihcIlJlZ3VsYXIgZXhlcmNpc2UgaW1wcm92ZXMgcGh5c2ljYWwgZml0bmVzcywgYm9vc3RzIG1vb2QsIGFuZCByZWR1Y2VzIHRoZSByaXNrIG9mIGNocm9uaWMgZGlzZWFzZXNcIilcbiAgICAgIHNldENvbG9yKFwiIzA0QTEyM1wiKVxuICAgICAgc2V0Q2Fyb3VzZWxfSW1hZ2UoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80NzYxNjYzL3BleGVscy1waG90by00NzYxNjYzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTJcIilcbiAgICB9XG4gICAgZWxzZSBpZiAoY2F0ZWdvcnkgPT0gXCJIZWFsdGh5XCIpIHtcbiAgICAgIHNldENhcm91c2VsX3RpdHRsZShcIkVhdGluZyBXZWxsIGZvciBMaWZlXCIpXG4gICAgICBzZXRDYXJvdXNlbF9kZXNjcmlwdGlvbihcIk1haW50YWluaW5nIGEgaGVhbHRoeSBsaWZlc3R5bGUgaXMgY3J1Y2lhbCBmb3Igb3ZlcmFsbCB3ZWxsLWJlaW5nIGFuZCBsb25nZXZpdHlcIilcbiAgICAgIHNldENvbG9yKFwiI0EyNzIwMlwiKVxuICAgICAgc2V0Q2Fyb3VzZWxfSW1hZ2UoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yODczNTQvcGV4ZWxzLXBob3RvLTI4NzM1NC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIpXG4gICAgfVxuICAgIGVsc2UgaWYgKGNhdGVnb3J5ID09IFwiTGl2ZV93ZWxsXCIpIHtcbiAgICAgIHNldENhcm91c2VsX3RpdHRsZShcIlRoZSBQb3dlciBvZiBTZWxmLUNhcmVcIilcbiAgICAgIHNldENhcm91c2VsX2Rlc2NyaXB0aW9uKFwiTGl2aW5nIHdlbGwgaW52b2x2ZXMgbWFraW5nIGhlYWx0aHkgY2hvaWNlcyBmb3IgYSBmdWxmaWxsaW5nIGFuZCBiYWxhbmNlZCBsaWZlXCIpXG4gICAgICBzZXRDb2xvcihcIiMwNDNEQTFcIilcbiAgICAgIHNldENhcm91c2VsX0ltYWdlKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTkxNjgyMS9wZXhlbHMtcGhvdG8tMTkxNjgyMS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0Q2Fyb3VzZWxfdGl0dGxlKFwiWW9nYSBmb3IgU3RyZXNzIFJlbGllZlwiKVxuICAgICAgc2V0Q2Fyb3VzZWxfZGVzY3JpcHRpb24oXCJSZWd1bGFyIHByYWN0aWNlIG9mIHlvZ2EgY2FuIGhlbHAgaW1wcm92ZSBmbGV4aWJpbGl0eSwgYmFsYW5jZSwgYW5kIHN0cmVuZ3RoXCIpXG4gICAgICBzZXRDb2xvcihcIiM0QzAwOTlcIilcbiAgICAgIHNldENhcm91c2VsX0ltYWdlKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDA1NjUzNS9wZXhlbHMtcGhvdG8tNDA1NjUzNS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIpXG4gICAgfVxuXG4gIH0sIFtyb3V0ZXIucXVlcnkuY2F0ZWdvcnldKVxuXG4gIGNvbnN0IHJlZmlyZWN0X3RvX3Bvc3QgPSAoc2x1ZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNsdWcpXG4gICAgcm91dGVyLnB1c2goe1xuICAgICAgcGF0aG5hbWU6ICcvYXJ0aWNsZXMvUG9zdCcsXG4gICAgICBxdWVyeTogeyBwaWQ6IHNsdWcgfSxcblxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS01Jz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XG4gICAgICAgICAgPGltZyBzcmM9e2Nhcm91c2VsX0ltYWdlfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gaGVpZ2h0PXs1MDB9IGFsdD1cImh0dHBzOi8vaW1hZ2VzLnBlNzUwJmRwcj0yXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wgY2Fyb3VzZWxfdGV4dF9ib3gnIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogZ2V0Q29sb3IgfX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInIHN0eWxlPXt7IHRvcDogXCIzMCVcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgY29sb3I6IFwid2hpdGVcIiB9fT57Y2Fyb3VzZWxfdGl0dGxlfTwvaDE+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInIHN0eWxlPXt7IHRvcDogXCIzNSVcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgY29sb3I6IFwid2hpdGVcIiB9fT57Y2Fyb3VzZWxfZGVzY3JpcHRpb259PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgZmxleC13cmFwIG15LTUgJz5cbiAgICAgICAgPGgxPkZlYXR1cmVkPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBteC00IG15LTMgJz5cbiAgICAgICAgICB7YmxvZy5zbGljZSgwLCAxMikubWFwKChlbGVtZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0zIG15LTMgJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nIycgb25DbGljaz17KCkgPT4gcmVmaXJlY3RfdG9fcG9zdChlbGVtZW50LnNsdWcpfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkeW5hbWljQ2FyZERpc3BsYXlcIiA+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgbG9hZGluZz0nbGF6eScgc3JjPXtlbGVtZW50LmltYWdlfSB3aWR0aD17Mjg1fSBoZWlnaHQ9ezIyMH0gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PVwiLi4uXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2R5bmFtaWNDYXJkVGV4dCc+e2VsZW1lbnQuY2F0ZWdvcnl9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0nZHluYW1pY0NhcmRUZXh0Jz57ZWxlbWVudC5ibG9ndGl0bGV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkeW5hbWljQ2FyZFRleHQnPntlbGVtZW50LmF1dGhvcn08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4vLyAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXCJFeGVyY2lzZVwiLCBcIkhlYWx0aHlcIiwgXCJMaXZlX3dlbGxcIiwgXCJZb2dhXCJdXG5cbi8vICAgY29uc3QgcGF0aHMgPSBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+ICh7IHBhcmFtczogeyBjYXRlZ29yeSB9IH0pKVxuLy8gICByZXR1cm4ge1xuLy8gICAgIHBhdGhzLFxuLy8gICAgIGZhbGxiYWNrOiBmYWxzZSxcbi8vICAgfVxuLy8gfVxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbi8vICAgY29uc3QgY2F0ZWdvcnkgPSBwYXJhbXMuY2F0ZWdvcnlcbi8vICAgcmV0dXJuIHtcblxuLy8gICAgIHByb3BzOiB7IGNhdGVnb3J5IH0sXG4vLyAgIH1cbi8vIH1cblxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcbiAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBcIkJlYXJlciBcIiArIFwiNjcwNmQ2ZWItZTZhZS00OGFlLWFkODItOWU0YzBhYzUwZTk2XCIpO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo1MDAxL2NhdGVnb3J5L2FsbF9ibG9nYClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgY29uc29sZS5sb2coZGF0YSlcblxuICAvLyBQYXNzIGRhdGEgdG8gdGhlIHBhZ2UgdmlhIHByb3BzXG4gIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJibG9nIiwiTGluayIsIkltYWdlIiwidXNlUm91dGVyIiwiQ2F0ZWdvcnkiLCJyb3V0ZXIiLCJnZXRDYXRlZ29yeSIsInNldENhdGVnb3J5IiwicXVlcnkiLCJjYXRlZ29yeSIsImNhcm91c2VsX3RpdHRsZSIsInNldENhcm91c2VsX3RpdHRsZSIsImNhcm91c2VsX2Rlc2NyaXB0aW9uIiwic2V0Q2Fyb3VzZWxfZGVzY3JpcHRpb24iLCJnZXRDb2xvciIsInNldENvbG9yIiwiY2Fyb3VzZWxfSW1hZ2UiLCJzZXRDYXJvdXNlbF9JbWFnZSIsInJlZmlyZWN0X3RvX3Bvc3QiLCJzbHVnIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJwYXRobmFtZSIsInBpZCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoMSIsInRvcCIsInBvc2l0aW9uIiwiY29sb3IiLCJoNSIsInNsaWNlIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiaHJlZiIsIm9uQ2xpY2siLCJ0ZXh0RGVjb3JhdGlvbiIsImxvYWRpbmciLCJpbWFnZSIsImg2IiwiYmxvZ3RpdGxlIiwicCIsImF1dGhvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles/[category].js\n"));

/***/ })

});
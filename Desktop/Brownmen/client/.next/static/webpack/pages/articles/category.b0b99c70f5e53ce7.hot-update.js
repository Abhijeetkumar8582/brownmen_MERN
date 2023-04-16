"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles/category",{

/***/ "./pages/articles/category.js":
/*!************************************!*\
  !*** ./pages/articles/category.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Category(param) {\n    let { category  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [getCategory, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.category);\n    const [carousel_tittle, setCarousel_tittle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [carousel_description, setCarousel_description] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [getColor, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#04A123\");\n    const [carousel_Image, setCarousel_Image] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // const category = router.query.category\n    const handleCategoryChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        switch(category){\n            case \"Nutrition\":\n                return {\n                    title: \"Pushing Your Limits\",\n                    description: \"Regular exercise improves physical fitness, boosts mood, and reduces the risk of chronic diseases\",\n                    color: \"#04A123\",\n                    image: \"https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\"\n                };\n            case \"Fitness\":\n                return {\n                    title: \"Eating Well for Life\",\n                    description: \"Maintaining a healthy lifestyle is crucial for overall well-being and longevity\",\n                    color: \"#A27202\",\n                    image: \"https://images.pexels.com/photos/287354/pexels-photo-287354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\"\n                };\n            case \"Health\":\n                return {\n                    title: \"The Power of Self-Care\",\n                    description: \"Living well involves making healthy choices for a fulfilling and balanced life\",\n                    color: \"#043DA1\",\n                    image: \"https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\"\n                };\n            default:\n                return {\n                    title: \"Yoga for Stress Relief\",\n                    description: \"Regular practice of yoga can help improve flexibility, balance, and strength\",\n                    color: \"#4C0099\",\n                    image: \"https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\"\n                };\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCarousel_tittle(handleCategoryChange.title);\n        setCarousel_description(handleCategoryChange.description);\n        setColor(handleCategoryChange.color);\n        setCarousel_Image(handleCategoryChange.image);\n    }, [\n        handleCategoryChange\n    ]);\n    const refirect_to_post = (blog_slug)=>{\n        router.push({\n            pathname: \"/articles/Post\",\n            query: {\n                blog_slug: blog_slug\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: carousel_Image,\n                            loading: \"lazy\",\n                            style: {\n                                width: \"100%\",\n                                height: \"100%\"\n                            },\n                            width: 500,\n                            height: 500,\n                            alt: \"https://images.pe750&dpr=2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col carousel_text_box\",\n                        style: {\n                            backgroundColor: getColor\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"30%\",\n                                    position: \"relative\",\n                                    color: \"white\"\n                                },\n                                children: carousel_tittle\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"35%\",\n                                    position: \"relative\",\n                                    color: \"white\"\n                                },\n                                children: carousel_description\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex-wrap my-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Featured\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row mx-4 my-3 \"\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Category, \"KIknC7U8B43KXBDlSYKUb1TnA6U=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Category;\nCategory.requireNavbarAndFooter = true;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9jYXRlZ29yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ2hDO0FBQ0U7QUFDUztBQU12QyxTQUFTTyxTQUFTLEtBQVksRUFBRTtRQUFkLEVBQUVDLFNBQVEsRUFBRSxHQUFaOztJQUVoQixNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsTUFBTSxDQUFDSSxhQUFhQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDTSxPQUFPRyxLQUFLLENBQUNKLFFBQVE7SUFDakUsTUFBTSxDQUFDSyxpQkFBaUJDLG1CQUFtQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNZLHNCQUFzQkMsd0JBQXdCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pFLE1BQU0sQ0FBQ2MsVUFBVUMsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN0QyxNQUFNLENBQUNnQixnQkFBZ0JDLGtCQUFrQixHQUFHakIsK0NBQVFBLENBQUM7SUFDckQseUNBQXlDO0lBSXpDLE1BQU1rQix1QkFBdUJuQiw4Q0FBT0EsQ0FBQyxJQUFNO1FBQ3pDLE9BQVFNO1lBQ04sS0FBSztnQkFDSCxPQUFPO29CQUNMYyxPQUFPO29CQUNQQyxhQUFhO29CQUNiQyxPQUFPO29CQUNQQyxPQUFPO2dCQUNUO1lBQ0YsS0FBSztnQkFDSCxPQUFNO29CQUNKSCxPQUFPO29CQUNQQyxhQUFhO29CQUNiQyxPQUFPO29CQUNQQyxPQUFPO2dCQUVUO1lBQ0QsS0FBSztnQkFDRixPQUFNO29CQUNKSCxPQUFPO29CQUNQQyxhQUFhO29CQUNiQyxPQUFPO29CQUNQQyxPQUFPO2dCQUVUO1lBQ0Y7Z0JBQ0UsT0FBTTtvQkFDSkgsT0FBTztvQkFDUEMsYUFBWTtvQkFDWkMsT0FBTztvQkFDUkMsT0FBTztnQkFDVjtRQUNKO0lBQ0Y7SUFLQXhCLGdEQUFTQSxDQUFDLElBQU07UUFDZGEsbUJBQW1CTyxxQkFBcUJDLEtBQUs7UUFDN0NOLHdCQUF3QksscUJBQXFCRSxXQUFXO1FBQ3hETCxTQUFTRyxxQkFBcUJHLEtBQUs7UUFDbkNKLGtCQUFrQkMscUJBQXFCSSxLQUFLO0lBRzlDLEdBQUc7UUFBQ0o7S0FBcUI7SUFFekIsTUFBTUssbUJBQW1CLENBQUNDLFlBQWM7UUFDdENsQixPQUFPbUIsSUFBSSxDQUFDO1lBQ1ZDLFVBQVU7WUFDVmpCLE9BQU87Z0JBQUVlLFdBQVdBO1lBQVU7UUFDaEM7SUFDRjtJQUVBLHFCQUNFOzswQkFFRSw4REFBQ0c7Z0JBQUlDLFdBQVU7Ozs7OzswQkFDZiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQzFCLG1EQUFLQTs0QkFBQzJCLEtBQUtiOzRCQUFnQmMsU0FBUTs0QkFBT0MsT0FBTztnQ0FBRUMsT0FBTztnQ0FBUUMsUUFBUTs0QkFBTzs0QkFBR0QsT0FBTzs0QkFBS0MsUUFBUTs0QkFBS0MsS0FBSTs7Ozs7Ozs7Ozs7a0NBRXBILDhEQUFDUDt3QkFBSUMsV0FBVTt3QkFBd0JHLE9BQU87NEJBQUVJLGlCQUFpQnJCO3dCQUFTOzswQ0FDeEUsOERBQUNzQjtnQ0FBR1IsV0FBVTtnQ0FBY0csT0FBTztvQ0FBRU0sS0FBSztvQ0FBT0MsVUFBVTtvQ0FBWWpCLE9BQU87Z0NBQVE7MENBQUlYOzs7Ozs7MENBQzFGLDhEQUFDNkI7Z0NBQUdYLFdBQVU7Z0NBQWNHLE9BQU87b0NBQUVNLEtBQUs7b0NBQU9DLFVBQVU7b0NBQVlqQixPQUFPO2dDQUFROzBDQUFJVDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU05Riw4REFBQ2U7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDUTtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDVDt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7QUFtQnZCO0dBdkdTeEI7O1FBRVFELGtEQUFTQTs7O0tBRmpCQztBQXlHVEEsU0FBU29DLHNCQUFzQixHQUFHLElBQUk7O0FBQ3RDLCtEQUFlcEMsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcnRpY2xlcy9jYXRlZ29yeS5qcz85YmQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5cblxuXG5mdW5jdGlvbiBDYXRlZ29yeSh7IGNhdGVnb3J5IH0pIHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbZ2V0Q2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeS5jYXRlZ29yeSlcbiAgY29uc3QgW2Nhcm91c2VsX3RpdHRsZSwgc2V0Q2Fyb3VzZWxfdGl0dGxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjYXJvdXNlbF9kZXNjcmlwdGlvbiwgc2V0Q2Fyb3VzZWxfZGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2dldENvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShcIiMwNEExMjNcIilcbiAgY29uc3QgW2Nhcm91c2VsX0ltYWdlLCBzZXRDYXJvdXNlbF9JbWFnZV0gPSB1c2VTdGF0ZShcIlwiKVxuICAvLyBjb25zdCBjYXRlZ29yeSA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeVxuXG5cblxuICBjb25zdCBoYW5kbGVDYXRlZ29yeUNoYW5nZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHN3aXRjaCAoY2F0ZWdvcnkpIHtcbiAgICAgIGNhc2UgJ051dHJpdGlvbic6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdGl0bGU6IFwiUHVzaGluZyBZb3VyIExpbWl0c1wiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmVndWxhciBleGVyY2lzZSBpbXByb3ZlcyBwaHlzaWNhbCBmaXRuZXNzLCBib29zdHMgbW9vZCwgYW5kIHJlZHVjZXMgdGhlIHJpc2sgb2YgY2hyb25pYyBkaXNlYXNlcycsXG4gICAgICAgICAgY29sb3I6ICcjMDRBMTIzJyxcbiAgICAgICAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzQ3NjE2NjMvcGV4ZWxzLXBob3RvLTQ3NjE2NjMuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MicsXG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ0ZpdG5lc3MnOlxuICAgICAgICByZXR1cm57XG4gICAgICAgICAgdGl0bGU6IFwiRWF0aW5nIFdlbGwgZm9yIExpZmVcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ01haW50YWluaW5nIGEgaGVhbHRoeSBsaWZlc3R5bGUgaXMgY3J1Y2lhbCBmb3Igb3ZlcmFsbCB3ZWxsLWJlaW5nIGFuZCBsb25nZXZpdHknLFxuICAgICAgICAgIGNvbG9yOiAnI0EyNzIwMicsXG4gICAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yODczNTQvcGV4ZWxzLXBob3RvLTI4NzM1NC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yJyxcbiAgICAgIFxuICAgICAgICB9XG4gICAgICAgY2FzZSAnSGVhbHRoJzpcbiAgICAgICAgICByZXR1cm57XG4gICAgICAgICAgICB0aXRsZTogXCJUaGUgUG93ZXIgb2YgU2VsZi1DYXJlXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xpdmluZyB3ZWxsIGludm9sdmVzIG1ha2luZyBoZWFsdGh5IGNob2ljZXMgZm9yIGEgZnVsZmlsbGluZyBhbmQgYmFsYW5jZWQgbGlmZScsXG4gICAgICAgICAgICBjb2xvcjogJyMwNDNEQTEnLFxuICAgICAgICAgICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xOTE2ODIxL3BleGVscy1waG90by0xOTE2ODIxLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTInLFxuICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgdGl0bGU6ICdZb2dhIGZvciBTdHJlc3MgUmVsaWVmJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOidSZWd1bGFyIHByYWN0aWNlIG9mIHlvZ2EgY2FuIGhlbHAgaW1wcm92ZSBmbGV4aWJpbGl0eSwgYmFsYW5jZSwgYW5kIHN0cmVuZ3RoJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzRDMDA5OScsXG4gICAgICAgICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDA1NjUzNS9wZXhlbHMtcGhvdG8tNDA1NjUzNS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yJyxcbiAgICAgICAgfTtcbiAgICB9XG4gIH0pXG5cblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDYXJvdXNlbF90aXR0bGUoaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UudGl0bGUpO1xuICAgIHNldENhcm91c2VsX2Rlc2NyaXB0aW9uKGhhbmRsZUNhdGVnb3J5Q2hhbmdlLmRlc2NyaXB0aW9uKTtcbiAgICBzZXRDb2xvcihoYW5kbGVDYXRlZ29yeUNoYW5nZS5jb2xvcik7XG4gICAgc2V0Q2Fyb3VzZWxfSW1hZ2UoaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UuaW1hZ2UpO1xuICAgXG5cbiAgfSwgW2hhbmRsZUNhdGVnb3J5Q2hhbmdlXSlcblxuICBjb25zdCByZWZpcmVjdF90b19wb3N0ID0gKGJsb2dfc2x1ZykgPT4ge1xuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiAnL2FydGljbGVzL1Bvc3QnLFxuICAgICAgcXVlcnk6IHsgYmxvZ19zbHVnOiBibG9nX3NsdWcgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdteS01Jz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCc+XG4gICAgICAgICAgPEltYWdlIHNyYz17Y2Fyb3VzZWxfSW1hZ2V9IGxvYWRpbmc9XCJsYXp5XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IHdpZHRoPXs1MDB9IGhlaWdodD17NTAwfSBhbHQ9XCJodHRwczovL2ltYWdlcy5wZTc1MCZkcHI9MlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sIGNhcm91c2VsX3RleHRfYm94JyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGdldENvbG9yIH19PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBzdHlsZT17eyB0b3A6IFwiMzAlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGNvbG9yOiBcIndoaXRlXCIgfX0+e2Nhcm91c2VsX3RpdHRsZX08L2gxPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBzdHlsZT17eyB0b3A6IFwiMzUlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGNvbG9yOiBcIndoaXRlXCIgfX0+e2Nhcm91c2VsX2Rlc2NyaXB0aW9ufTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGZsZXgtd3JhcCBteS01ICc+XG4gICAgICAgIDxoMT5GZWF0dXJlZDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgbXgtNCBteS0zICc+XG4gICAgICAgICAgey8qIHtkYXRhLnNsaWNlKDAsIDEyKS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTMgbXktMyAnIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPScjJyBvbkNsaWNrPXsoKSA9PiByZWZpcmVjdF90b19wb3N0KGVsZW1lbnQuc2x1Zyl9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR5bmFtaWNDYXJkRGlzcGxheVwiID5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBsb2FkaW5nPSdsYXp5JyBzcmM9e2VsZW1lbnQuaW1hZ2V9IHdpZHRoPXsyODV9IGhlaWdodD17MjIwfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9e2VsZW1lbnQuYmxvZ3RpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0nZHluYW1pY0NhcmRUZXh0Jz57ZWxlbWVudC5jYXRlZ29yeX08L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdkeW5hbWljQ2FyZFRleHQnPntlbGVtZW50LmJsb2d0aXRsZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2R5bmFtaWNDYXJkVGV4dCc+e2VsZW1lbnQuYXV0aG9yfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuQ2F0ZWdvcnkucmVxdWlyZU5hdmJhckFuZEZvb3RlciA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gY29udGV4dC5xdWVyeTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiWC1BcGktS2V5XCIsIFwiNjcwNmQ2ZWItZTZhZS00OGFlLWFkODItOWU0YzBhYzUwZTk2XCIpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTMuMjMzLjcyLjIxNTo0MDAxL2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YCwge1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIHRpbWVvdXQ6IDAsXG5cbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIC8vIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHByb3BzOiB7fSB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIkxpbmsiLCJJbWFnZSIsInVzZVJvdXRlciIsIkNhdGVnb3J5IiwiY2F0ZWdvcnkiLCJyb3V0ZXIiLCJnZXRDYXRlZ29yeSIsInNldENhdGVnb3J5IiwicXVlcnkiLCJjYXJvdXNlbF90aXR0bGUiLCJzZXRDYXJvdXNlbF90aXR0bGUiLCJjYXJvdXNlbF9kZXNjcmlwdGlvbiIsInNldENhcm91c2VsX2Rlc2NyaXB0aW9uIiwiZ2V0Q29sb3IiLCJzZXRDb2xvciIsImNhcm91c2VsX0ltYWdlIiwic2V0Q2Fyb3VzZWxfSW1hZ2UiLCJoYW5kbGVDYXRlZ29yeUNoYW5nZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb2xvciIsImltYWdlIiwicmVmaXJlY3RfdG9fcG9zdCIsImJsb2dfc2x1ZyIsInB1c2giLCJwYXRobmFtZSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImxvYWRpbmciLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYmFja2dyb3VuZENvbG9yIiwiaDEiLCJ0b3AiLCJwb3NpdGlvbiIsImg1IiwicmVxdWlyZU5hdmJhckFuZEZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles/category.js\n"));

/***/ })

});
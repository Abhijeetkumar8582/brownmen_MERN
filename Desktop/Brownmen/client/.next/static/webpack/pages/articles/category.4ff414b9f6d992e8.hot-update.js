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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Category(param) {\n    let { data  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [getCategory, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.category);\n    const [carousel_tittle, setCarousel_tittle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [carousel_description, setCarousel_description] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [getColor, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#04A123\");\n    const [carousel_Image, setCarousel_Image] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const category = router.query.category;\n    const handleCategory = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        switch(category){\n            case \"Nutrition\":\n                return {\n                    title: \"\"\n                };\n        }\n    });\n    // useEffect(() => {\n    //   setCategory(category)\n    //   if (category == \"Nutrition\") {\n    //     setCarousel_tittle(\"Pushing Your Limits\")\n    //     setCarousel_description(\"Regular exercise improves physical fitness, boosts mood, and reduces the risk of chronic diseases\")\n    //     setColor(\"#04A123\")\n    //     setCarousel_Image(\"https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\")\n    //   }\n    //   else if (category == \"Fitness\") {\n    //     setCarousel_tittle(\"Eating Well for Life\")\n    //     setCarousel_description(\"Maintaining a healthy lifestyle is crucial for overall well-being and longevity\")\n    //     setColor(\"#A27202\")\n    //     setCarousel_Image(\"https://images.pexels.com/photos/287354/pexels-photo-287354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\")\n    //   }\n    //   else if (category == \"Health\") {\n    //     setCarousel_tittle(\"The Power of Self-Care\")\n    //     setCarousel_description(\"Living well involves making healthy choices for a fulfilling and balanced life\")\n    //     setColor(\"#043DA1\")\n    //     setCarousel_Image(\"https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\")\n    //   }\n    //   else {\n    //     setCarousel_tittle(\"Yoga for Stress Relief\")\n    //     setCarousel_description(\"Regular practice of yoga can help improve flexibility, balance, and strength\")\n    //     setColor(\"#4C0099\")\n    //     setCarousel_Image(\"https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\")\n    //   }\n    // }, [router.query.category])\n    const refirect_to_post = (blog_slug)=>{\n        router.push({\n            pathname: \"/articles/Post\",\n            query: {\n                blog_slug: blog_slug\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: carousel_Image,\n                            loading: \"lazy\",\n                            style: {\n                                width: \"100%\",\n                                height: \"100%\"\n                            },\n                            width: 500,\n                            height: 500,\n                            alt: \"https://images.pe750&dpr=2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col carousel_text_box\",\n                        style: {\n                            backgroundColor: getColor\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"30%\",\n                                    position: \"relative\",\n                                    color: \"white\"\n                                },\n                                children: carousel_tittle\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"35%\",\n                                    position: \"relative\",\n                                    color: \"white\"\n                                },\n                                children: carousel_description\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex-wrap my-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Featured\"\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row mx-4 my-3 \",\n                        children: data.slice(0, 12).map((element, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-3 my-3 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"#\",\n                                    onClick: ()=>refirect_to_post(element.slug),\n                                    style: {\n                                        textDecoration: \"none\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"dynamicCardDisplay\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                loading: \"lazy\",\n                                                src: element.image,\n                                                width: 285,\n                                                height: 220,\n                                                className: \"card-img-top\",\n                                                alt: element.blogtitle\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"card-body\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.category\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.blogtitle\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"dynamicCardText\",\n                                                        children: element.author\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Category, \"Bsvx/1Ko7QHhLCZLS1guBmk6XXM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Category;\nCategory.requireNavbarAndFooter = true;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQjt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUN4QixtREFBS0E7Z0RBQUMwQixTQUFRO2dEQUFPRCxLQUFLYyxRQUFRTSxLQUFLO2dEQUFFakIsT0FBTztnREFBS0MsUUFBUTtnREFBS0wsV0FBVTtnREFBZU0sS0FBS1MsUUFBUU8sU0FBUzs7Ozs7OzBEQUNsSCw4REFBQ3ZCO2dEQUFJQyxXQUFVOztrRUFDYiw4REFBQ3VCO3dEQUFHdkIsV0FBVTtrRUFBbUJlLFFBQVEvQixRQUFROzs7Ozs7a0VBQ2pELDhEQUFDdUM7d0RBQUd2QixXQUFVO2tFQUFtQmUsUUFBUU8sU0FBUzs7Ozs7O2tFQUNsRCw4REFBQ0U7d0RBQUV4QixXQUFVO2tFQUFtQmUsUUFBUVUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBUGpCVDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJqRDtHQW5HU3RDOztRQUVRRCxrREFBU0E7OztLQUZqQkM7QUFxR1RBLFNBQVNnRCxzQkFBc0IsR0FBRyxJQUFJOztBQUN0QywrREFBZWhELFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMvY2F0ZWdvcnkuanM/OWJkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuXG5cblxuZnVuY3Rpb24gQ2F0ZWdvcnkoeyBkYXRhIH0pIHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbZ2V0Q2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeS5jYXRlZ29yeSlcbiAgY29uc3QgW2Nhcm91c2VsX3RpdHRsZSwgc2V0Q2Fyb3VzZWxfdGl0dGxlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjYXJvdXNlbF9kZXNjcmlwdGlvbiwgc2V0Q2Fyb3VzZWxfZGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2dldENvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShcIiMwNEExMjNcIilcbiAgY29uc3QgW2Nhcm91c2VsX0ltYWdlLCBzZXRDYXJvdXNlbF9JbWFnZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBjYXRlZ29yeSA9IHJvdXRlci5xdWVyeS5jYXRlZ29yeVxuXG5cblxuY29uc3QgaGFuZGxlQ2F0ZWdvcnkgPSB1c2VNZW1vKCgpPT57XG4gIHN3aXRjaChjYXRlZ29yeSl7XG4gICAgY2FzZSAnTnV0cml0aW9uJzpcbiAgICAgIHJldHVybntcbiAgICAgICAgdGl0bGU6XCJcIlxuICAgICAgfVxuICB9XG59KVxuXG5cblxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgLy8gICBzZXRDYXRlZ29yeShjYXRlZ29yeSlcbiAgLy8gICBpZiAoY2F0ZWdvcnkgPT0gXCJOdXRyaXRpb25cIikge1xuICAvLyAgICAgc2V0Q2Fyb3VzZWxfdGl0dGxlKFwiUHVzaGluZyBZb3VyIExpbWl0c1wiKVxuICAvLyAgICAgc2V0Q2Fyb3VzZWxfZGVzY3JpcHRpb24oXCJSZWd1bGFyIGV4ZXJjaXNlIGltcHJvdmVzIHBoeXNpY2FsIGZpdG5lc3MsIGJvb3N0cyBtb29kLCBhbmQgcmVkdWNlcyB0aGUgcmlzayBvZiBjaHJvbmljIGRpc2Vhc2VzXCIpXG4gIC8vICAgICBzZXRDb2xvcihcIiMwNEExMjNcIilcbiAgLy8gICAgIHNldENhcm91c2VsX0ltYWdlKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDc2MTY2My9wZXhlbHMtcGhvdG8tNDc2MTY2My5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIpXG4gIC8vICAgfVxuICAvLyAgIGVsc2UgaWYgKGNhdGVnb3J5ID09IFwiRml0bmVzc1wiKSB7XG4gIC8vICAgICBzZXRDYXJvdXNlbF90aXR0bGUoXCJFYXRpbmcgV2VsbCBmb3IgTGlmZVwiKVxuICAvLyAgICAgc2V0Q2Fyb3VzZWxfZGVzY3JpcHRpb24oXCJNYWludGFpbmluZyBhIGhlYWx0aHkgbGlmZXN0eWxlIGlzIGNydWNpYWwgZm9yIG92ZXJhbGwgd2VsbC1iZWluZyBhbmQgbG9uZ2V2aXR5XCIpXG4gIC8vICAgICBzZXRDb2xvcihcIiNBMjcyMDJcIilcbiAgLy8gICAgIHNldENhcm91c2VsX0ltYWdlKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjg3MzU0L3BleGVscy1waG90by0yODczNTQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MlwiKVxuICAvLyAgIH1cbiAgLy8gICBlbHNlIGlmIChjYXRlZ29yeSA9PSBcIkhlYWx0aFwiKSB7XG4gIC8vICAgICBzZXRDYXJvdXNlbF90aXR0bGUoXCJUaGUgUG93ZXIgb2YgU2VsZi1DYXJlXCIpXG4gIC8vICAgICBzZXRDYXJvdXNlbF9kZXNjcmlwdGlvbihcIkxpdmluZyB3ZWxsIGludm9sdmVzIG1ha2luZyBoZWFsdGh5IGNob2ljZXMgZm9yIGEgZnVsZmlsbGluZyBhbmQgYmFsYW5jZWQgbGlmZVwiKVxuICAvLyAgICAgc2V0Q29sb3IoXCIjMDQzREExXCIpXG4gIC8vICAgICBzZXRDYXJvdXNlbF9JbWFnZShcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzE5MTY4MjEvcGV4ZWxzLXBob3RvLTE5MTY4MjEuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MlwiKVxuICAvLyAgIH1cbiAgLy8gICBlbHNlIHtcbiAgLy8gICAgIHNldENhcm91c2VsX3RpdHRsZShcIllvZ2EgZm9yIFN0cmVzcyBSZWxpZWZcIilcbiAgLy8gICAgIHNldENhcm91c2VsX2Rlc2NyaXB0aW9uKFwiUmVndWxhciBwcmFjdGljZSBvZiB5b2dhIGNhbiBoZWxwIGltcHJvdmUgZmxleGliaWxpdHksIGJhbGFuY2UsIGFuZCBzdHJlbmd0aFwiKVxuICAvLyAgICAgc2V0Q29sb3IoXCIjNEMwMDk5XCIpXG4gIC8vICAgICBzZXRDYXJvdXNlbF9JbWFnZShcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzQwNTY1MzUvcGV4ZWxzLXBob3RvLTQwNTY1MzUuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJnc9MTI2MCZoPTc1MCZkcHI9MlwiKVxuICAvLyAgIH1cblxuXG4gIC8vIH0sIFtyb3V0ZXIucXVlcnkuY2F0ZWdvcnldKVxuXG4gIGNvbnN0IHJlZmlyZWN0X3RvX3Bvc3QgPSAoYmxvZ19zbHVnKSA9PiB7XG4gICAgcm91dGVyLnB1c2goe1xuICAgICAgcGF0aG5hbWU6ICcvYXJ0aWNsZXMvUG9zdCcsXG4gICAgICBxdWVyeTogeyBibG9nX3NsdWc6IGJsb2dfc2x1ZyB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J215LTUnPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyAnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtjYXJvdXNlbF9JbWFnZX0gbG9hZGluZz1cImxhenlcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9IGFsdD1cImh0dHBzOi8vaW1hZ2VzLnBlNzUwJmRwcj0yXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wgY2Fyb3VzZWxfdGV4dF9ib3gnIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogZ2V0Q29sb3IgfX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInIHN0eWxlPXt7IHRvcDogXCIzMCVcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgY29sb3I6IFwid2hpdGVcIiB9fT57Y2Fyb3VzZWxfdGl0dGxlfTwvaDE+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInIHN0eWxlPXt7IHRvcDogXCIzNSVcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgY29sb3I6IFwid2hpdGVcIiB9fT57Y2Fyb3VzZWxfZGVzY3JpcHRpb259PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgZmxleC13cmFwIG15LTUgJz5cbiAgICAgICAgPGgxPkZlYXR1cmVkPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBteC00IG15LTMgJz5cbiAgICAgICAgICB7ZGF0YS5zbGljZSgwLCAxMikubWFwKChlbGVtZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0zIG15LTMgJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nIycgb25DbGljaz17KCkgPT4gcmVmaXJlY3RfdG9fcG9zdChlbGVtZW50LnNsdWcpfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkeW5hbWljQ2FyZERpc3BsYXlcIiA+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgbG9hZGluZz0nbGF6eScgc3JjPXtlbGVtZW50LmltYWdlfSB3aWR0aD17Mjg1fSBoZWlnaHQ9ezIyMH0gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgYWx0PXtlbGVtZW50LmJsb2d0aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2R5bmFtaWNDYXJkVGV4dCc+e2VsZW1lbnQuY2F0ZWdvcnl9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT0nZHluYW1pY0NhcmRUZXh0Jz57ZWxlbWVudC5ibG9ndGl0bGV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdkeW5hbWljQ2FyZFRleHQnPntlbGVtZW50LmF1dGhvcn08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuQ2F0ZWdvcnkucmVxdWlyZU5hdmJhckFuZEZvb3RlciA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuXG4gIHRyeSB7XG4gICAgY29uc3QgeyBjYXRlZ29yeSB9ID0gY29udGV4dC5xdWVyeTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiWC1BcGktS2V5XCIsIFwiNjcwNmQ2ZWItZTZhZS00OGFlLWFkODItOWU0YzBhYzUwZTk2XCIpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vMTMuMjMzLjcyLjIxNTo0MDAxL2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YCwge1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIHRpbWVvdXQ6IDAsXG5cbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhIH0gfVxuICB9XG4gIGNhdGNoIChlcnJvcikge1xuICAgIC8vIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJldHVybiB7IHByb3BzOiB7fSB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIkxpbmsiLCJJbWFnZSIsInVzZVJvdXRlciIsIkNhdGVnb3J5IiwiZGF0YSIsInJvdXRlciIsImdldENhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJxdWVyeSIsImNhdGVnb3J5IiwiY2Fyb3VzZWxfdGl0dGxlIiwic2V0Q2Fyb3VzZWxfdGl0dGxlIiwiY2Fyb3VzZWxfZGVzY3JpcHRpb24iLCJzZXRDYXJvdXNlbF9kZXNjcmlwdGlvbiIsImdldENvbG9yIiwic2V0Q29sb3IiLCJjYXJvdXNlbF9JbWFnZSIsInNldENhcm91c2VsX0ltYWdlIiwiaGFuZGxlQ2F0ZWdvcnkiLCJ0aXRsZSIsInJlZmlyZWN0X3RvX3Bvc3QiLCJibG9nX3NsdWciLCJwdXNoIiwicGF0aG5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJsb2FkaW5nIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImJhY2tncm91bmRDb2xvciIsImgxIiwidG9wIiwicG9zaXRpb24iLCJjb2xvciIsImg1Iiwic2xpY2UiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJocmVmIiwib25DbGljayIsInNsdWciLCJ0ZXh0RGVjb3JhdGlvbiIsImltYWdlIiwiYmxvZ3RpdGxlIiwiaDYiLCJwIiwiYXV0aG9yIiwicmVxdWlyZU5hdmJhckFuZEZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles/category.js\n"));

/***/ })

});
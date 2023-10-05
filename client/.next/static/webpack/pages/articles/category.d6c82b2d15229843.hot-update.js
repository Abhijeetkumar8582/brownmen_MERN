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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Category(param) {\n    let { data  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [getCategory, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(router.query.category);\n    const [carousel_tittle, setCarousel_tittle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [carousel_description, setCarousel_description] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [getColor, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#04A123\");\n    const [carousel_Image, setCarousel_Image] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const category = router.query.category;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setCategory(category);\n        if (category == \"Nutrition\") {\n            setCarousel_tittle(\"Pushing Your Limits\");\n            setCarousel_description(\"Regular exercise improves physical fitness, boosts mood, and reduces the risk of chronic diseases\");\n            setColor(\"#04A123\");\n            setCarousel_Image(\"https://images.pexels.com/photos/4761663/pexels-photo-4761663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        } else if (category == \"Fitness\") {\n            setCarousel_tittle(\"Eating Well for Life\");\n            setCarousel_description(\"Maintaining a healthy lifestyle is crucial for overall well-being and longevity\");\n            setColor(\"#A27202\");\n            setCarousel_Image(\"https://images.pexels.com/photos/287354/pexels-photo-287354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        } else if (category == \"Health\") {\n            setCarousel_tittle(\"The Power of Self-Care\");\n            setCarousel_description(\"Living well involves making healthy choices for a fulfilling and balanced life\");\n            setColor(\"#043DA1\");\n            setCarousel_Image(\"https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        } else {\n            setCarousel_tittle(\"Yoga for Stress Relief\");\n            setCarousel_description(\"Regular practice of yoga can help improve flexibility, balance, and strength\");\n            setColor(\"#4C0099\");\n            setCarousel_Image(\"https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2\");\n        }\n    }, [\n        router.query.category\n    ]);\n    const refirect_to_post = (blog_slug)=>{\n        router.push({\n            pathname: \"/articles/Post\",\n            query: {\n                blog_slug: blog_slug\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: [\n                        \" \",\n                        category\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: carousel_Image,\n                            style: {\n                                width: \"100%\",\n                                height: \"100%\"\n                            },\n                            width: 500,\n                            height: 500,\n                            alt: carousel_Image\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col carousel_text_box\",\n                        style: {\n                            backgroundColor: getColor\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"30%\",\n                                    position: \"relative\",\n                                    color: \"white\"\n                                },\n                                children: carousel_tittle\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"text-center\",\n                                style: {\n                                    top: \"35%\",\n                                    position: \"relative\",\n                                    color: \"white\"\n                                },\n                                children: carousel_description\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Featured\"\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row my-3\",\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                },\n                children: data.slice(0, 12).map((element, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-3 my-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"#\",\n                            onClick: ()=>refirect_to_post(element.slug),\n                            style: {\n                                textDecoration: \"none\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"Blogcard\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"Blogcard-image\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            loading: \"lazy\",\n                                            src: element.image,\n                                            width: 330,\n                                            height: 170,\n                                            className: \"card-img-top\",\n                                            alt: element.blogtitle\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    class: \"Blogcard-title\",\n                                                    children: element.blogtitle.slice(0, 50)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                    lineNumber: 91,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"d\", {}, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        class: \"Blogcard-body\",\n                                                        children: \"Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec magna tristique, non lobortis.\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                        lineNumber: 95,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 18\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    class: \"Blogcard_footer\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        class: \"by-name\",\n                                                        children: element.author\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                        lineNumber: 100,\n                                                        columnNumber: 46\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                            lineNumber: 84,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/category.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Category, \"2RCSCq4Lakz4t+MMXWen3cT60FI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Category;\nCategory.requireNavbarAndFooter = true;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);\nvar _c;\n$RefreshReg$(_c, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RW1CLGdCQUFnQjs0QkFBTztzQ0FDNUYsNEVBQUN0QjtnQ0FBSXVCLE9BQU07O2tEQUNULDhEQUFDdkI7d0NBQUl1QixPQUFNO2tEQUNYLDRFQUFDOUMsbURBQUtBOzRDQUFDK0MsU0FBUTs0Q0FBT3RCLEtBQUtlLFFBQVFRLEtBQUs7NENBQUVyQixPQUFPOzRDQUFLQyxRQUFROzRDQUFLSixXQUFVOzRDQUFlSyxLQUFLVyxRQUFRUyxTQUFTOzs7Ozs7Ozs7OztrREFFbEgsOERBQUMxQjs7MERBQ0QsOERBQUNBOzBEQUNELDRFQUFDMkI7b0RBQUVKLE9BQU07OERBQWtCTixRQUFRUyxTQUFTLENBQUNYLEtBQUssQ0FBQyxHQUFFOzs7Ozs7Ozs7OzswREFFdEQsOERBQUNmOztrRUFDQSw4REFBQzRCOzs7OztrRUFDRCw4REFBQ0Q7d0RBQUVKLE9BQU07a0VBQWdCOzs7Ozs7Ozs7Ozs7MERBSXpCLDhEQUFDdkI7MERBQ0QsNEVBQUMyQjtvREFBRUosT0FBTTs4REFBa0IsNEVBQUNNO3dEQUFLTixPQUFNO2tFQUFXTixRQUFRYSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBakJsQ1o7Ozs7Ozs7Ozs7OztBQTRCaEQ7R0FwR1N0Qzs7UUFFUUYsa0RBQVNBOzs7S0FGakJFO0FBc0dUQSxTQUFTbUQsc0JBQXNCLEdBQUcsSUFBSTs7QUFDdEMsK0RBQWVuRCxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FydGljbGVzL2NhdGVnb3J5LmpzPzliZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5cblxuXG5cbmZ1bmN0aW9uIENhdGVnb3J5KHsgZGF0YSB9KSB7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2dldENhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShyb3V0ZXIucXVlcnkuY2F0ZWdvcnkpXG4gIGNvbnN0IFtjYXJvdXNlbF90aXR0bGUsIHNldENhcm91c2VsX3RpdHRsZV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbY2Fyb3VzZWxfZGVzY3JpcHRpb24sIHNldENhcm91c2VsX2Rlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtnZXRDb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCIjMDRBMTIzXCIpXG4gIGNvbnN0IFtjYXJvdXNlbF9JbWFnZSwgc2V0Q2Fyb3VzZWxfSW1hZ2VdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgY2F0ZWdvcnkgPSByb3V0ZXIucXVlcnkuY2F0ZWdvcnlcblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIHNldENhdGVnb3J5KGNhdGVnb3J5KVxuICAgIGlmIChjYXRlZ29yeSA9PSBcIk51dHJpdGlvblwiKSB7XG4gICAgICBzZXRDYXJvdXNlbF90aXR0bGUoXCJQdXNoaW5nIFlvdXIgTGltaXRzXCIpXG4gICAgICBzZXRDYXJvdXNlbF9kZXNjcmlwdGlvbihcIlJlZ3VsYXIgZXhlcmNpc2UgaW1wcm92ZXMgcGh5c2ljYWwgZml0bmVzcywgYm9vc3RzIG1vb2QsIGFuZCByZWR1Y2VzIHRoZSByaXNrIG9mIGNocm9uaWMgZGlzZWFzZXNcIilcbiAgICAgIHNldENvbG9yKFwiIzA0QTEyM1wiKVxuICAgICAgc2V0Q2Fyb3VzZWxfSW1hZ2UoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy80NzYxNjYzL3BleGVscy1waG90by00NzYxNjYzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTEyNjAmaD03NTAmZHByPTJcIilcbiAgICB9XG4gICAgZWxzZSBpZiAoY2F0ZWdvcnkgPT0gXCJGaXRuZXNzXCIpIHtcbiAgICAgIHNldENhcm91c2VsX3RpdHRsZShcIkVhdGluZyBXZWxsIGZvciBMaWZlXCIpXG4gICAgICBzZXRDYXJvdXNlbF9kZXNjcmlwdGlvbihcIk1haW50YWluaW5nIGEgaGVhbHRoeSBsaWZlc3R5bGUgaXMgY3J1Y2lhbCBmb3Igb3ZlcmFsbCB3ZWxsLWJlaW5nIGFuZCBsb25nZXZpdHlcIilcbiAgICAgIHNldENvbG9yKFwiI0EyNzIwMlwiKVxuICAgICAgc2V0Q2Fyb3VzZWxfSW1hZ2UoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yODczNTQvcGV4ZWxzLXBob3RvLTI4NzM1NC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIpXG4gICAgfVxuICAgIGVsc2UgaWYgKGNhdGVnb3J5ID09IFwiSGVhbHRoXCIpIHtcbiAgICAgIHNldENhcm91c2VsX3RpdHRsZShcIlRoZSBQb3dlciBvZiBTZWxmLUNhcmVcIilcbiAgICAgIHNldENhcm91c2VsX2Rlc2NyaXB0aW9uKFwiTGl2aW5nIHdlbGwgaW52b2x2ZXMgbWFraW5nIGhlYWx0aHkgY2hvaWNlcyBmb3IgYSBmdWxmaWxsaW5nIGFuZCBiYWxhbmNlZCBsaWZlXCIpXG4gICAgICBzZXRDb2xvcihcIiMwNDNEQTFcIilcbiAgICAgIHNldENhcm91c2VsX0ltYWdlKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTkxNjgyMS9wZXhlbHMtcGhvdG8tMTkxNjgyMS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0Q2Fyb3VzZWxfdGl0dGxlKFwiWW9nYSBmb3IgU3RyZXNzIFJlbGllZlwiKVxuICAgICAgc2V0Q2Fyb3VzZWxfZGVzY3JpcHRpb24oXCJSZWd1bGFyIHByYWN0aWNlIG9mIHlvZ2EgY2FuIGhlbHAgaW1wcm92ZSBmbGV4aWJpbGl0eSwgYmFsYW5jZSwgYW5kIHN0cmVuZ3RoXCIpXG4gICAgICBzZXRDb2xvcihcIiM0QzAwOTlcIilcbiAgICAgIHNldENhcm91c2VsX0ltYWdlKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNDA1NjUzNS9wZXhlbHMtcGhvdG8tNDA1NjUzNS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz0xMjYwJmg9NzUwJmRwcj0yXCIpXG4gICAgfVxuXG5cbiAgfSwgW3JvdXRlci5xdWVyeS5jYXRlZ29yeV0pXG5cbiAgY29uc3QgcmVmaXJlY3RfdG9fcG9zdCA9IChibG9nX3NsdWcpID0+IHtcbiAgICByb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogJy9hcnRpY2xlcy9Qb3N0JyxcbiAgICAgIHF1ZXJ5OiB7IGJsb2dfc2x1ZzogYmxvZ19zbHVnIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4ge2NhdGVnb3J5fTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXktNSc+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93ICc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2Nhcm91c2VsX0ltYWdlfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9IGFsdD17Y2Fyb3VzZWxfSW1hZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sIGNhcm91c2VsX3RleHRfYm94JyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGdldENvbG9yIH19PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBzdHlsZT17eyB0b3A6IFwiMzAlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGNvbG9yOiBcIndoaXRlXCIgfX0+e2Nhcm91c2VsX3RpdHRsZX08L2gxPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9J3RleHQtY2VudGVyJyBzdHlsZT17eyB0b3A6IFwiMzUlXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGNvbG9yOiBcIndoaXRlXCIgfX0+e2Nhcm91c2VsX2Rlc2NyaXB0aW9ufTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBmbGV4LXdyYXAgICc+ICovfVxuICAgICAgICA8aDE+RmVhdHVyZWQ8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IG15LTMnIHN0eWxlPXt7ZGlzcGxheTonZmxleCcsanVzdGlmeUNvbnRlbnQ6J2NlbnRlcid9fT5cbiAgICAgICAgICB7ZGF0YS5zbGljZSgwLCAxMikubWFwKChlbGVtZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC0zIG15LTMnIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPScjJyBvbkNsaWNrPXsoKSA9PiByZWZpcmVjdF90b19wb3N0KGVsZW1lbnQuc2x1Zyl9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiQmxvZ2NhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJCbG9nY2FyZC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIGxvYWRpbmc9J2xhenknIHNyYz17ZWxlbWVudC5pbWFnZX0gd2lkdGg9ezMzMH0gaGVpZ2h0PXsxNzB9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD17ZWxlbWVudC5ibG9ndGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJCbG9nY2FyZC10aXRsZVwiPntlbGVtZW50LmJsb2d0aXRsZS5zbGljZSgwLDUwKX08L3A+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGQ+PC9kPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJCbG9nY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIE51bGxhbSBhYyB0cmlzdGlxdWUgbnVsbGEsIGF0IGNvbnZhbGxpcyBxdWFtLiBJbnRlZ2VyIGNvbnNlY3RldHVyIG1pIG5lYyBtYWduYSB0cmlzdGlxdWUsIG5vbiBsb2JvcnRpcy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiQmxvZ2NhcmRfZm9vdGVyXCI+PHNwYW4gY2xhc3M9XCJieS1uYW1lXCI+e2VsZW1lbnQuYXV0aG9yfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICB7LyogPC9kaXY+ICovfVxuICAgIDwvPlxuICApXG59XG5cbkNhdGVnb3J5LnJlcXVpcmVOYXZiYXJBbmRGb290ZXIgPSB0cnVlO1xuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcblxuICB0cnkge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnkgfSA9IGNvbnRleHQucXVlcnk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIlgtQXBpLUtleVwiLCBcIjY3MDZkNmViLWU2YWUtNDhhZS1hZDgyLTllNGMwYWM1MGU5NlwiKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAxL2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YCwge1xuICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgIHRpbWVvdXQ6IDAsXG5cbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YSB9IH1cbiAgfVxuICBjYXRjaCAoZXJyb3IpIHtcblxuICAgIHJldHVybiB7IHByb3BzOiB7fSB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkltYWdlIiwidXNlUm91dGVyIiwiSGVhZCIsIkNhdGVnb3J5IiwiZGF0YSIsInJvdXRlciIsImdldENhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJxdWVyeSIsImNhdGVnb3J5IiwiY2Fyb3VzZWxfdGl0dGxlIiwic2V0Q2Fyb3VzZWxfdGl0dGxlIiwiY2Fyb3VzZWxfZGVzY3JpcHRpb24iLCJzZXRDYXJvdXNlbF9kZXNjcmlwdGlvbiIsImdldENvbG9yIiwic2V0Q29sb3IiLCJjYXJvdXNlbF9JbWFnZSIsInNldENhcm91c2VsX0ltYWdlIiwicmVmaXJlY3RfdG9fcG9zdCIsImJsb2dfc2x1ZyIsInB1c2giLCJwYXRobmFtZSIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImJhY2tncm91bmRDb2xvciIsImgxIiwidG9wIiwicG9zaXRpb24iLCJjb2xvciIsImg1IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Iiwic2xpY2UiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJocmVmIiwib25DbGljayIsInNsdWciLCJ0ZXh0RGVjb3JhdGlvbiIsImNsYXNzIiwibG9hZGluZyIsImltYWdlIiwiYmxvZ3RpdGxlIiwicCIsImQiLCJzcGFuIiwiYXV0aG9yIiwicmVxdWlyZU5hdmJhckFuZEZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/articles/category.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/articles/Navbar.js":
/*!**********************************!*\
  !*** ./pages/articles/Navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n// jest.mock('next/router', () => require('next-router-mock'));\nfunction Navbar() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const onNavbarClick = (category)=>{\n        router.push({\n            pathname: \"/articles/category\",\n            query: {\n                category\n            }\n        });\n    };\n    const seachBar = ()=>{\n        router.push({\n            pathname: \"/articles/Searchbar\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"navbar navbar-expand-lg fixed-top \",\n            style: {\n                backgroundColor: \"#ebe8e8\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/favicon.ico\",\n                                width: 25\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"navbar-brand mx-2\",\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Brownmen\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 56\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"navbar-toggler\",\n                        type: \"button\",\n                        \"data-bs-toggle\": \"collapse\",\n                        \"data-bs-target\": \"#navbarSupportedContent\",\n                        \"aria-controls\": \"navbarSupportedContent\",\n                        \"aria-expanded\": \"false\",\n                        \"aria-label\": \"Toggle navigation\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"navbar-toggler-icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"collapse navbar-collapse\",\n                        id: \"navbarSupportedContent\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"nav-item\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            className: \"nav-link  mx-2 my-3\",\n                                            \"aria-current\": \"page\",\n                                            onClick: ()=>onNavbarClick(\"Nutrition\"),\n                                            href: \"#\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Nutrition\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 127\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"nav-item\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            className: \"nav-link mx-2 my-3\",\n                                            href: \"#\",\n                                            onClick: ()=>onNavbarClick(\"Fitness\"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Fitness\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 104\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"nav-item\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            className: \"nav-link mx-2 my-3\",\n                                            href: \"#\",\n                                            onClick: ()=>onNavbarClick(\"Health\"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Health\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 103\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"nav-item\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            className: \"nav-link mx-2 my-3\",\n                                            href: \"#\",\n                                            onClick: ()=>onNavbarClick(\"Yoga\"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Yoga\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 101\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-outline-success\",\n                                onClick: seachBar,\n                                type: \"submit\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"Search\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 90\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/abhijeetkumar/Desktop/Brownmen/client/pages/articles/Navbar.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Navbar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcnRpY2xlcy9OYXZiYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO0FBQ1c7QUFHdkMsK0RBQStEO0FBQy9ELFNBQVNFLFNBQVM7O0lBQ2hCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixNQUFNRyxnQkFBZ0IsQ0FBQ0MsV0FBYTtRQUNsQ0YsT0FBT0csSUFBSSxDQUFDO1lBQ1ZDLFVBQVU7WUFDVkMsT0FBTztnQkFBRUg7WUFBUztRQUNwQjtJQUNGO0lBQ0EsTUFBTUksV0FBVSxJQUFJO1FBQ2xCTixPQUFPRyxJQUFJLENBQUM7WUFDVkMsVUFBVTtRQUNaO0lBQ0Y7SUFFQSxxQkFDRTtrQkFFRSw0RUFBQ0c7WUFBSUMsV0FBVTtZQUFxQ0MsT0FBTztnQkFBRUMsaUJBQWlCO1lBQVM7c0JBQ3JGLDRFQUFDQztnQkFBSUgsV0FBVTs7a0NBQ2IsOERBQUNHOzswQ0FDQyw4REFBQ0M7Z0NBQUlDLEtBQUk7Z0NBQWVDLE9BQU87Ozs7OzswQ0FDakMsOERBQUNqQixrREFBSUE7Z0NBQUNXLFdBQVU7Z0NBQW9CTyxNQUFLOzBDQUFJLDRFQUFDQzs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRWhELDhEQUFDQzt3QkFBT1QsV0FBVTt3QkFBaUJVLE1BQUs7d0JBQVNDLGtCQUFlO3dCQUFXQyxrQkFBZTt3QkFBMEJDLGlCQUFjO3dCQUF5QkMsaUJBQWM7d0JBQVFDLGNBQVc7a0NBQzFMLDRFQUFDQzs0QkFBS2hCLFdBQVU7Ozs7Ozs7Ozs7O2tDQUVsQiw4REFBQ0c7d0JBQUlILFdBQVU7d0JBQTJCaUIsSUFBRzs7MENBQzNDLDhEQUFDQztnQ0FBR2xCLFdBQVU7O2tEQUNaLDhEQUFDbUI7d0NBQUduQixXQUFVO2tEQUNaLDRFQUFDWCxrREFBSUE7NENBQUNXLFdBQVU7NENBQXNCb0IsZ0JBQWE7NENBQU9DLFNBQVMsSUFBTTVCLGNBQWM7NENBQWNjLE1BQUs7c0RBQUksNEVBQUNDOzBEQUFFOzs7Ozs7Ozs7Ozs7Ozs7O2tEQUVuSCw4REFBQ1c7d0NBQUduQixXQUFVO2tEQUNaLDRFQUFDWCxrREFBSUE7NENBQUNXLFdBQVU7NENBQXFCTyxNQUFLOzRDQUFJYyxTQUFTLElBQU01QixjQUFjO3NEQUFZLDRFQUFDZTswREFBRTs7Ozs7Ozs7Ozs7Ozs7OztrREFFNUYsOERBQUNXO3dDQUFHbkIsV0FBVTtrREFDWiw0RUFBQ1gsa0RBQUlBOzRDQUFDVyxXQUFVOzRDQUFxQk8sTUFBSzs0Q0FBSWMsU0FBUyxJQUFNNUIsY0FBYztzREFBVyw0RUFBQ2U7MERBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBRTNGLDhEQUFDVzt3Q0FBR25CLFdBQVU7a0RBQ1osNEVBQUNYLGtEQUFJQTs0Q0FBQ1csV0FBVTs0Q0FBcUJPLE1BQUs7NENBQUljLFNBQVMsSUFBTTVCLGNBQWM7c0RBQVMsNEVBQUNlOzBEQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUczRiw4REFBQ0M7Z0NBQU9ULFdBQVU7Z0NBQTBCcUIsU0FBU3ZCO2dDQUFVWSxNQUFLOzBDQUFTLDRFQUFDRjs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUY7R0FqRFNqQjs7UUFDUUQsa0RBQVNBOzs7S0FEakJDO0FBbURULCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FydGljbGVzL05hdmJhci5qcz80ZGNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuLy8gamVzdC5tb2NrKCduZXh0L3JvdXRlcicsICgpID0+IHJlcXVpcmUoJ25leHQtcm91dGVyLW1vY2snKSk7XG5mdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3Qgb25OYXZiYXJDbGljayA9IChjYXRlZ29yeSkgPT4ge1xuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiAnL2FydGljbGVzL2NhdGVnb3J5JyxcbiAgICAgIHF1ZXJ5OiB7IGNhdGVnb3J5IH1cbiAgICB9KVxuICB9XG4gIGNvbnN0IHNlYWNoQmFyID0oKT0+e1xuICAgIHJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiAnL2FydGljbGVzL1NlYXJjaGJhcidcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIGZpeGVkLXRvcCBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ViZThlOFwifX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Zhdmljb24uaWNvXCIgd2lkdGg9ezI1fS8+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kIG14LTJcIiBocmVmPVwiL1wiPjxiPkJyb3dubWVuPC9iPjwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG14LWF1dG8gbWItMiBtYi1sZy0wIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmsgIG14LTIgbXktM1wiIGFyaWEtY3VycmVudD1cInBhZ2VcIiBvbkNsaWNrPXsoKSA9PiBvbk5hdmJhckNsaWNrKFwiTnV0cml0aW9uXCIpfSBocmVmPVwiI1wiPjxiPk51dHJpdGlvbjwvYj48L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rIG14LTIgbXktM1wiIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gb25OYXZiYXJDbGljayhcIkZpdG5lc3NcIil9PjxiPkZpdG5lc3M8L2I+PC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGluayBteC0yIG15LTNcIiBocmVmPVwiI1wiIG9uQ2xpY2s9eygpID0+IG9uTmF2YmFyQ2xpY2soXCJIZWFsdGhcIil9PjxiPkhlYWx0aDwvYj48L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rIG14LTIgbXktM1wiIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gb25OYXZiYXJDbGljayhcIllvZ2FcIil9PjxiPllvZ2E8L2I+PC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIiBvbkNsaWNrPXtzZWFjaEJhcn0gdHlwZT1cInN1Ym1pdFwiPjxiPlNlYXJjaDwvYj48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUm91dGVyIiwiTmF2YmFyIiwicm91dGVyIiwib25OYXZiYXJDbGljayIsImNhdGVnb3J5IiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJzZWFjaEJhciIsIm5hdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZGl2IiwiaW1nIiwic3JjIiwid2lkdGgiLCJocmVmIiwiYiIsImJ1dHRvbiIsInR5cGUiLCJkYXRhLWJzLXRvZ2dsZSIsImRhdGEtYnMtdGFyZ2V0IiwiYXJpYS1jb250cm9scyIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWxhYmVsIiwic3BhbiIsImlkIiwidWwiLCJsaSIsImFyaWEtY3VycmVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/articles/Navbar.js\n"));

/***/ })

});
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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.dynamicCardDisplay:hover{\\n transform: translateY(-5px);\\n}\\n\\n.dynamicCardText{\\n  color: black;\\n  \\n}\\n.boxImage{\\n  width: 400px;\\n  left: 50%;\\n \\n} \\n.carousel_text{\\n  color:\\\"red\\\";\\n  text-align:\\\"start\\\";\\n}\\n\\n.row {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-direction: row;\\n  \\n}\\n.space{\\n  margin-top: 7%;\\n}\\n.search_Heading{\\n  text-align: center;\\n  position:\\\"relative\\\";\\n  text-align: center;\\n  margin-top: 100px;\\n  \\n}\\n.search_box{\\n  justify-content: center;\\n  text-align: center;\\n  height: 50px;\\n  border-top: none;\\n  border-left: none;\\n  border-right: none;\\n   border-bottom: 1px solid gray;\\n width: 100%;\\n  max-width: 100vw; \\n  \\n}\\n\\n.col {\\n  margin: 0;\\n  padding: 0;\\n}\\n.box{\\n\\nmax-width: 1000px;\\nwidth: 100%;\\n\\n}\\n.carousel_index{\\n  position:\\\"relative\\\";\\n  text-align: center;\\n  margin-top: 100px;\\n}\\n\\n\\n@media (max-width: 976px) {\\n  .card-columns {\\n    column-count: 0;\\n  }\\n  .navbar-brand{\\n    left: 50%;\\n  }\\n  .space{\\n    margin-top: 10%;\\n  }\\n  .row {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    height:  100%;\\n  }\\n  .col {\\n    flex: 1 0 100%;\\n    margin: 0;\\n    padding: 0;\\n    height: 100%;\\n    width: 100%;\\n    max-height:max-content;\\n   \\n  }\\n  .search_Heading{\\n    position:\\\"relative\\\";\\n    text-align: center;\\n   \\n   \\n  }\\n  \\n}\\n\\n.fa {\\n  padding: 10px;\\n  font-size: 20px;\\n  width: 50px;\\n  text-align: center;\\n  text-decoration: none;\\n  margin: 5px 2px;\\n  height: 35px;\\n}\\n\\n.fa:hover {\\n    opacity: 0.7;\\n}\\n\\n.fa-facebook {\\n  background: #3B5998;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-twitter {\\n  background: #55ACEE;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-google {\\n\\n  background: #dd4b39;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-linkedin {\\n  background: #007bb5;\\n  color: white;\\n  border-radius: 10px;\\n}\\n.card {\\n  --font-color: #323232;\\n  --bg-color: #e0e0e0;\\n  width: 300px;\\n  height: 400px;\\n  border-radius: 20px;\\n  background: var(--bg-color);\\n  box-shadow: -9px 9px 18px #5a5a5a,\\n              9px -9px 18px #ffffff;\\n  display: flex;\\n  flex-direction: column;\\n  transition: .4s;\\n  position: relative;\\n \\n}\\n\\n.card:hover {\\n  transform: scale(1.02);\\n  box-shadow: 0px 0px 10px 2px #5a5a5a;\\n}\\n.card:hover {\\n  transform: scale(1.02);\\n  box-shadow: 0px 0px 10px 2px #5a5a5a;\\n}\\n\\n.card__img {\\n  width: 100%;\\n  max-height: 100%;\\n  object-fit: cover;\\n  border-radius: 20px 20px 0 0;\\n  /* background-color: blueviolet; */\\n}\\n\\n.card__descr-wrapper {\\n  padding: 15px;\\n  display: grid;\\n}\\n\\n.card__title {\\n  color: var(--font-color);\\n  text-align: center;\\n  margin-bottom: 15px;\\n  font-weight: 900;\\n  font-size: 16px;\\n}\\n\\n.card__descr {\\n  color: var(--font-color);\\n}\\n\\n.svg {\\n  width: 25px;\\n  height: 25px;\\n  transform: translateY(25%);\\n  fill: var(--font-color);\\n}\\n\\n.card__links {\\n  margin-top: 10px;\\n  display: flex;\\n  /* flex-direction: column; */\\n  justify-content: space-between;\\n  align-self: flex-end;\\n}\\n\\n.card__links .link {\\n  color: var(--font-color);\\n  font-weight: 600;\\n  font-size: 15px;\\n  text-decoration: none;\\n}\\n\\n.card__links .link:hover {\\n  text-decoration: underline;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\";AACA;CACC,2BAA2B;AAC5B;;AAEA;EACE,YAAY;;AAEd;AACA;EACE,YAAY;EACZ,SAAS;;AAEX;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;EACb,mBAAmB;;AAErB;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;;AAEnB;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;GACjB,6BAA6B;CAC/B,WAAW;EACV,gBAAgB;;AAElB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;AACA;;AAEA,iBAAiB;AACjB,WAAW;;AAEX;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;;AAGA;EACE;IACE,eAAe;EACjB;EACA;IACE,SAAS;EACX;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,aAAa;EACf;EACA;IACE,cAAc;IACd,SAAS;IACT,UAAU;IACV,YAAY;IACZ,WAAW;IACX,sBAAsB;;EAExB;EACA;IACE,mBAAmB;IACnB,kBAAkB;;;EAGpB;;AAEF;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,YAAY;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B;mCACiC;EACjC,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,kBAAkB;;AAEpB;;AAEA;EACE,sBAAsB;EACtB,oCAAoC;AACtC;AACA;EACE,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,4BAA4B;EAC5B,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,4BAA4B;EAC5B,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B\",\"sourcesContent\":[\"\\n.dynamicCardDisplay:hover{\\n transform: translateY(-5px);\\n}\\n\\n.dynamicCardText{\\n  color: black;\\n  \\n}\\n.boxImage{\\n  width: 400px;\\n  left: 50%;\\n \\n} \\n.carousel_text{\\n  color:\\\"red\\\";\\n  text-align:\\\"start\\\";\\n}\\n\\n.row {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-direction: row;\\n  \\n}\\n.space{\\n  margin-top: 7%;\\n}\\n.search_Heading{\\n  text-align: center;\\n  position:\\\"relative\\\";\\n  text-align: center;\\n  margin-top: 100px;\\n  \\n}\\n.search_box{\\n  justify-content: center;\\n  text-align: center;\\n  height: 50px;\\n  border-top: none;\\n  border-left: none;\\n  border-right: none;\\n   border-bottom: 1px solid gray;\\n width: 100%;\\n  max-width: 100vw; \\n  \\n}\\n\\n.col {\\n  margin: 0;\\n  padding: 0;\\n}\\n.box{\\n\\nmax-width: 1000px;\\nwidth: 100%;\\n\\n}\\n.carousel_index{\\n  position:\\\"relative\\\";\\n  text-align: center;\\n  margin-top: 100px;\\n}\\n\\n\\n@media (max-width: 976px) {\\n  .card-columns {\\n    column-count: 0;\\n  }\\n  .navbar-brand{\\n    left: 50%;\\n  }\\n  .space{\\n    margin-top: 10%;\\n  }\\n  .row {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    height:  100%;\\n  }\\n  .col {\\n    flex: 1 0 100%;\\n    margin: 0;\\n    padding: 0;\\n    height: 100%;\\n    width: 100%;\\n    max-height:max-content;\\n   \\n  }\\n  .search_Heading{\\n    position:\\\"relative\\\";\\n    text-align: center;\\n   \\n   \\n  }\\n  \\n}\\n\\n.fa {\\n  padding: 10px;\\n  font-size: 20px;\\n  width: 50px;\\n  text-align: center;\\n  text-decoration: none;\\n  margin: 5px 2px;\\n  height: 35px;\\n}\\n\\n.fa:hover {\\n    opacity: 0.7;\\n}\\n\\n.fa-facebook {\\n  background: #3B5998;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-twitter {\\n  background: #55ACEE;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-google {\\n\\n  background: #dd4b39;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-linkedin {\\n  background: #007bb5;\\n  color: white;\\n  border-radius: 10px;\\n}\\n.card {\\n  --font-color: #323232;\\n  --bg-color: #e0e0e0;\\n  width: 300px;\\n  height: 400px;\\n  border-radius: 20px;\\n  background: var(--bg-color);\\n  box-shadow: -9px 9px 18px #5a5a5a,\\n              9px -9px 18px #ffffff;\\n  display: flex;\\n  flex-direction: column;\\n  transition: .4s;\\n  position: relative;\\n \\n}\\n\\n.card:hover {\\n  transform: scale(1.02);\\n  box-shadow: 0px 0px 10px 2px #5a5a5a;\\n}\\n.card:hover {\\n  transform: scale(1.02);\\n  box-shadow: 0px 0px 10px 2px #5a5a5a;\\n}\\n\\n.card__img {\\n  width: 100%;\\n  max-height: 100%;\\n  object-fit: cover;\\n  border-radius: 20px 20px 0 0;\\n  /* background-color: blueviolet; */\\n}\\n\\n.card__descr-wrapper {\\n  padding: 15px;\\n  display: grid;\\n}\\n\\n.card__title {\\n  color: var(--font-color);\\n  text-align: center;\\n  margin-bottom: 15px;\\n  font-weight: 900;\\n  font-size: 16px;\\n}\\n\\n.card__descr {\\n  color: var(--font-color);\\n}\\n\\n.svg {\\n  width: 25px;\\n  height: 25px;\\n  transform: translateY(25%);\\n  fill: var(--font-color);\\n}\\n\\n.card__links {\\n  margin-top: 10px;\\n  display: flex;\\n  /* flex-direction: column; */\\n  justify-content: space-between;\\n  align-self: flex-end;\\n}\\n\\n.card__links .link {\\n  color: var(--font-color);\\n  font-weight: 600;\\n  font-size: 15px;\\n  text-decoration: none;\\n}\\n\\n.card__links .link:hover {\\n  text-decoration: underline;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHNFQUFzRSwrQkFBK0IsR0FBRyxxQkFBcUIsaUJBQWlCLE9BQU8sWUFBWSxpQkFBaUIsY0FBYyxPQUFPLGlCQUFpQixrQkFBa0IseUJBQXlCLEdBQUcsVUFBVSxjQUFjLGVBQWUsa0JBQWtCLHdCQUF3QixPQUFPLFNBQVMsbUJBQW1CLEdBQUcsa0JBQWtCLHVCQUF1QiwwQkFBMEIsdUJBQXVCLHNCQUFzQixPQUFPLGNBQWMsNEJBQTRCLHVCQUF1QixpQkFBaUIscUJBQXFCLHNCQUFzQix1QkFBdUIsbUNBQW1DLGVBQWUsc0JBQXNCLE9BQU8sVUFBVSxjQUFjLGVBQWUsR0FBRyxPQUFPLHNCQUFzQixjQUFjLEtBQUssa0JBQWtCLDBCQUEwQix1QkFBdUIsc0JBQXNCLEdBQUcsaUNBQWlDLG1CQUFtQixzQkFBc0IsS0FBSyxrQkFBa0IsZ0JBQWdCLEtBQUssV0FBVyxzQkFBc0IsS0FBSyxVQUFVLG9CQUFvQiwwQkFBMEIsc0JBQXNCLG9CQUFvQixLQUFLLFVBQVUscUJBQXFCLGdCQUFnQixpQkFBaUIsbUJBQW1CLGtCQUFrQiw2QkFBNkIsVUFBVSxvQkFBb0IsNEJBQTRCLHlCQUF5QixlQUFlLE9BQU8sU0FBUyxrQkFBa0Isb0JBQW9CLGdCQUFnQix1QkFBdUIsMEJBQTBCLG9CQUFvQixpQkFBaUIsR0FBRyxlQUFlLG1CQUFtQixHQUFHLGtCQUFrQix3QkFBd0IsaUJBQWlCLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsaUJBQWlCLHdCQUF3QixHQUFHLGdCQUFnQiwwQkFBMEIsaUJBQWlCLHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsaUJBQWlCLHdCQUF3QixHQUFHLFNBQVMsMEJBQTBCLHdCQUF3QixpQkFBaUIsa0JBQWtCLHdCQUF3QixnQ0FBZ0MsNEVBQTRFLGtCQUFrQiwyQkFBMkIsb0JBQW9CLHVCQUF1QixNQUFNLGlCQUFpQiwyQkFBMkIseUNBQXlDLEdBQUcsZUFBZSwyQkFBMkIseUNBQXlDLEdBQUcsZ0JBQWdCLGdCQUFnQixxQkFBcUIsc0JBQXNCLGlDQUFpQyxxQ0FBcUMsS0FBSywwQkFBMEIsa0JBQWtCLGtCQUFrQixHQUFHLGtCQUFrQiw2QkFBNkIsdUJBQXVCLHdCQUF3QixxQkFBcUIsb0JBQW9CLEdBQUcsa0JBQWtCLDZCQUE2QixHQUFHLFVBQVUsZ0JBQWdCLGlCQUFpQiwrQkFBK0IsNEJBQTRCLEdBQUcsa0JBQWtCLHFCQUFxQixrQkFBa0IsK0JBQStCLHFDQUFxQyx5QkFBeUIsR0FBRyx3QkFBd0IsNkJBQTZCLHFCQUFxQixvQkFBb0IsMEJBQTBCLEdBQUcsOEJBQThCLCtCQUErQixHQUFHLFNBQVMsK0VBQStFLEtBQUssWUFBWSxPQUFPLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxNQUFNLFlBQVksWUFBWSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLGFBQWEsTUFBTSxLQUFLLFlBQVksZUFBZSxPQUFPLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxPQUFPLFdBQVcsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksc0RBQXNELCtCQUErQixHQUFHLHFCQUFxQixpQkFBaUIsT0FBTyxZQUFZLGlCQUFpQixjQUFjLE9BQU8saUJBQWlCLGtCQUFrQix5QkFBeUIsR0FBRyxVQUFVLGNBQWMsZUFBZSxrQkFBa0Isd0JBQXdCLE9BQU8sU0FBUyxtQkFBbUIsR0FBRyxrQkFBa0IsdUJBQXVCLDBCQUEwQix1QkFBdUIsc0JBQXNCLE9BQU8sY0FBYyw0QkFBNEIsdUJBQXVCLGlCQUFpQixxQkFBcUIsc0JBQXNCLHVCQUF1QixtQ0FBbUMsZUFBZSxzQkFBc0IsT0FBTyxVQUFVLGNBQWMsZUFBZSxHQUFHLE9BQU8sc0JBQXNCLGNBQWMsS0FBSyxrQkFBa0IsMEJBQTBCLHVCQUF1QixzQkFBc0IsR0FBRyxpQ0FBaUMsbUJBQW1CLHNCQUFzQixLQUFLLGtCQUFrQixnQkFBZ0IsS0FBSyxXQUFXLHNCQUFzQixLQUFLLFVBQVUsb0JBQW9CLDBCQUEwQixzQkFBc0Isb0JBQW9CLEtBQUssVUFBVSxxQkFBcUIsZ0JBQWdCLGlCQUFpQixtQkFBbUIsa0JBQWtCLDZCQUE2QixVQUFVLG9CQUFvQiw0QkFBNEIseUJBQXlCLGVBQWUsT0FBTyxTQUFTLGtCQUFrQixvQkFBb0IsZ0JBQWdCLHVCQUF1QiwwQkFBMEIsb0JBQW9CLGlCQUFpQixHQUFHLGVBQWUsbUJBQW1CLEdBQUcsa0JBQWtCLHdCQUF3QixpQkFBaUIsd0JBQXdCLEdBQUcsaUJBQWlCLHdCQUF3QixpQkFBaUIsd0JBQXdCLEdBQUcsZ0JBQWdCLDBCQUEwQixpQkFBaUIsd0JBQXdCLEdBQUcsa0JBQWtCLHdCQUF3QixpQkFBaUIsd0JBQXdCLEdBQUcsU0FBUywwQkFBMEIsd0JBQXdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLGdDQUFnQyw0RUFBNEUsa0JBQWtCLDJCQUEyQixvQkFBb0IsdUJBQXVCLE1BQU0saUJBQWlCLDJCQUEyQix5Q0FBeUMsR0FBRyxlQUFlLDJCQUEyQix5Q0FBeUMsR0FBRyxnQkFBZ0IsZ0JBQWdCLHFCQUFxQixzQkFBc0IsaUNBQWlDLHFDQUFxQyxLQUFLLDBCQUEwQixrQkFBa0Isa0JBQWtCLEdBQUcsa0JBQWtCLDZCQUE2Qix1QkFBdUIsd0JBQXdCLHFCQUFxQixvQkFBb0IsR0FBRyxrQkFBa0IsNkJBQTZCLEdBQUcsVUFBVSxnQkFBZ0IsaUJBQWlCLCtCQUErQiw0QkFBNEIsR0FBRyxrQkFBa0IscUJBQXFCLGtCQUFrQiwrQkFBK0IscUNBQXFDLHlCQUF5QixHQUFHLHdCQUF3Qiw2QkFBNkIscUJBQXFCLG9CQUFvQiwwQkFBMEIsR0FBRyw4QkFBOEIsK0JBQStCLEdBQUcscUJBQXFCO0FBQ3ZtUTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWxzLmNzcz8wNGRkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZHluYW1pY0NhcmREaXNwbGF5OmhvdmVye1xcbiB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbi5keW5hbWljQ2FyZFRleHR7XFxuICBjb2xvcjogYmxhY2s7XFxuICBcXG59XFxuLmJveEltYWdle1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbGVmdDogNTAlO1xcbiBcXG59IFxcbi5jYXJvdXNlbF90ZXh0e1xcbiAgY29sb3I6XFxcInJlZFxcXCI7XFxuICB0ZXh0LWFsaWduOlxcXCJzdGFydFxcXCI7XFxufVxcblxcbi5yb3cge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgXFxufVxcbi5zcGFjZXtcXG4gIG1hcmdpbi10b3A6IDclO1xcbn1cXG4uc2VhcmNoX0hlYWRpbmd7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjpcXFwicmVsYXRpdmVcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxuICBcXG59XFxuLnNlYXJjaF9ib3h7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcXG4gd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMHZ3OyBcXG4gIFxcbn1cXG5cXG4uY29sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5ib3h7XFxuXFxubWF4LXdpZHRoOiAxMDAwcHg7XFxud2lkdGg6IDEwMCU7XFxuXFxufVxcbi5jYXJvdXNlbF9pbmRleHtcXG4gIHBvc2l0aW9uOlxcXCJyZWxhdGl2ZVxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk3NnB4KSB7XFxuICAuY2FyZC1jb2x1bW5zIHtcXG4gICAgY29sdW1uLWNvdW50OiAwO1xcbiAgfVxcbiAgLm5hdmJhci1icmFuZHtcXG4gICAgbGVmdDogNTAlO1xcbiAgfVxcbiAgLnNwYWNle1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICB9XFxuICAucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBoZWlnaHQ6ICAxMDAlO1xcbiAgfVxcbiAgLmNvbCB7XFxuICAgIGZsZXg6IDEgMCAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6bWF4LWNvbnRlbnQ7XFxuICAgXFxuICB9XFxuICAuc2VhcmNoX0hlYWRpbmd7XFxuICAgIHBvc2l0aW9uOlxcXCJyZWxhdGl2ZVxcXCI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICBcXG4gICBcXG4gIH1cXG4gIFxcbn1cXG5cXG4uZmEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luOiA1cHggMnB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4uZmE6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5mYS1mYWNlYm9vayB7XFxuICBiYWNrZ3JvdW5kOiAjM0I1OTk4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZhLXR3aXR0ZXIge1xcbiAgYmFja2dyb3VuZDogIzU1QUNFRTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mYS1nb29nbGUge1xcblxcbiAgYmFja2dyb3VuZDogI2RkNGIzOTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mYS1saW5rZWRpbiB7XFxuICBiYWNrZ3JvdW5kOiAjMDA3YmI1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNhcmQge1xcbiAgLS1mb250LWNvbG9yOiAjMzIzMjMyO1xcbiAgLS1iZy1jb2xvcjogI2UwZTBlMDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogLTlweCA5cHggMThweCAjNWE1YTVhLFxcbiAgICAgICAgICAgICAgOXB4IC05cHggMThweCAjZmZmZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0cmFuc2l0aW9uOiAuNHM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuIFxcbn1cXG5cXG4uY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCAjNWE1YTVhO1xcbn1cXG4uY2FyZDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCAjNWE1YTVhO1xcbn1cXG5cXG4uY2FyZF9faW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7ICovXFxufVxcblxcbi5jYXJkX19kZXNjci13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uY2FyZF9fdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5jYXJkX19kZXNjciB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5zdmcge1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTtcXG4gIGZpbGw6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uY2FyZF9fbGlua3Mge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5jYXJkX19saW5rcyAubGluayB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uY2FyZF9fbGlua3MgLmxpbms6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7O0FBRVg7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtHQUNqQiw2QkFBNkI7Q0FDL0IsV0FBVztFQUNWLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCLFdBQVc7O0FBRVg7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7SUFDZCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCOztFQUV4QjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjs7O0VBR3BCOztBQUVGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0I7bUNBQ2lDO0VBQ2pDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuLmR5bmFtaWNDYXJkRGlzcGxheTpob3ZlcntcXG4gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5cXG4uZHluYW1pY0NhcmRUZXh0e1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgXFxufVxcbi5ib3hJbWFnZXtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gXFxufSBcXG4uY2Fyb3VzZWxfdGV4dHtcXG4gIGNvbG9yOlxcXCJyZWRcXFwiO1xcbiAgdGV4dC1hbGlnbjpcXFwic3RhcnRcXFwiO1xcbn1cXG5cXG4ucm93IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIFxcbn1cXG4uc3BhY2V7XFxuICBtYXJnaW4tdG9wOiA3JTtcXG59XFxuLnNlYXJjaF9IZWFkaW5ne1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246XFxcInJlbGF0aXZlXFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgXFxufVxcbi5zZWFyY2hfYm94e1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XFxuIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDB2dzsgXFxuICBcXG59XFxuXFxuLmNvbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uYm94e1xcblxcbm1heC13aWR0aDogMTAwMHB4O1xcbndpZHRoOiAxMDAlO1xcblxcbn1cXG4uY2Fyb3VzZWxfaW5kZXh7XFxuICBwb3NpdGlvbjpcXFwicmVsYXRpdmVcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NzZweCkge1xcbiAgLmNhcmQtY29sdW1ucyB7XFxuICAgIGNvbHVtbi1jb3VudDogMDtcXG4gIH1cXG4gIC5uYXZiYXItYnJhbmR7XFxuICAgIGxlZnQ6IDUwJTtcXG4gIH1cXG4gIC5zcGFjZXtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgfVxcbiAgLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgaGVpZ2h0OiAgMTAwJTtcXG4gIH1cXG4gIC5jb2wge1xcbiAgICBmbGV4OiAxIDAgMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0Om1heC1jb250ZW50O1xcbiAgIFxcbiAgfVxcbiAgLnNlYXJjaF9IZWFkaW5ne1xcbiAgICBwb3NpdGlvbjpcXFwicmVsYXRpdmVcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgXFxuICAgXFxuICB9XFxuICBcXG59XFxuXFxuLmZhIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbjogNXB4IDJweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuLmZhOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4uZmEtZmFjZWJvb2sge1xcbiAgYmFja2dyb3VuZDogIzNCNTk5ODtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mYS10d2l0dGVyIHtcXG4gIGJhY2tncm91bmQ6ICM1NUFDRUU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZmEtZ29vZ2xlIHtcXG5cXG4gIGJhY2tncm91bmQ6ICNkZDRiMzk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZmEtbGlua2VkaW4ge1xcbiAgYmFja2dyb3VuZDogIzAwN2JiNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jYXJkIHtcXG4gIC0tZm9udC1jb2xvcjogIzMyMzIzMjtcXG4gIC0tYmctY29sb3I6ICNlMGUwZTA7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IC05cHggOXB4IDE4cHggIzVhNWE1YSxcXG4gICAgICAgICAgICAgIDlweCAtOXB4IDE4cHggI2ZmZmZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiBcXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggIzVhNWE1YTtcXG59XFxuLmNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggIzVhNWE1YTtcXG59XFxuXFxuLmNhcmRfX2ltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0OyAqL1xcbn1cXG5cXG4uY2FyZF9fZGVzY3Itd3JhcHBlciB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmNhcmRfX3RpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uY2FyZF9fZGVzY3Ige1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uc3ZnIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1JSk7XFxuICBmaWxsOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmNhcmRfX2xpbmtzIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4uY2FyZF9fbGlua3MgLmxpbmsge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNhcmRfX2xpbmtzIC5saW5rOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css\n"));

/***/ })

});
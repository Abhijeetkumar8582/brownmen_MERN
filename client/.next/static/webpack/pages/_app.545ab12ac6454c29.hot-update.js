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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.dynamicCardDisplay:hover{\\n transform: translateY(-5px);\\n}\\n\\n.dynamicCardText{\\n  color: black;\\n  \\n}\\n.boxImage{\\n  width: 400px;\\n  left: 50%;\\n \\n} \\n.carousel_text{\\n  color:\\\"red\\\";\\n  text-align:\\\"start\\\";\\n}\\n\\n.row {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-direction: row;\\n  \\n}\\n.space{\\n  margin-top: 7%;\\n}\\n.search_Heading{\\n  text-align: center;\\n  position:\\\"relative\\\";\\n  text-align: center;\\n  margin-top: 100px;\\n  \\n}\\n.search_box{\\n  justify-content: center;\\n  text-align: center;\\n  height: 50px;\\n  border-top: none;\\n  border-left: none;\\n  border-right: none;\\n   border-bottom: 1px solid gray;\\n width: 100%;\\n  max-width: 100vw; \\n  \\n}\\n\\n.col {\\n  margin: 0;\\n  padding: 0;\\n}\\n.box{\\n\\nmax-width: 1000px;\\nwidth: 100%;\\n\\n}\\n.carousel_index{\\n  position:\\\"relative\\\";\\n  text-align: center;\\n  margin-top: 100px;\\n}\\n\\n\\n@media (max-width: 976px) {\\n  .card-columns {\\n    column-count: 0;\\n  }\\n  .navbar-brand{\\n    left: 50%;\\n  }\\n  .space{\\n    margin-top: 10%;\\n  }\\n  .row {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    height:  100%;\\n  }\\n  .col {\\n    flex: 1 0 100%;\\n    margin: 0;\\n    padding: 0;\\n    height: 100%;\\n    width: 100%;\\n    max-height:max-content;\\n   \\n  }\\n  .search_Heading{\\n    position:\\\"relative\\\";\\n    text-align: center;\\n   \\n   \\n  }\\n  \\n}\\n\\n.fa {\\n  padding: 10px;\\n  font-size: 20px;\\n  width: 50px;\\n  text-align: center;\\n  text-decoration: none;\\n  margin: 5px 2px;\\n  height: 35px;\\n}\\n\\n.fa:hover {\\n    opacity: 0.7;\\n}\\n\\n.fa-facebook {\\n  background: #3B5998;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-twitter {\\n  background: #55ACEE;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-google {\\n\\n  background: #dd4b39;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-linkedin {\\n  background: #007bb5;\\n  color: white;\\n  border-radius: 10px;\\n}\\n.card {\\n  --font-color: #323232;\\n  --bg-color: #e0e0e0;\\n  width: 300px;\\n  height: 400px;\\n  border-radius: 20px;\\n  background: var(--bg-color);\\n  box-shadow: -9px 9px 18px #5a5a5a,\\n              9px -9px 18px #ffffff;\\n  display: flex;\\n  flex-direction: column;\\n  transition: .4s;\\n  position: relative;\\n  /* filter: none; */\\n}\\n\\n.card:hover {\\n  transform: scale(1.02);\\n  box-shadow: 0px 0px 10px 2px #5a5a5a;\\n  filter: blur(5px);\\n}\\n.container_box:hover{\\n  filter: blur(5px); /* Adjust the blur amount as needed */\\n  transition: filter 0.3s ease; /* Add a smooth transition effect */\\n\\n}\\n\\n\\n\\n\\n.card__img {\\n  width: 100%;\\n  max-height: 100%;\\n  object-fit: cover;\\n  border-radius: 20px 20px 0 0;\\n  /* background-color: blueviolet; */\\n}\\n\\n.card__descr-wrapper {\\n  padding: 15px;\\n  display: grid;\\n}\\n\\n.card__title {\\n  color: var(--font-color);\\n  text-align: center;\\n  margin-bottom: 15px;\\n  font-weight: 900;\\n  font-size: 16px;\\n}\\n\\n.card__descr {\\n  color: var(--font-color);\\n}\\n\\n.svg {\\n  width: 25px;\\n  height: 25px;\\n  transform: translateY(25%);\\n  fill: var(--font-color);\\n}\\n\\n.card__links {\\n  margin-top: 10px;\\n  display: flex;\\n  /* flex-direction: column; */\\n  justify-content: space-between;\\n  align-self: flex-end;\\n}\\n\\n.card__links .link {\\n  color: var(--font-color);\\n  font-weight: 600;\\n  font-size: 15px;\\n  text-decoration: none;\\n}\\n\\n.card__links .link:hover {\\n  text-decoration: underline;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\";AACA;CACC,2BAA2B;AAC5B;;AAEA;EACE,YAAY;;AAEd;AACA;EACE,YAAY;EACZ,SAAS;;AAEX;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;EACb,mBAAmB;;AAErB;AACA;EACE,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;;AAEnB;AACA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;GACjB,6BAA6B;CAC/B,WAAW;EACV,gBAAgB;;AAElB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;AACA;;AAEA,iBAAiB;AACjB,WAAW;;AAEX;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;;AAGA;EACE;IACE,eAAe;EACjB;EACA;IACE,SAAS;EACX;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,aAAa;EACf;EACA;IACE,cAAc;IACd,SAAS;IACT,UAAU;IACV,YAAY;IACZ,WAAW;IACX,sBAAsB;;EAExB;EACA;IACE,mBAAmB;IACnB,kBAAkB;;;EAGpB;;AAEF;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,YAAY;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B;mCACiC;EACjC,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,oCAAoC;EACpC,iBAAiB;AACnB;AACA;EACE,iBAAiB,EAAE,qCAAqC;EACxD,4BAA4B,EAAE,mCAAmC;;AAEnE;;;;;AAKA;EACE,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,4BAA4B;EAC5B,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,4BAA4B;EAC5B,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B\",\"sourcesContent\":[\"\\n.dynamicCardDisplay:hover{\\n transform: translateY(-5px);\\n}\\n\\n.dynamicCardText{\\n  color: black;\\n  \\n}\\n.boxImage{\\n  width: 400px;\\n  left: 50%;\\n \\n} \\n.carousel_text{\\n  color:\\\"red\\\";\\n  text-align:\\\"start\\\";\\n}\\n\\n.row {\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  flex-direction: row;\\n  \\n}\\n.space{\\n  margin-top: 7%;\\n}\\n.search_Heading{\\n  text-align: center;\\n  position:\\\"relative\\\";\\n  text-align: center;\\n  margin-top: 100px;\\n  \\n}\\n.search_box{\\n  justify-content: center;\\n  text-align: center;\\n  height: 50px;\\n  border-top: none;\\n  border-left: none;\\n  border-right: none;\\n   border-bottom: 1px solid gray;\\n width: 100%;\\n  max-width: 100vw; \\n  \\n}\\n\\n.col {\\n  margin: 0;\\n  padding: 0;\\n}\\n.box{\\n\\nmax-width: 1000px;\\nwidth: 100%;\\n\\n}\\n.carousel_index{\\n  position:\\\"relative\\\";\\n  text-align: center;\\n  margin-top: 100px;\\n}\\n\\n\\n@media (max-width: 976px) {\\n  .card-columns {\\n    column-count: 0;\\n  }\\n  .navbar-brand{\\n    left: 50%;\\n  }\\n  .space{\\n    margin-top: 10%;\\n  }\\n  .row {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    height:  100%;\\n  }\\n  .col {\\n    flex: 1 0 100%;\\n    margin: 0;\\n    padding: 0;\\n    height: 100%;\\n    width: 100%;\\n    max-height:max-content;\\n   \\n  }\\n  .search_Heading{\\n    position:\\\"relative\\\";\\n    text-align: center;\\n   \\n   \\n  }\\n  \\n}\\n\\n.fa {\\n  padding: 10px;\\n  font-size: 20px;\\n  width: 50px;\\n  text-align: center;\\n  text-decoration: none;\\n  margin: 5px 2px;\\n  height: 35px;\\n}\\n\\n.fa:hover {\\n    opacity: 0.7;\\n}\\n\\n.fa-facebook {\\n  background: #3B5998;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-twitter {\\n  background: #55ACEE;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-google {\\n\\n  background: #dd4b39;\\n  color: white;\\n  border-radius: 10px;\\n}\\n\\n.fa-linkedin {\\n  background: #007bb5;\\n  color: white;\\n  border-radius: 10px;\\n}\\n.card {\\n  --font-color: #323232;\\n  --bg-color: #e0e0e0;\\n  width: 300px;\\n  height: 400px;\\n  border-radius: 20px;\\n  background: var(--bg-color);\\n  box-shadow: -9px 9px 18px #5a5a5a,\\n              9px -9px 18px #ffffff;\\n  display: flex;\\n  flex-direction: column;\\n  transition: .4s;\\n  position: relative;\\n  /* filter: none; */\\n}\\n\\n.card:hover {\\n  transform: scale(1.02);\\n  box-shadow: 0px 0px 10px 2px #5a5a5a;\\n  filter: blur(5px);\\n}\\n.container_box:hover{\\n  filter: blur(5px); /* Adjust the blur amount as needed */\\n  transition: filter 0.3s ease; /* Add a smooth transition effect */\\n\\n}\\n\\n\\n\\n\\n.card__img {\\n  width: 100%;\\n  max-height: 100%;\\n  object-fit: cover;\\n  border-radius: 20px 20px 0 0;\\n  /* background-color: blueviolet; */\\n}\\n\\n.card__descr-wrapper {\\n  padding: 15px;\\n  display: grid;\\n}\\n\\n.card__title {\\n  color: var(--font-color);\\n  text-align: center;\\n  margin-bottom: 15px;\\n  font-weight: 900;\\n  font-size: 16px;\\n}\\n\\n.card__descr {\\n  color: var(--font-color);\\n}\\n\\n.svg {\\n  width: 25px;\\n  height: 25px;\\n  transform: translateY(25%);\\n  fill: var(--font-color);\\n}\\n\\n.card__links {\\n  margin-top: 10px;\\n  display: flex;\\n  /* flex-direction: column; */\\n  justify-content: space-between;\\n  align-self: flex-end;\\n}\\n\\n.card__links .link {\\n  color: var(--font-color);\\n  font-weight: 600;\\n  font-size: 15px;\\n  text-decoration: none;\\n}\\n\\n.card__links .link:hover {\\n  text-decoration: underline;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHNFQUFzRSwrQkFBK0IsR0FBRyxxQkFBcUIsaUJBQWlCLE9BQU8sWUFBWSxpQkFBaUIsY0FBYyxPQUFPLGlCQUFpQixrQkFBa0IseUJBQXlCLEdBQUcsVUFBVSxjQUFjLGVBQWUsa0JBQWtCLHdCQUF3QixPQUFPLFNBQVMsbUJBQW1CLEdBQUcsa0JBQWtCLHVCQUF1QiwwQkFBMEIsdUJBQXVCLHNCQUFzQixPQUFPLGNBQWMsNEJBQTRCLHVCQUF1QixpQkFBaUIscUJBQXFCLHNCQUFzQix1QkFBdUIsbUNBQW1DLGVBQWUsc0JBQXNCLE9BQU8sVUFBVSxjQUFjLGVBQWUsR0FBRyxPQUFPLHNCQUFzQixjQUFjLEtBQUssa0JBQWtCLDBCQUEwQix1QkFBdUIsc0JBQXNCLEdBQUcsaUNBQWlDLG1CQUFtQixzQkFBc0IsS0FBSyxrQkFBa0IsZ0JBQWdCLEtBQUssV0FBVyxzQkFBc0IsS0FBSyxVQUFVLG9CQUFvQiwwQkFBMEIsc0JBQXNCLG9CQUFvQixLQUFLLFVBQVUscUJBQXFCLGdCQUFnQixpQkFBaUIsbUJBQW1CLGtCQUFrQiw2QkFBNkIsVUFBVSxvQkFBb0IsNEJBQTRCLHlCQUF5QixlQUFlLE9BQU8sU0FBUyxrQkFBa0Isb0JBQW9CLGdCQUFnQix1QkFBdUIsMEJBQTBCLG9CQUFvQixpQkFBaUIsR0FBRyxlQUFlLG1CQUFt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Y2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzA0ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5keW5hbWljQ2FyZERpc3BsYXk6aG92ZXJ7XFxuIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuXFxuLmR5bmFtaWNDYXJkVGV4dHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIFxcbn1cXG4uYm94SW1hZ2V7XFxuICB3aWR0aDogNDAwcHg7XFxuICBsZWZ0OiA1MCU7XFxuIFxcbn0gXFxuLmNhcm91c2VsX3RleHR7XFxuICBjb2xvcjpcXFwicmVkXFxcIjtcXG4gIHRleHQtYWxpZ246XFxcInN0YXJ0XFxcIjtcXG59XFxuXFxuLnJvdyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBcXG59XFxuLnNwYWNle1xcbiAgbWFyZ2luLXRvcDogNyU7XFxufVxcbi5zZWFyY2hfSGVhZGluZ3tcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOlxcXCJyZWxhdGl2ZVxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIFxcbn1cXG4uc2VhcmNoX2JveHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbiB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwdnc7IFxcbiAgXFxufVxcblxcbi5jb2wge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmJveHtcXG5cXG5tYXgtd2lkdGg6IDEwMDBweDtcXG53aWR0aDogMTAwJTtcXG5cXG59XFxuLmNhcm91c2VsX2luZGV4e1xcbiAgcG9zaXRpb246XFxcInJlbGF0aXZlXFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTc2cHgpIHtcXG4gIC5jYXJkLWNvbHVtbnMge1xcbiAgICBjb2x1bW4tY291bnQ6IDA7XFxuICB9XFxuICAubmF2YmFyLWJyYW5ke1xcbiAgICBsZWZ0OiA1MCU7XFxuICB9XFxuICAuc3BhY2V7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gIH1cXG4gIC5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogIDEwMCU7XFxuICB9XFxuICAuY29sIHtcXG4gICAgZmxleDogMSAwIDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDptYXgtY29udGVudDtcXG4gICBcXG4gIH1cXG4gIC5zZWFyY2hfSGVhZGluZ3tcXG4gICAgcG9zaXRpb246XFxcInJlbGF0aXZlXFxcIjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIFxcbiAgIFxcbiAgfVxcbiAgXFxufVxcblxcbi5mYSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDVweCAycHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5mYTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmZhLWZhY2Vib29rIHtcXG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZmEtdHdpdHRlciB7XFxuICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZhLWdvb2dsZSB7XFxuXFxuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZhLWxpbmtlZGluIHtcXG4gIGJhY2tncm91bmQ6ICMwMDdiYjU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZCB7XFxuICAtLWZvbnQtY29sb3I6ICMzMjMyMzI7XFxuICAtLWJnLWNvbG9yOiAjZTBlMGUwO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XFxuICBib3gtc2hhZG93OiAtOXB4IDlweCAxOHB4ICM1YTVhNWEsXFxuICAgICAgICAgICAgICA5cHggLTlweCAxOHB4ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIGZpbHRlcjogbm9uZTsgKi9cXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggIzVhNWE1YTtcXG4gIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG4uY29udGFpbmVyX2JveDpob3ZlcntcXG4gIGZpbHRlcjogYmx1cig1cHgpOyAvKiBBZGp1c3QgdGhlIGJsdXIgYW1vdW50IGFzIG5lZWRlZCAqL1xcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTsgLyogQWRkIGEgc21vb3RoIHRyYW5zaXRpb24gZWZmZWN0ICovXFxuXFxufVxcblxcblxcblxcblxcbi5jYXJkX19pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDsgKi9cXG59XFxuXFxuLmNhcmRfX2Rlc2NyLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jYXJkX190aXRsZSB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNhcmRfX2Rlc2NyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLnN2ZyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xcbiAgZmlsbDogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5jYXJkX19saW5rcyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmNhcmRfX2xpbmtzIC5saW5rIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jYXJkX19saW5rcyAubGluazpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7RUFDRSxZQUFZOztBQUVkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osU0FBUzs7QUFFWDtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjs7QUFFbkI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0dBQ2pCLDZCQUE2QjtDQUMvQixXQUFXO0VBQ1YsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakIsV0FBVzs7QUFFWDtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7RUFDZjtFQUNBO0lBQ0UsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7O0VBRXhCO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCOzs7RUFHcEI7O0FBRUY7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQjttQ0FDaUM7RUFDakMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUIsRUFBRSxxQ0FBcUM7RUFDeEQsNEJBQTRCLEVBQUUsbUNBQW1DOztBQUVuRTs7Ozs7QUFLQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbi5keW5hbWljQ2FyZERpc3BsYXk6aG92ZXJ7XFxuIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuXFxuLmR5bmFtaWNDYXJkVGV4dHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIFxcbn1cXG4uYm94SW1hZ2V7XFxuICB3aWR0aDogNDAwcHg7XFxuICBsZWZ0OiA1MCU7XFxuIFxcbn0gXFxuLmNhcm91c2VsX3RleHR7XFxuICBjb2xvcjpcXFwicmVkXFxcIjtcXG4gIHRleHQtYWxpZ246XFxcInN0YXJ0XFxcIjtcXG59XFxuXFxuLnJvdyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBcXG59XFxuLnNwYWNle1xcbiAgbWFyZ2luLXRvcDogNyU7XFxufVxcbi5zZWFyY2hfSGVhZGluZ3tcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOlxcXCJyZWxhdGl2ZVxcXCI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gIFxcbn1cXG4uc2VhcmNoX2JveHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xcbiB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwdnc7IFxcbiAgXFxufVxcblxcbi5jb2wge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmJveHtcXG5cXG5tYXgtd2lkdGg6IDEwMDBweDtcXG53aWR0aDogMTAwJTtcXG5cXG59XFxuLmNhcm91c2VsX2luZGV4e1xcbiAgcG9zaXRpb246XFxcInJlbGF0aXZlXFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTc2cHgpIHtcXG4gIC5jYXJkLWNvbHVtbnMge1xcbiAgICBjb2x1bW4tY291bnQ6IDA7XFxuICB9XFxuICAubmF2YmFyLWJyYW5ke1xcbiAgICBsZWZ0OiA1MCU7XFxuICB9XFxuICAuc3BhY2V7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gIH1cXG4gIC5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGhlaWdodDogIDEwMCU7XFxuICB9XFxuICAuY29sIHtcXG4gICAgZmxleDogMSAwIDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDptYXgtY29udGVudDtcXG4gICBcXG4gIH1cXG4gIC5zZWFyY2hfSGVhZGluZ3tcXG4gICAgcG9zaXRpb246XFxcInJlbGF0aXZlXFxcIjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgIFxcbiAgIFxcbiAgfVxcbiAgXFxufVxcblxcbi5mYSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW46IDVweCAycHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5mYTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLmZhLWZhY2Vib29rIHtcXG4gIGJhY2tncm91bmQ6ICMzQjU5OTg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZmEtdHdpdHRlciB7XFxuICBiYWNrZ3JvdW5kOiAjNTVBQ0VFO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZhLWdvb2dsZSB7XFxuXFxuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZhLWxpbmtlZGluIHtcXG4gIGJhY2tncm91bmQ6ICMwMDdiYjU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZCB7XFxuICAtLWZvbnQtY29sb3I6ICMzMjMyMzI7XFxuICAtLWJnLWNvbG9yOiAjZTBlMGUwO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XFxuICBib3gtc2hhZG93OiAtOXB4IDlweCAxOHB4ICM1YTVhNWEsXFxuICAgICAgICAgICAgICA5cHggLTlweCAxOHB4ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRyYW5zaXRpb246IC40cztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIGZpbHRlcjogbm9uZTsgKi9cXG59XFxuXFxuLmNhcmQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAycHggIzVhNWE1YTtcXG4gIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG4uY29udGFpbmVyX2JveDpob3ZlcntcXG4gIGZpbHRlcjogYmx1cig1cHgpOyAvKiBBZGp1c3QgdGhlIGJsdXIgYW1vdW50IGFzIG5lZWRlZCAqL1xcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuM3MgZWFzZTsgLyogQWRkIGEgc21vb3RoIHRyYW5zaXRpb24gZWZmZWN0ICovXFxuXFxufVxcblxcblxcblxcblxcbi5jYXJkX19pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDsgKi9cXG59XFxuXFxuLmNhcmRfX2Rlc2NyLXdyYXBwZXIge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jYXJkX190aXRsZSB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmNhcmRfX2Rlc2NyIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLnN2ZyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xcbiAgZmlsbDogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5jYXJkX19saW5rcyB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmNhcmRfX2xpbmtzIC5saW5rIHtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jYXJkX19saW5rcyAubGluazpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/globals.css\n"));

/***/ })

});
(self["webpackChunktypescript_blueprint"] = self["webpackChunktypescript_blueprint"] || []).push([["main"],{

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/code/index.ts":
/*!***************************!*\
  !*** ./src/code/index.ts ***!
  \***************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', ready);
function ready() {
    var prelaodEl = document.querySelector('.full-preloader');
    var logoHeader = document.getElementById('header-logo');
    logoHeader.style.opacity = '0';
    setTimeout(function () {
        prelaodEl.classList.add('fade-out');
        logoHeader.style.opacity = '1';
        logoHeader.classList.add('logo-start-anim');
    }, 1000);
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
// code
__webpack_require__(/*! ./code/index */ "./src/code/index.ts");
// libs
__webpack_require__(/*! material-icons/iconfont/material-icons.css */ "./node_modules/material-icons/iconfont/material-icons.css");


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["chunk_material-icons"], () => (__webpack_exec__("./src/index.ts")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2JsdWVwcmludC8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz8yODIyIiwid2VicGFjazovL3R5cGVzY3JpcHRfYmx1ZXByaW50Ly4vc3JjL2NvZGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9ibHVlcHJpbnQvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQ0FBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUVyRCxTQUFTLEtBQUs7SUFDWixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDNUQsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxRCxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDL0IsVUFBVSxDQUFDO1FBQ1QsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQy9CLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNYRCwwRUFBNkI7QUFDN0IsT0FBTztBQUNQLCtEQUFzQjtBQUN0QixPQUFPO0FBQ1AsbUlBQW9EIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJlYWR5KTtcclxuXHJcbmZ1bmN0aW9uIHJlYWR5KCkge1xyXG4gIGNvbnN0IHByZWxhb2RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mdWxsLXByZWxvYWRlcicpO1xyXG4gIGNvbnN0IGxvZ29IZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWxvZ28nKTtcclxuICBsb2dvSGVhZGVyLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBwcmVsYW9kRWwuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcclxuICAgIGxvZ29IZWFkZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIGxvZ29IZWFkZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1zdGFydC1hbmltJyk7XHJcbiAgfSwgMTAwMCk7XHJcbn1cclxuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcclxuLy8gY29kZVxyXG5pbXBvcnQgJy4vY29kZS9pbmRleCc7XHJcbi8vIGxpYnNcclxuaW1wb3J0ICdtYXRlcmlhbC1pY29ucy9pY29uZm9udC9tYXRlcmlhbC1pY29ucy5jc3MnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
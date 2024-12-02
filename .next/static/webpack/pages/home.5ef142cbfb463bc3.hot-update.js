/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/components/home/user-profile-image-button.tsx":
/*!***********************************************************!*\
  !*** ./src/components/home/user-profile-image-button.tsx ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./src/pages/home.tsx":
/*!****************************!*\
  !*** ./src/pages/home.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _components_home_image_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/image-buttons */ \"./src/components/home/image-buttons.tsx\");\n/* harmony import */ var _components_home_notifications_image_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/notifications-image-button */ \"./src/components/home/notifications-image-button.tsx\");\n/* harmony import */ var _components_home_search_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home/search-input */ \"./src/components/home/search-input.tsx\");\n/* harmony import */ var _components_home_settings_image_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/home/settings-image-button */ \"./src/components/home/settings-image-button.tsx\");\n/* harmony import */ var _components_home_user_profile_image_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/home/user-profile-image-button */ \"./src/components/home/user-profile-image-button.tsx\");\n/* harmony import */ var _components_home_user_profile_image_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_home_user_profile_image_button__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Micro\\\\Documents\\\\vscode\\\\jotape-frontend\\\\src\\\\pages\\\\home.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_search_input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    height: \"h-10 sm:h-12 md:h-14 lg:h-16\",\n                    width: \"w-52 sm:w-64 md:w-72 lg:w-80\",\n                    placeholder: \"Buscar...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Micro\\\\Documents\\\\vscode\\\\jotape-frontend\\\\src\\\\pages\\\\home.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_image_buttons__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_notifications_image_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            height: \"h-4 sm:h-5 md:h-6 lg:h-7\",\n                            width: \"w-4 sm:w-5 md:w-6 lg:w-7\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Micro\\\\Documents\\\\vscode\\\\jotape-frontend\\\\src\\\\pages\\\\home.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_home_user_profile_image_button__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            height: \"h-4 sm:h-5 md:h-6 lg:h-7\",\n                            width: \"w-4 sm:w-5 md:w-6 lg:w-7\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Micro\\\\Documents\\\\vscode\\\\jotape-frontend\\\\src\\\\pages\\\\home.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_home_settings_image_button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            height: \"h-4 sm:h-5 md:h-6 lg:h-7\",\n                            width: \"w-4 sm:w-5 md:w-6 lg:w-7\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Micro\\\\Documents\\\\vscode\\\\jotape-frontend\\\\src\\\\pages\\\\home.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Micro\\\\Documents\\\\vscode\\\\jotape-frontend\\\\src\\\\pages\\\\home.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Micro\\\\Documents\\\\vscode\\\\jotape-frontend\\\\src\\\\pages\\\\home.tsx\",\n            lineNumber: 11,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = Home;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDa0I7QUFDeUI7QUFDM0I7QUFDaUI7QUFDTztBQUVqRixTQUFTTTtJQUNOLHFCQUNHO2tCQUNFLDRFQUFDTiwwREFBTUE7OzhCQUNMLDhEQUFDTzs7Ozs7OEJBRUQsOERBQUNKLHFFQUFXQTtvQkFDVkssUUFBTztvQkFDUEMsT0FBTTtvQkFDTkMsYUFBWTs7Ozs7OzhCQUdkLDhEQUFDVCxzRUFBWUE7O3NDQUNYLDhEQUFDQyxtRkFBd0JBOzRCQUN2Qk0sUUFBTzs0QkFDUEMsT0FBTTs7Ozs7O3NDQUVSLDhEQUFDSixtRkFBc0JBOzRCQUNyQkcsUUFBTzs0QkFDUEMsT0FBTTs7Ozs7O3NDQUVSLDhEQUFDTCw4RUFBbUJBOzRCQUNsQkksUUFBTzs0QkFDUEMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQjtLQTdCU0g7QUErQlQsaUVBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWljcm9cXERvY3VtZW50c1xcdnNjb2RlXFxqb3RhcGUtZnJvbnRlbmRcXHNyY1xccGFnZXNcXGhvbWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcclxuaW1wb3J0IEltYWdlQnV0dG9ucyBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL2ltYWdlLWJ1dHRvbnNcIlxyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ltYWdlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvbm90aWZpY2F0aW9ucy1pbWFnZS1idXR0b25cIlxyXG5pbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9tZS9zZWFyY2gtaW5wdXRcIlxyXG5pbXBvcnQgU2V0dGluZ3NJbWFnZUJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9ob21lL3NldHRpbmdzLWltYWdlLWJ1dHRvblwiXHJcbmltcG9ydCBVc2VyUHJvZmlsZUltYWdlQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvdXNlci1wcm9maWxlLWltYWdlLWJ1dHRvblwiXHJcblxyXG5mdW5jdGlvbiBIb21lKCl7XHJcbiAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcblxyXG4gICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgIGhlaWdodD1cImgtMTAgc206aC0xMiBtZDpoLTE0IGxnOmgtMTZcIlxyXG4gICAgICAgICAgICB3aWR0aD1cInctNTIgc206dy02NCBtZDp3LTcyIGxnOnctODBcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1c2Nhci4uLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICA8SW1hZ2VCdXR0b25zPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uc0ltYWdlQnV0dG9uXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiaC00IHNtOmgtNSBtZDpoLTYgbGc6aC03XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cInctNCBzbTp3LTUgbWQ6dy02IGxnOnctN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxVc2VyUHJvZmlsZUltYWdlQnV0dG9uXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiaC00IHNtOmgtNSBtZDpoLTYgbGc6aC03XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cInctNCBzbTp3LTUgbWQ6dy02IGxnOnctN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTZXR0aW5nc0ltYWdlQnV0dG9uXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiaC00IHNtOmgtNSBtZDpoLTYgbGc6aC03XCJcclxuICAgICAgICAgICAgICB3aWR0aD1cInctNCBzbTp3LTUgbWQ6dy02IGxnOnctN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvSW1hZ2VCdXR0b25zPlxyXG4gICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICA8Lz5cclxuICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbIkhlYWRlciIsIkltYWdlQnV0dG9ucyIsIk5vdGlmaWNhdGlvbnNJbWFnZUJ1dHRvbiIsIlNlYXJjaElucHV0IiwiU2V0dGluZ3NJbWFnZUJ1dHRvbiIsIlVzZXJQcm9maWxlSW1hZ2VCdXR0b24iLCJIb21lIiwiZGl2IiwiaGVpZ2h0Iiwid2lkdGgiLCJwbGFjZWhvbGRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/home.tsx\n"));

/***/ })

});
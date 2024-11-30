"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./src/pages/signup.tsx":
/*!******************************!*\
  !*** ./src/pages/signup.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/body */ \"./src/components/body.tsx\");\n/* harmony import */ var _components_form_form_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form/form-container */ \"./src/components/form/form-container.tsx\");\n/* harmony import */ var _components_form_inputs_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form/inputs-form */ \"./src/components/form/inputs-form.tsx\");\n/* harmony import */ var _components_form_sign_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form/sign-form */ \"./src/components/form/sign-form.tsx\");\n/* harmony import */ var _api_sign_up_request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/sign-up-request */ \"./src/api/sign-up-request.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SignUp() {\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSignUp = async ()=>{\n        setError(null);\n        if (!userData) return setError('User data is not available');\n        try {\n            await (0,_api_sign_up_request__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('URL', userData);\n        // eslint-disable-next-line @typescript-eslint/no-explicit-any\n        } catch (error) {\n            console.error('Erro no cadastro:', error);\n            setError(error.message || 'Signup failed');\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_body__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-inria-sans text-4xl leading-[77px] text-white\",\n                children: \"Cadastro de Usu\\xe1rios\"\n            }, void 0, false, {\n                fileName: \"/home/kauanag/Documentos/VSCode/jotape-frontend/jotape-frontend/src/pages/signup.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red-500 mb-4 text-center\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/home/kauanag/Documentos/VSCode/jotape-frontend/jotape-frontend/src/pages/signup.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_form_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_inputs_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        setUserData: setUserData\n                    }, void 0, false, {\n                        fileName: \"/home/kauanag/Documentos/VSCode/jotape-frontend/jotape-frontend/src/pages/signup.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_form_sign_form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        onClick: handleSignUp\n                    }, void 0, false, {\n                        fileName: \"/home/kauanag/Documentos/VSCode/jotape-frontend/jotape-frontend/src/pages/signup.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kauanag/Documentos/VSCode/jotape-frontend/jotape-frontend/src/pages/signup.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kauanag/Documentos/VSCode/jotape-frontend/jotape-frontend/src/pages/signup.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUp, \"dJ1TaR3fbyRBFkuyX2dfR4MWAb8=\");\n_c = SignUp;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2lnbnVwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDSztBQUN3QjtBQUNOO0FBQ0o7QUFFRDtBQUVsRCxTQUFTTTs7SUFDUCxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQWtCO0lBQzFELE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBZ0I7SUFFbEQsTUFBTVcsZUFBZTtRQUNuQkQsU0FBUztRQUVULElBQUksQ0FBQ0gsVUFBVSxPQUFPRyxTQUFTO1FBRS9CLElBQUk7WUFDRixNQUFNTCxnRUFBYUEsQ0FBQyxPQUFPRTtRQUM3Qiw4REFBOEQ7UUFDOUQsRUFBRSxPQUFPRSxPQUFZO1lBQ25CRyxRQUFRSCxLQUFLLENBQUMscUJBQXFCQTtZQUNuQ0MsU0FBU0QsTUFBTUksT0FBTyxJQUFJO1FBQzVCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1osd0RBQUlBOzswQkFDSCw4REFBQ2E7Z0JBQUdDLFdBQVU7MEJBQXFEOzs7Ozs7WUFJbEVOLHVCQUNDLDhEQUFDTztnQkFBSUQsV0FBVTswQkFDWk47Ozs7OzswQkFJTCw4REFBQ1AsdUVBQWFBOztrQ0FDWiw4REFBQ0Msb0VBQVVBO3dCQUFDSyxhQUFhQTs7Ozs7O2tDQUN6Qiw4REFBQ0osa0VBQVFBO3dCQUNQYSxTQUFTTjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5CO0dBdkNTTDtLQUFBQTtBQXlDVCxpRUFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsiL2hvbWUva2F1YW5hZy9Eb2N1bWVudG9zL1ZTQ29kZS9qb3RhcGUtZnJvbnRlbmQvam90YXBlLWZyb250ZW5kL3NyYy9wYWdlcy9zaWdudXAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm9keSBmcm9tICcuLi9jb21wb25lbnRzL2JvZHknXG5pbXBvcnQgRm9ybUNvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vZm9ybS1jb250YWluZXInXG5pbXBvcnQgSW5wdXRzRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vaW5wdXRzLWZvcm0nXG5pbXBvcnQgU2lnbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtL3NpZ24tZm9ybSdcbmltcG9ydCB7IFVzZXJEYXRhIH0gZnJvbSAnLi4vQHR5cGVzL3R5cGVzJ1xuaW1wb3J0IFNpZ25VcFJlcXVlc3QgZnJvbSAnLi4vYXBpL3NpZ24tdXAtcmVxdWVzdCdcblxuZnVuY3Rpb24gU2lnblVwKCkge1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlPFVzZXJEYXRhIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXG4gIGNvbnN0IGhhbmRsZVNpZ25VcCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRFcnJvcihudWxsKVxuXG4gICAgaWYgKCF1c2VyRGF0YSkgcmV0dXJuIHNldEVycm9yKCdVc2VyIGRhdGEgaXMgbm90IGF2YWlsYWJsZScpXG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgU2lnblVwUmVxdWVzdCgnVVJMJywgdXNlckRhdGEpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIG5vIGNhZGFzdHJvOicsIGVycm9yKVxuICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSB8fCAnU2lnbnVwIGZhaWxlZCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm9keT5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWlucmlhLXNhbnMgdGV4dC00eGwgbGVhZGluZy1bNzdweF0gdGV4dC13aGl0ZVwiPlxuICAgICAgICBDYWRhc3RybyBkZSBVc3XDoXJpb3NcbiAgICAgIDwvaDE+XG5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIG1iLTQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPEZvcm1Db250YWluZXI+XG4gICAgICAgIDxJbnB1dHNGb3JtIHNldFVzZXJEYXRhPXtzZXRVc2VyRGF0YX0gLz5cbiAgICAgICAgPFNpZ25Gb3JtIFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25VcH0gXG4gICAgICAgICAgXG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1Db250YWluZXI+XG4gICAgPC9Cb2R5PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25VcFxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQm9keSIsIkZvcm1Db250YWluZXIiLCJJbnB1dHNGb3JtIiwiU2lnbkZvcm0iLCJTaWduVXBSZXF1ZXN0IiwiU2lnblVwIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVTaWduVXAiLCJjb25zb2xlIiwibWVzc2FnZSIsImgxIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/signup.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/LoadSpinner.tsx":
/*!************************************!*\
  !*** ./components/LoadSpinner.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/action */ \"(app-pages-browser)/./app/action.ts\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"(app-pages-browser)/./node_modules/react-intersection-observer/index.mjs\");\n/* harmony import */ var _AnimeCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimeCard */ \"(app-pages-browser)/./components/AnimeCard.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nlet page = 2;\nfunction LoadSpinner() {\n    _s();\n    const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (inView) {\n            (0,_app_action__WEBPACK_IMPORTED_MODULE_1__.fetchAnime)(2).then((res)=>{\n                setData([\n                    ...data,\n                    ...res\n                ]);\n            });\n        }\n    }, [\n        inView,\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10\",\n                children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimeCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        anime: item,\n                        index: index\n                    }, item.id, false, {\n                        fileName: \"/Users/johnamores/Desktop/Development_Projects/project_anime/components/LoadSpinner.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/johnamores/Desktop/Development_Projects/project_anime/components/LoadSpinner.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex justify-center items-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: ref,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: \"./spinner.svg\",\n                        alt: \"spinner\",\n                        width: 56,\n                        height: 56,\n                        className: \"object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/johnamores/Desktop/Development_Projects/project_anime/components/LoadSpinner.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/johnamores/Desktop/Development_Projects/project_anime/components/LoadSpinner.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/johnamores/Desktop/Development_Projects/project_anime/components/LoadSpinner.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(LoadSpinner, \"DOMIwy/t6/LOA2kcJ+d5sVJYo4c=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\n_c = LoadSpinner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadSpinner);\nvar _c;\n$RefreshReg$(_c, \"LoadSpinner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTG9hZFNwaW5uZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFMEM7QUFDWjtBQUNjO0FBQ1c7QUFFbkI7QUFHcEMsSUFBSU0sT0FBTztBQUdYLFNBQVNDOztJQUNQLE1BQU0sQ0FBQ0MsS0FBS0MsT0FBTyxHQUFHTCxzRUFBU0E7SUFDL0IsTUFBTSxDQUFDTSxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFjLEVBQUU7SUFFaERELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU8sUUFBUTtZQUNWVCx1REFBVUEsQ0FBQyxHQUFHWSxJQUFJLENBQUMsQ0FBQ0M7Z0JBQ2hCRixRQUFRO3VCQUFJRDt1QkFBU0c7aUJBQUk7WUFDM0I7UUFDSjtJQUVGLEdBQUc7UUFBQ0o7UUFBUUM7S0FBSztJQUVqQixxQkFDRTs7MEJBQ0UsOERBQUNJO2dCQUFRQyxXQUFVOzBCQUNoQkwsS0FBS00sR0FBRyxDQUFDLENBQUNDLE1BQWlCQyxzQkFDMUIsOERBQUNiLGtEQUFTQTt3QkFBZWMsT0FBT0Y7d0JBQU1DLE9BQU9BO3VCQUE3QkQsS0FBS0csRUFBRTs7Ozs7Ozs7OzswQkFHM0IsOERBQUNOO2dCQUFRQyxXQUFVOzBCQUNqQiw0RUFBQ007b0JBQUliLEtBQUtBOzhCQUNSLDRFQUFDUCxrREFBS0E7d0JBQ0pxQixLQUFJO3dCQUNKQyxLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSVixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7R0FqQ1NSOztRQUNlSCxrRUFBU0E7OztLQUR4Qkc7QUFtQ1QsK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2FkU3Bpbm5lci50c3g/NGVjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBmZXRjaEFuaW1lIH0gZnJvbSAnQC9hcHAvYWN0aW9uJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcidcbmltcG9ydCB7IEFuaW1lUHJvcCB9IGZyb20gJy4vQW5pbWVDYXJkJztcbmltcG9ydCBBbmltZUNhcmQgZnJvbSAnLi9BbmltZUNhcmQnO1xuXG5cbmxldCBwYWdlID0gMjtcblxuXG5mdW5jdGlvbiBMb2FkU3Bpbm5lcigpIHtcbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxBbmltZVByb3BbXT4oW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5WaWV3KSB7XG4gICAgICBmZXRjaEFuaW1lKDIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHNldERhdGEoWy4uLmRhdGEsIC4uLnJlc10pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgfSwgW2luVmlldywgZGF0YV0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtNCBtZDpncmlkLWNvbHMtMyBzbTpncmlkLWNvbHMtMiBncmlkLWNvbHMtMSBnYXAtMTBcIj5cbiAgICAgICAge2RhdGEubWFwKChpdGVtOiBBbmltZVByb3AsIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICA8QW5pbWVDYXJkIGtleT17aXRlbS5pZH0gYW5pbWU9e2l0ZW19IGluZGV4PXtpbmRleH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGxcIj5cbiAgICAgICAgPGRpdiByZWY9e3JlZn0+XG4gICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgc3JjPVwiLi9zcGlubmVyLnN2Z1wiXG4gICAgICAgICAgICBhbHQ9XCJzcGlubmVyXCJcbiAgICAgICAgICAgIHdpZHRoPXs1Nn1cbiAgICAgICAgICAgIGhlaWdodD17NTZ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZFNwaW5uZXIiXSwibmFtZXMiOlsiZmV0Y2hBbmltZSIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VJblZpZXciLCJBbmltZUNhcmQiLCJwYWdlIiwiTG9hZFNwaW5uZXIiLCJyZWYiLCJpblZpZXciLCJkYXRhIiwic2V0RGF0YSIsInRoZW4iLCJyZXMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYW5pbWUiLCJpZCIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/LoadSpinner.tsx\n"));

/***/ })

});
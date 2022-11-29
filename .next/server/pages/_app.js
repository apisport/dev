"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 9084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./styles/images/icons/favicon.ico
/* harmony default export */ const favicon = ({"src":"/_next/static/media/favicon.0125ae22.ico","height":64,"width":64});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-helmet"
const external_react_helmet_namespaceObject = require("react-helmet");
var external_react_helmet_default = /*#__PURE__*/__webpack_require__.n(external_react_helmet_namespaceObject);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./layout/dev/LayoutDev.js







const LayoutDev = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_helmet_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js",
                        integrity: "undefined",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "../styles/bootstrap/js/bootstrap.min.js"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "ApiSport"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/ico.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navbar navbar-dark bg-dark shadow-sm",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                className: "navbar-brand d-flex align-items-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "Dev Mode"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "btn btn-outline text-white",
                                href: "/dev/home",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "btn btn-outline text-white",
                                href: "/",
                                children: "Logout"
                            })
                        ]
                    })
                })
            }),
            children,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_helmet_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js",
                        integrity: "undefined",
                        crossorigin: "anonymous"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "../styles/bootstrap/js/bootstrap.min.js"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const dev_LayoutDev = (LayoutDev);

;// CONCATENATED MODULE: ./pages/_app.js























function MyApp({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    if (router.pathname.startsWith('/')) {
        return /*#__PURE__*/ jsx_runtime_.jsx(dev_LayoutDev, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(RecoilRoot, {
            children: [
                " ",
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                " "
            ]
        });
    }
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5895,1664], () => (__webpack_exec__(9084)));
module.exports = __webpack_exports__;

})();
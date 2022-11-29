"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748];
exports.modules = {

/***/ 4171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js


const options = {
    providers: [
        google_default()({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },
            sessions: {
                jwt: true,
                maxAge: 30 * 24 * 60 * 60
            }
        }), 
    ],
    secret: "secret token"
};
/* harmony default export */ const _nextauth_ = ((req, res)=>external_next_auth_default()(req, res, options));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4171));
module.exports = __webpack_exports__;

})();
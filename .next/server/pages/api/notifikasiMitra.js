"use strict";
(() => {
var exports = {};
exports.id = 2631;
exports.ids = [2631];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
const { connectToDatabase  } = __webpack_require__(6198);

function createHash(input) {
    const md5sum = crypto__WEBPACK_IMPORTED_MODULE_0___default().createHash("md5");
    md5sum.update(Buffer.from(input));
    return md5sum.digest("hex");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    let { db  } = await connectToDatabase();
    if (req.method == "POST") {
        console.log(req.body);
        const subscriptionRequest = req.body;
        const subscriptionReqString = JSON.stringify(subscriptionRequest);
        const susbscriptionId = createHash(subscriptionReqString);
        await db.collection('tbl_notifikasi').insertOne({
            id: susbscriptionId,
            subscribe_req: subscriptionReqString
        });
        res.json({
            id: susbscriptionId
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(2970)));
module.exports = __webpack_exports__;

})();
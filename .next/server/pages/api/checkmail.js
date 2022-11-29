"use strict";
(() => {
var exports = {};
exports.id = 5730;
exports.ids = [5730];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 5970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection Transaksi
async function getProfil(req, res) {
    const { emailReq  } = req.query;
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        let user = await db.collection('user').find({
            email: emailReq
        }, {
            projection: {
                'email': 1
            }
        }).sort({
            idfavorit: -1
        }).toArray();
        let mitra = await db.collection('mitra').find({
            email: emailReq
        }, {
            projection: {
                'email': 1
            }
        }).sort({
            idfavorit: -1
        }).toArray();
        let mitraPending = await db.collection('mitraPending').find({
            email: emailReq
        }, {
            projection: {
                'email': 1
            }
        }).sort({
            idfavorit: -1
        }).toArray();
        let namaVenue = await db.collection('mitra').find({
            email: emailReq
        }, {
            projection: {
                'namaVenue': 1
            }
        }).sort({
            idfavorit: -1
        }).toArray();
        // return the posts
        // return the posts
        let hasil = {};
        hasil['user'] = user;
        hasil['mitra'] = mitra;
        hasil['mitraPending'] = mitraPending;
        hasil['namaVenue'] = namaVenue;
        return res.json({
            message: JSON.parse(JSON.stringify(hasil)),
            success: true
        });
    } catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false
        });
    }
}
// CRUD handler
async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case 'GET':
            {
                return getProfil(req, res);
            }
        case 'POST':
            {
                return addFavorit(req, res);
            }
        case 'PUT':
            {
                return updateFavorit(req, res);
            }
        case 'DELETE':
            {
                return deleteFavorit(req, res);
            }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(5970)));
module.exports = __webpack_exports__;

})();
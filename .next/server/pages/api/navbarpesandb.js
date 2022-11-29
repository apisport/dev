"use strict";
(() => {
var exports = {};
exports.id = 800;
exports.ids = [800];
exports.modules = {

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection Transaksi
async function getTransaksiUser(req, res) {
    const { emailReq  } = req.query;
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        let pending = await db.collection('transaksi').find({
            email: emailReq,
            status: 'pending'
        }, {
            projection: {
                'status': 1
            }
        }).sort({
            idfavorit: -1
        }).toArray();
        let diterima = await db.collection('transaksi').find({
            email: emailReq,
            status: {
                $ne: 'pending'
            }
        }, {
            projection: {
                'status': 1,
                'tglMain': 1
            }
        }).sort({
            idfavorit: -1
        }).toArray();
        let notifikasi = await db.collection('notifikasi').find({
            email: emailReq,
            status: {
                $ne: 'pending'
            }
        }, {
            projection: {
                'status': 1
            }
        }).sort({
            idfavorit: -1
        }).toArray();
        let notaBaru = [];
        for(let i = 0; i < diterima.length; i++){
            var now = moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date()); //todays date
            var end = moment__WEBPACK_IMPORTED_MODULE_1___default()(diterima[i].tglMain); // another date
            var duration = moment__WEBPACK_IMPORTED_MODULE_1___default().duration(now.diff(end));
            var days = Math.floor(duration.asDays());
            if (days <= 0) {
                notaBaru.push(diterima[i]);
            }
        }
        let hasil = {};
        hasil['pending'] = pending, hasil['diterima'] = notaBaru;
        hasil['notifikasi'] = notifikasi;
        // return the posts
        // return the posts
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
                return getTransaksiUser(req, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(226)));
module.exports = __webpack_exports__;

})();
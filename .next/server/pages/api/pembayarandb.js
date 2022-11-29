"use strict";
(() => {
var exports = {};
exports.id = 5153;
exports.ids = [5153];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 2908:
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
    const { emailReq , namaVenueReq , tglMainReq , lapanganReq , diterimaTglReq , idTransaksiReq  } = req.query;
    var ObjectId1 = (__webpack_require__(8013).ObjectId);
    const convertedObjectId = new ObjectId1(idTransaksiReq);
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        let profil = await db.collection('user').find({
            email: emailReq
        }).sort({
            idfavorit: -1
        }).toArray();
        let transaksi = await db.collection('transaksi').find({
            _id: {
                $ne: convertedObjectId
            },
            namaVenue: namaVenueReq,
            lapangan: lapanganReq,
            tglMain: tglMainReq
        }).sort({
            idfavorit: -1
        }).toArray();
        let infoVenue = await db.collection('mitra').find({
            namaVenue: namaVenueReq
        }, {
            projection: {
                'namaVenue': 1,
                'rekening': 1,
                'opsiBayar': 1,
                'DP': 1,
                'email': 1,
                'noWa': 1
            }
        }).sort({
            idfavorit: -1
        }).toArray();
        let hasil = {};
        hasil['profil'] = profil;
        hasil['infoVenue'] = infoVenue;
        hasil['transaksi'] = transaksi;
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(2908)));
module.exports = __webpack_exports__;

})();
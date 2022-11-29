"use strict";
(() => {
var exports = {};
exports.id = 1213;
exports.ids = [1213];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 5112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection Transaksi
async function getTransaksi(req, res) {
    const { namaVenueReq  } = req.query;
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // fetch the posts
        let transaksi = await db.collection('transaksi').find({
            namaVenue: namaVenueReq,
            status: {
                $ne: 'lunas'
            },
            buktiBayar: {
                $ne: null
            }
        }, {
            projection: {
                'status': 1
            }
        }).sort({
            idTransaksi: -1
        }).toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(transaksi)),
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
// menambah data kedalam collection Transaksi
async function addTransaksi(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // add the post
        await db.collection('transaksi').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Data Transaksi Telah di Tambahkan',
            success: true
        });
    } catch (error) {
        // return an error
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
                return getTransaksi(req, res);
            }
        case 'POST':
            {
                return addTransaksi(req, res);
            }
        case 'PUT':
            {
                return updateTransaksi(req, res);
            }
        case 'DELETE':
            {
                return deleteTransaksi(req, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(5112)));
module.exports = __webpack_exports__;

})();
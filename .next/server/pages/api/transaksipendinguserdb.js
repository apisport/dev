"use strict";
(() => {
var exports = {};
exports.id = 2238;
exports.ids = [2238];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 5785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection Transaksi
async function getTransaksi(req, res) {
    const { emailReq  } = req.query;
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // fetch the posts
        let transaksi = await db.collection('transaksi').find({
            email: emailReq,
            status: 'pending',
            buktiBayar: {
                $ne: null
            }
        }, {
            projection: {
                'buktiBayar': 0
            }
        }).sort({
            idTransaksi: -1
        }).toArray();
        let notifikasi = await db.collection('notifikasi').find({
            email: emailReq,
            status: 'ditolak'
        }).sort({
            idTransaksi: -1
        }).toArray();
        let belumBayar = await db.collection('transaksi').find({
            email: emailReq,
            status: 'pending',
            buktiBayar: null
        }, {
            projection: {
                'buktiBayar': 0
            }
        }).sort({
            idTransaksi: -1
        }).toArray();
        let hasil = {};
        hasil['pending'] = transaksi;
        hasil['notifikasi'] = notifikasi;
        hasil['belumBayar'] = belumBayar;
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
async function deleteTransaksi(req, res) {
    const { emailReq  } = req.body;
    try {
        // Connecting to the database
        let { db  } = await connectToDatabase();
        // Deleting the post
        await db.collection('notifikasi').deleteMany({
            'email': emailReq
        });
        // returning a message
        return res.json({
            message: 'Post deleted successfully',
            success: true
        });
    } catch (error) {
        // returning an error
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(5785)));
module.exports = __webpack_exports__;

})();
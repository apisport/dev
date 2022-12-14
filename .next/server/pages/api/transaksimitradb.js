"use strict";
(() => {
var exports = {};
exports.id = 5648;
exports.ids = [5648];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 3493:
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
        let transaksi = await db.collection('transaksi').find({
            namaVenue: namaVenueReq
        }).sort({
            idfavorit: -1
        }).toArray();
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
async function addTransaksi(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // add the post
        await db.collection('transaksi').insertOne(JSON.parse(req.body));
        let id = await db.collection('transaksi').find(JSON.parse(req.body)).toArray();
        // return a message
        return res.json({
            message: id[0]._id,
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
async function deleteTransaksi(req, res) {
    var ObjectId1 = (__webpack_require__(8013).ObjectId);
    const { _id  } = req.body;
    const convertedObjectId = new ObjectId1(_id);
    try {
        // Connecting to the database
        let { db  } = await connectToDatabase();
        // Deleting the post
        await db.collection('transaksi').deleteOne({
            '_id': convertedObjectId
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
async function updateTransaksi(req, res) {
    const { nama , tim , noRekening , opsiBayar , buktiBayar , objectId , hargaDP , noWa , status  } = req.body;
    var ObjectId2 = (__webpack_require__(8013).ObjectId);
    const convertedObjectId = new ObjectId2(objectId);
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // update the published status of the post
        await db.collection('transaksi').updateOne({
            '_id': convertedObjectId
        }, {
            $set: {
                nama: nama,
                tim: tim,
                noRekening: noRekening,
                opsiBayar: opsiBayar,
                buktiBayar: buktiBayar,
                hargaDP: hargaDP,
                noWa: noWa,
                status: status
            }
        });
        let transaksi = db.collection('transaksi').find({
            '_id': convertedObjectId
        }).toArray();
        // return a message
        return res.json({
            message: transaksi,
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(3493)));
module.exports = __webpack_exports__;

})();
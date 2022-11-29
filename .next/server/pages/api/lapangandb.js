"use strict";
(() => {
var exports = {};
exports.id = 1924;
exports.ids = [1924];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 4255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection lapangan
async function getLapangan(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // fetch the posts
        let lapangan = await db.collection('lapangan').find({}).sort({
            idLapangan: -1
        }).toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(lapangan)),
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
// menambah data kedalam collection lapangan
async function addLapangan(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // add the post
        await db.collection('lapangan').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Data lapangan Telah di Tambahkan',
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
async function updateLapangan(req, res) {
    const { namaVenue , namaLapangan , namaLapanganOld , deskripsi , gambar , jadwalPagi , jadwalSore , jadwalMalam , hargaPagi , hargaPagiWeekend , hargaSore , hargaSoreWeekend , hargaMalam , hargaMalamWeekend , minOrder  } = req.body;
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // update the published status of the post
        await db.collection('lapangan').updateOne({
            'namaVenue': namaVenue,
            'namaLapangan': namaLapanganOld
        }, {
            $set: {
                'namaLapangan': namaLapangan,
                'deskripsi': deskripsi,
                'gambar': gambar,
                'jadwalPagi': jadwalPagi,
                'jadwalSore': jadwalSore,
                'jadwalMalam': jadwalMalam,
                'hargaPagi': hargaPagi,
                'hargaPagiWeekend': hargaPagiWeekend,
                'hargaSore': hargaSore,
                'hargaSoreWeekend': hargaSoreWeekend,
                'hargaMalam': hargaMalam,
                'hargaMalamWeekend': hargaMalamWeekend,
                'minOrder': minOrder
            }
        });
        // return a message
        return res.json({
            message: 'Post updated successfully',
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
async function deleteLapangan(req, res) {
    var ObjectId1 = (__webpack_require__(8013).ObjectId);
    const { _id  } = req.body;
    const convertedObjectId = new ObjectId1(_id);
    try {
        // Connecting to the database
        let { db  } = await connectToDatabase();
        // Deleting the post
        await db.collection('lapangan').deleteOne({
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
// CRUD handler
async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case 'GET':
            {
                return getLapangan(req, res);
            }
        case 'POST':
            {
                return addLapangan(req, res);
            }
        case 'PUT':
            {
                return updateLapangan(req, res);
            }
        case 'DELETE':
            {
                return deleteLapangan(req, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(4255)));
module.exports = __webpack_exports__;

})();
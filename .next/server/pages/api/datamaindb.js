"use strict";
(() => {
var exports = {};
exports.id = 1600;
exports.ids = [1600];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection Transaksi
async function updateLapanganDataMain(req, res) {
    const { dataMain , objectId  } = req.body;
    var ObjectId1 = (__webpack_require__(8013).ObjectId);
    const convertedObjectId = new ObjectId1(objectId);
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // update the published status of the post
        await db.collection('lapangan').updateOne({
            '_id': convertedObjectId
        }, {
            $set: {
                dataMain: dataMain
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
// menambah data kedalam collection Transaksi
async function addMitra(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // add the post
        await db.collection('mitra').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Mitra Telah di Tambahkan',
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
                return getMitra(req, res);
            }
        case 'POST':
            {
                return addMitra(req, res);
            }
        case 'PUT':
            {
                return updateMitra(req, res);
            }
        case 'DELETE':
            {
                return deleteMitra(req, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(1105)));
module.exports = __webpack_exports__;

})();
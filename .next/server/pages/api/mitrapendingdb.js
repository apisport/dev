"use strict";
(() => {
var exports = {};
exports.id = 1701;
exports.ids = [1701];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection Transaksi
async function getMitraPending(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // fetch the posts
        let mitraPending = await db.collection('mitraPending').find({}).sort({
            idMitra: -1
        }).toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(mitraPending)),
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
async function addMitraPending(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // add the post
        await db.collection('mitraPending').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Mitra Pending Telah di Tambahkan',
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
async function deleteMitraPending(req, res) {
    var ObjectId1 = (__webpack_require__(8013).ObjectId);
    const { _id  } = req.body;
    const convertedObjectId = new ObjectId1(_id);
    try {
        // Connecting to the database
        let { db  } = await connectToDatabase();
        // Deleting the post
        await db.collection('mitraPending').deleteOne({
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
                return getMitraPending(req, res);
            }
        case 'POST':
            {
                return addMitraPending(req, res);
            }
        case 'PUT':
            {
                return updateMitraPending(req, res);
            }
        case 'DELETE':
            {
                return deleteMitraPending(req, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(1870)));
module.exports = __webpack_exports__;

})();
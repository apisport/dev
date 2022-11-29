"use strict";
(() => {
var exports = {};
exports.id = 3188;
exports.ids = [3188];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection Transaksi
async function addNotifikasi(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // add the post
        await db.collection('notifikasi').insertOne(JSON.parse(req.body));
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
async function deleteNotifikasi(req, res) {
    var ObjectId = (__webpack_require__(8013).ObjectId);
    const { emailReq  } = req.query;
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
                return getNotifikasi(req, res);
            }
        case 'POST':
            {
                return addNotifikasi(req, res);
            }
        case 'PUT':
            {
                return updateNotifikasi(req, res);
            }
        case 'DELETE':
            {
                return deleteNotifikasi(req, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(6732)));
module.exports = __webpack_exports__;

})();
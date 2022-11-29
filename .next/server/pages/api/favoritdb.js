"use strict";
(() => {
var exports = {};
exports.id = 2370;
exports.ids = [2370];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 2269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection Transaksi
async function getFavorit(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // fetch the posts
        let favorit = await db.collection('favorit').find({}).sort({
            idfavorit: -1
        }).toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(favorit)),
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
async function addFavorit(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // add the post
        await db.collection('favorit').insertOne(JSON.parse(req.body));
        // return a message
        return res.json({
            message: 'Favorit Telah di Tambahkan',
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
async function deleteFavorit(req, res) {
    var ObjectId1 = (__webpack_require__(8013).ObjectId);
    const { _id  } = req.body;
    const convertedObjectId = new ObjectId1(_id);
    try {
        // Connecting to the database
        let { db  } = await connectToDatabase();
        // Deleting the post
        await db.collection('favorit').deleteOne({
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
                return getFavorit(req, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(2269)));
module.exports = __webpack_exports__;

})();
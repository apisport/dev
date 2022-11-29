"use strict";
(() => {
var exports = {};
exports.id = 935;
exports.ids = [935];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 2921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection Transaksi
async function getLapangan(req, res) {
    const { kategoriReq  } = req.query;
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        let searchMitra = await db.collection('mitra').aggregate([
            {
                $match: {
                    "kategori": {
                        $regex: `${kategoriReq}`,
                        $options: "i"
                    },
                    "hariOperasional": {
                        $ne: ""
                    }
                }
            },
            {
                $lookup: {
                    from: "lapangan",
                    localField: "namaVenue",
                    foreignField: "namaVenue",
                    as: "lapanganVenue"
                }
            },
            {
                $project: {
                    namaVenue: 1,
                    alamat: 1,
                    noWa: 1,
                    instagram: 1,
                    kategori: 1,
                    hariOperasional: 1,
                    jamOperasional: 1,
                    fotoVenue: 1,
                    lapanganVenue: {
                        hargaPagi: 1
                    }
                }
            }
        ]).toArray();
        // return the posts
        return res.json({
            message: JSON.parse(JSON.stringify(searchMitra)),
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
                return getLapangan(req, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(2921)));
module.exports = __webpack_exports__;

})();
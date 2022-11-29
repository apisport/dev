"use strict";
(() => {
var exports = {};
exports.id = 4751;
exports.ids = [4751];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection Transaksi
async function getFavoritHome(req, res) {
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        // fetch the posts
        // let favorit = await db
        //     .collection('favorit')
        //     .find({})
        //     .sort({ idfavorit: -1 })
        //     .toArray();
        // //[{"namaVenue": Scudetto, "alamat": Jalan WK}]
        // let lapangan = await db
        //     .collection('lapangan')
        //     .find({})
        //     .sort({ idfavorit: -1 })
        //     .toArray();
        // //[{"namaVenue": Scudetto, "namaLapangan": Lapangan 1}]
        // const mergeById = favorit.map(itm => ({
        //     ...lapangan.find((item) => (item.namaVenue === itm.namaVenue) && item),
        //     ...itm
        // }));
        //[{"namaVenue": Scudetto, "alamat": Jawer, {"namaLapangan": Lapangan, "alamat"}}]
        let favoritHome = await db.collection('favorit').aggregate([
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
            message: JSON.parse(JSON.stringify(favoritHome)),
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
                return getFavoritHome(req, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(6114)));
module.exports = __webpack_exports__;

})();
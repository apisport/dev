"use strict";
(() => {
var exports = {};
exports.id = 8545;
exports.ids = [8545];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const { connectToDatabase  } = __webpack_require__(6198);
const ObjectId = (__webpack_require__(8013).ObjectId);
// mengambil data dari collection Transaksi
async function getVenue(req, res) {
    const { namaVenueReq , diterimaTglReq , diterimaTglReqPrev  } = req.query;
    try {
        // connect to the database
        let { db  } = await connectToDatabase();
        let transaksi1 = await db.collection('transaksi').aggregate([
            {
                $match: {
                    "namaVenue": {
                        $regex: `${namaVenueReq}`,
                        $options: "i"
                    },
                    "diterimaTgl": {
                        $regex: `${diterimaTglReq}`,
                        $options: "i"
                    },
                    "status": {
                        $ne: 'pending'
                    }
                }
            },
            {
                $project: {
                    harga: 1
                }
            }
        ]).toArray();
        let transaksi2 = await db.collection('transaksi').aggregate([
            {
                $match: {
                    "namaVenue": {
                        $regex: `${namaVenueReq}`,
                        $options: "i"
                    },
                    "diterimaTgl": {
                        $regex: `${diterimaTglReqPrev}`,
                        $options: "i"
                    },
                    "status": {
                        $ne: 'pending'
                    }
                }
            },
            {
                $project: {
                    harga: 1
                }
            }
        ]).toArray();
        // return the posts
        let hasil = {};
        hasil['bulanIni'] = transaksi1;
        hasil['bulanLalu'] = transaksi2;
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
// CRUD handler
async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case 'GET':
            {
                return getVenue(req, res);
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
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(6710)));
module.exports = __webpack_exports__;

})();
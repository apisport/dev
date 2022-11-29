"use strict";
(() => {
var exports = {};
exports.id = 1212;
exports.ids = [1212];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_)
});

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6113);
;// CONCATENATED MODULE: external "web-push"
const external_web_push_namespaceObject = require("web-push");
var external_web_push_default = /*#__PURE__*/__webpack_require__.n(external_web_push_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/notifikasiMitra/[id].js
const { connectToDatabase  } = __webpack_require__(6198);


const ObjectId = (__webpack_require__(8013).ObjectId);
const vapidKeys = {
    privateKey: "yl03sSfv_nCxNy8SbZJXm168M7KVeUOLjHYRVyuVt3Y",
    publicKey: "BL3Sv8nFM_tvnILPoGNG6rlLPqubF_mEOpDkaaeyNM2KU3BLih-PLJAtdgfGPPnwZFTDB_KCZJp1hiYSUx9wfxs"
};
external_web_push_default().setVapidDetails("mailto:api.sport.team@gmail.com", vapidKeys.publicKey, vapidKeys.privateKey);
/* harmony default export */ const _id_ = (async (req, res)=>{
    let { db  } = await connectToDatabase();
    if (req.method == "GET") {
        const { id , idTransaksiReq  } = req.query;
        // const idTransaksi = new ObjectId(idTransaksiReq)
        console.log(id);
        let getSubscribeData = await db.collection('tbl_notifikasi').find({
            id: id
        }).toArray();
        // let getTransaksiData = await db.collection('transaksi').find({ _id: idTransaksi }).toArray();
        console.log(getSubscribeData);
        // console.log(getTransaksiData);
        const pushSubscription = JSON.parse(getSubscribeData[getSubscribeData.length - 1].subscribe_req);
        external_web_push_default().sendNotification(pushSubscription, JSON.stringify({
            title: "Transaksi Baru Telah diterima! ",
            text: `Mohon untuk segera menerima atau menolak transaksi dari`,
            image: "/ico.png",
            tag: "new-product",
            url: "https://infolapangan.site/"
        })).catch((err)=>{
            console.log(err);
        });
        res.status(202).json({});
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6198], () => (__webpack_exec__(576)));
module.exports = __webpack_exports__;

})();
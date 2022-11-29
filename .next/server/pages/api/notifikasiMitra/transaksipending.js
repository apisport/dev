"use strict";
(() => {
var exports = {};
exports.id = 7093;
exports.ids = [7093];
exports.modules = {

/***/ 7780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@novu/node"
const node_namespaceObject = require("@novu/node");
;// CONCATENATED MODULE: ./pages/api/notifikasiMitra/transaksipending.js

async function sendMail(req, res) {
    const novu = new node_namespaceObject.Novu(process.env.NOVU_TOKEN);
    const { userReq , tglMainReq , lapanganReq , namaVenueReq , emailReq  } = req.query;
    let work = {
        nama: 'yes'
    };
    await novu.trigger('transaksi-pending', {
        to: {
            subscriberId: emailReq,
            email: emailReq
        },
        payload: {
            namaVene: namaVenueReq,
            user: userReq,
            lapangan: lapanganReq,
            tglMain: tglMainReq
        }
    });
    return res.json(work);
}
async function handler(req, res) {
    // switch the methods
    switch(req.method){
        case 'GET':
            {
                return sendMail(req, res);
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7780));
module.exports = __webpack_exports__;

})();
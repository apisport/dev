"use strict";
(() => {
var exports = {};
exports.id = 5039;
exports.ids = [5039];
exports.modules = {

/***/ 9932:
/***/ ((module) => {

module.exports = require("mv");

/***/ }),

/***/ 5666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "formidable"
const external_formidable_namespaceObject = require("formidable");
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
;// CONCATENATED MODULE: ./pages/api/upload/index.js


var mv = __webpack_require__(9932);
const config = {
    api: {
        bodyParser: false
    }
};
async function handler(req, res) {
    const data = await new Promise((resolve, reject)=>{
        const form = new external_formidable_namespaceObject.IncomingForm();
        form.parse(req, (err, fields, files)=>{
            if (err) return reject(err);
            console.log(fields, files);
            console.log(files.file.filepath);
            var oldPath = files.file.filepath;
            var newPath = `./public/uploads/${files.file.originalFilename}`;
            mv(oldPath, newPath, function(err) {});
            res.status(200).json({
                fields,
                files
            });
        });
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5666));
module.exports = __webpack_exports__;

})();
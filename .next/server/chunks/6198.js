"use strict";
exports.id = 6198;
exports.ids = [6198];
exports.modules = {

/***/ 6198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connectToDatabase": () => (/* binding */ connectToDatabase)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;
// check the MongoDB URI
if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
} // check the MongoDB DB
if (!MONGODB_DB) {
    throw new Error('Define the MONGODB_DB environmental variable');
}
let cachedClient = null;
let cachedDb = null;
async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb
        };
    }
    // set the connection options
    const opts = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    // Connect to cluster
    let client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(MONGODB_URI, opts);
    await client.connect();
    let db = client.db(MONGODB_DB);
    // set cache
    cachedClient = client;
    cachedDb = db;
    return {
        client: cachedClient,
        db: cachedDb
    };
}


/***/ })

};
;
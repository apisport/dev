"use strict";
(() => {
var exports = {};
exports.id = 3006;
exports.ids = [3006];
exports.modules = {

/***/ 1025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// import Layout from '../components/web_layout';
// import loadjs from 'loadjs'
// import cookies from 'next-cookies'
// import Router from 'next/router'
// import { DateFormat } from '../custom_lib'
// import fetch from 'isomorphic-unfetch'
// import Link from 'next/link'
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
        this.videBackground = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        this.state = {
            tinggi: 0,
            userSubscrition: null,
            userSubscritionText: "",
            subscritionId: null
        };
    }
    //======= start
    updateUserConsent = (userConsent)=>{
        console.log(userConsent);
        if (userConsent === "granted") {
            console.log("Diperbolehkan");
        } else {
            console.log("Tidak Diperbolehkan");
        }
    };
    initializePushNotifications = ()=>{
        return Notification.requestPermission(function(result) {
            return result;
        });
    };
    AskPermission = ()=>{
        this.initializePushNotifications().then(this.updateUserConsent);
    };
    createNotificationSubscription = ()=>{
        const pushServerPublicKey = "BL3Sv8nFM_tvnILPoGNG6rlLPqubF_mEOpDkaaeyNM2KU3BLih-PLJAtdgfGPPnwZFTDB_KCZJp1hiYSUx9wfxs";
        return navigator.serviceWorker.ready.then(function(serviceWorker) {
            return serviceWorker.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: pushServerPublicKey
            }).then(function(subscription) {
                console.log("User is subscribed.", subscription);
                return subscription;
            });
        });
    };
    CreateSubscription = ()=>{
        this.createNotificationSubscription().then((subscrition)=>{
            this.showUserSubscription(subscrition);
        });
    };
    showUserSubscription = (subscrition)=>{
        this.setState({
            userSubscrition: subscrition,
            userSubscritionText: JSON.stringify(subscrition, null, " ")
        });
    };
    SendSubscriptionToPushServer = async ()=>{
        const res = await fetch('/api/notifikasiMitra', {
            credentials: "omit",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify(this.state.userSubscrition)
        });
        if (res.status >= 200 && res.status < 300) {
            res.json().then((dt)=>{
                this.state.subscritionId = dt.id;
                console.log("sukses push to server: " + dt.id);
            }).catch((err)=>{
                console.log("gagal");
            });
        } else {
            console.log("gagal Error");
        }
    };
    SendNotification = async ()=>{
        const res = await fetch('/api/notifikasiMitra/' + this.state.subscritionId, {
            credentials: "omit",
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors"
        });
        if (res.status >= 200 && res.status < 300) {
            res.json().then((dt)=>{
                console.log("suksek send notification : " + dt);
            }).catch((err)=>{
                console.log("gagal");
            });
        } else {
            console.log("gagal Error");
        }
    };
    SendNotificationLocal = async ()=>{
        const img = "http://localhost:3000/ico.png";
        const text = "Pembayaran Anda dengan No. Invoice #128988 Telah diterima!";
        const title = "Pembayaran Diterima";
        const options = {
            body: text,
            icon: "logo_stikom.ico",
            vibrate: [
                200,
                100,
                200
            ],
            tag: "new-product",
            image: img,
            // badge: "logo_stikom.ico",
            actions: [
                {
                    action: "Detail",
                    title: "View",
                    icon: "logo_stikom.ico"
                }
            ]
        };
        navigator.serviceWorker.ready.then(function(serviceWorker) {
            serviceWorker.showNotification(title, options);
        });
    };
    isPushNotificationSupported = ()=>{
        return "serviceWorker" in navigator && "PushManager" in window;
    };
    getUserSubscription = ()=>{
        //wait for service worker installation to be ready, and then
        return navigator.serviceWorker.ready.then(function(serviceWorker) {
            return serviceWorker.pushManager.getSubscription();
        }).then(function(pushSubscription) {
            return pushSubscription;
        });
    };
    //=========end
    RegisterService = ()=>{
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", function() {
                navigator.serviceWorker.register("/service-worker.js").then(function(registration) {
                    console.log("Service Worker registration successful with scope: ", registration.scope);
                }, function(err) {
                    console.log("Service Worker registration failed: ", err);
                });
            });
        }
    };
    componentDidMount() {
        let pushNotificationSuported = this.isPushNotificationSupported();
        if (pushNotificationSuported) {
            this.updateUserConsent(Notification.permission);
            this.getUserSubscription().then((subscrition)=>{
                if (subscrition) {
                    this.showUserSubscription(subscrition);
                }
            });
        }
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "row",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "col-lg-12 text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "btn btn-primary",
                        onClick: this.AskPermission,
                        children: "Ask Permission"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "btn btn-primary",
                        onClick: this.CreateSubscription,
                        children: "Create Notification Subscription"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "btn btn-primary",
                        onClick: this.SendSubscriptionToPushServer,
                        children: "Send subscription to push server"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "btn btn-primary",
                        onClick: this.SendNotification,
                        children: "Send a push notification"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: "btn btn-primary",
                        onClick: this.SendNotificationLocal,
                        children: "Send a push notification Local"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        className: "form-control",
                        value: this.state.userSubscritionText,
                        onChange: ()=>{}
                    })
                ]
            })
        });
    }
});;


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1025));
module.exports = __webpack_exports__;

})();
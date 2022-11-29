(() => {
var exports = {};
exports.id = 9492;
exports.ids = [9492];
exports.modules = {

/***/ 6208:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__97eC3",
	"main": "Home_main__OVLM4",
	"title": "Home_title__q0Qg4",
	"description": "Home_description__JhekB",
	"form": "Home_form__eFLbn",
	"footer": "Home_footer__zed0_"
};


/***/ }),

/***/ 1796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6208);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);




function Home() {
    const { 0: imageSrc , 1: setImageSrc  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: uploadData , 1: setUploadData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    /**
   * handleOnChange
   * @description Triggers when the file input changes (ex: when a file is selected)
   */ function handleOnChange(changeEvent) {
        const reader = new FileReader();
        reader.onload = function(onLoadEvent) {
            setImageSrc(onLoadEvent.target.result);
            setUploadData(undefined);
        };
        reader.readAsDataURL(changeEvent.target.files[0]);
    }
    /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */ async function handleOnSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const fileInput = Array.from(form.elements).find(({ name  })=>name === 'file'
        );
        const formData = new FormData();
        for (const file of fileInput.files){
            formData.append('file', file);
        }
        formData.append('upload_preset', 'my-uploads');
        const data = await fetch('https://api.cloudinary.com/v1_1/api-sport/image/upload', {
            method: 'POST',
            body: formData
        }).then((r)=>r.json()
        );
        setImageSrc(data.secure_url);
        setUploadData(data);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Image Uploader"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Upload your image to Cloudinary!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().main),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                        children: "Image Uploader"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().description),
                        children: "Upload your image to Cloudinary!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().form),
                        method: "post",
                        onChange: handleOnChange,
                        onSubmit: handleOnSubmit,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "file",
                                    name: "file"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: imageSrc
                            }),
                            imageSrc && !uploadData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    children: "Upload Files"
                                })
                            }),
                            uploadData && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                                    children: JSON.stringify(uploadData, null, 2)
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().footer),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Find the tutorial on ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://spacejelly.dev/",
                            children: "spacejelly.dev"
                        }),
                        "!"
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1796));
module.exports = __webpack_exports__;

})();
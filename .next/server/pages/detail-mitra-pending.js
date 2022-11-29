"use strict";
(() => {
var exports = {};
exports.id = 5542;
exports.ids = [5542];
exports.modules = {

/***/ 7393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DetailMitraPending)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



function DetailMitraPending() {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { namaVenue , namaPemilikVenue , alamat , noWa , instagram , kategori , hariOperasional , jamOperasional , fasilitas , opsiBayarStringify , rekeningStringify , DP , namaAdmin , noWaAdmin , emailReq , fotoVenueStringify , objectId  } = router.query;
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    let opsiBayar = [];
    let rekening = [];
    let fotoVenue = [];
    if (opsiBayarStringify && rekeningStringify && fotoVenueStringify) {
        opsiBayar = JSON.parse(opsiBayarStringify);
        rekening = JSON.parse(rekeningStringify);
        fotoVenue = JSON.parse(fotoVenueStringify);
    }
    let email = emailReq;
    const deleteMitraPending = async ()=>{
        try {
            console.log('Try');
            // Delete post
            await fetch('/api/mitrapendingdb', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _id: objectId
                })
            });
            // reset the deleting state
            // reload the page
            alert('Mitra Pending Terhapus');
            router.push('/dev/mitra-pending');
        } catch (error) {
        // stop deleting state
        }
    };
    const handlePost = async (e)=>{
        e.preventDefault();
        // fields check
        if (!namaVenue || !namaPemilikVenue || !alamat || !noWa || !instagram || !kategori || !hariOperasional || !jamOperasional || !fasilitas || !opsiBayar || !rekening || !namaAdmin || !noWaAdmin || !email || !fotoVenue) {
            alert('Harap untuk mengisi semua data');
            return setError('Isi Semua Data');
        }
        // post structure
        let mitra = {
            namaVenue,
            namaPemilikVenue,
            alamat,
            noWa,
            instagram,
            kategori,
            hariOperasional,
            jamOperasional,
            fasilitas,
            opsiBayar,
            rekening,
            DP,
            namaAdmin,
            noWaAdmin,
            email,
            fotoVenue
        };
        // save the post
        let response = await fetch('/api/mitradb', {
            method: 'POST',
            body: JSON.stringify(mitra)
        });
        // get the data
        let data = await response.json();
        if (data.success) {
            deleteMitraPending();
            // reset the fields
            alert('Persetujuan Sukses');
            router.push('/dev/mitra-dev');
            return setMessage(data.message);
        } else {
            // set the error
            console.log(data.message);
            return setError(data.message);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "limiter",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-login100",
            style: {
                backgroundImage: 'url("./bg-01.jpg")'
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "login100-form validate-form",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "login100-form-title",
                        children: "MITRA PENDING"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "p-3 py-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: " col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "Nama Venue"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            name: "nama",
                                            value: namaVenue,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "Nama Pemilik Venue"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            name: "nama",
                                            value: namaPemilikVenue,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "Alamat"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            value: alamat,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "No. WA Venue"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            value: noWa,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "Instagram"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            value: `@${instagram}`,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "Kategori"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            value: kategori,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "Hari Operasional"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            value: hariOperasional,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "Hari Operasional"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            value: jamOperasional,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "Fasilitas"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            value: fasilitas,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "Opsi Bayar"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "list-group",
                                            children: opsiBayar.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "list-group-item",
                                                    children: data
                                                })
                                            )
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "No. Rekening"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "list-group",
                                            children: rekening.map((data, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "list-group-item",
                                                    children: data
                                                })
                                            )
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "DP"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            value: `${DP}%`,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "Nama Admin"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            value: namaAdmin,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "No WA Admin"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            value: noWaAdmin,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row mt-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-2 col-md-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: "labels",
                                            children: "E-mail"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            style: {
                                                color: '#ff0000',
                                                fontSize: 'larger'
                                            },
                                            children: "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            className: "form-control",
                                            required: true,
                                            value: email,
                                            readOnly: true
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-12 col-md-12",
                                children: fotoVenue.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Daftar Foto"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: fotoVenue.map((data, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "cols-2 mt-3 mb-3 row row-cols-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "cols-1 col-md-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        id: "image",
                                                        className: "img-fluid d-block border border-dark",
                                                        width: 150,
                                                        height: 150,
                                                        src: `${fotoVenue[i]}`
                                                    })
                                                })
                                            })
                                        })
                                    )
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                class: "row mt-3 container-login100-form-btn my-3 g-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "submit",
                                        className: "btn btn-outline-secondary mx-3",
                                        style: {
                                            backgroundColor: '#006E61',
                                            color: 'rgb(255, 255, 255)',
                                            borderRadius: '5cm',
                                            width: 500,
                                            height: 50
                                        },
                                        onClick: handlePost,
                                        children: "TERIMA"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        onClick: ()=>deleteMitraPending()
                                        ,
                                        className: "btn btn-outline-secondary mx-3",
                                        style: {
                                            backgroundColor: '#c41d0e',
                                            color: 'rgb(255, 255, 255)',
                                            borderRadius: '5cm',
                                            width: 500,
                                            height: 50
                                        },
                                        children: "TOLAK"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__(7393));
module.exports = __webpack_exports__;

})();
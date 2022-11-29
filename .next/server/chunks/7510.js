"use strict";
exports.id = 7510;
exports.ids = [7510];
exports.modules = {

/***/ 7510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


//@ts-check

function Pagination({ pages , setCurrentPage  }) {
    const numberOfPages = [];
    for(let i = 1; i <= pages; i++){
        numberOfPages.push(i);
    }
    const { 0: currentButton , 1: setCurrentButton  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { 0: arrOfCurrButtons , 1: setArrOfCurrButtons  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let tempNumberOfPages = [
            ...numberOfPages
        ];
        let dotsInitial = '...';
        let dotsLeft = '... ';
        let dotsRight = ' ...';
        if (currentButton >= 1 && currentButton <= 3 && tempNumberOfPages.length >= 7) {
            tempNumberOfPages = [
                1,
                2,
                3,
                4,
                dotsInitial,
                numberOfPages.length
            ];
        } else if (currentButton >= 1 && currentButton <= 7 && tempNumberOfPages.length < 7) {
            tempNumberOfPages = [
                ...numberOfPages
            ];
        } else if (currentButton === 4) {
            const sliced = numberOfPages.slice(0, 5);
            tempNumberOfPages = [
                ...sliced,
                dotsInitial,
                numberOfPages.length
            ];
        } else if (currentButton > 4 && currentButton < numberOfPages.length - 2) {
            const sliced1 = numberOfPages.slice(currentButton - 2, currentButton);
            const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
            tempNumberOfPages = [
                1,
                dotsLeft,
                ...sliced1,
                ...sliced2,
                dotsRight,
                numberOfPages.length
            ];
        } else if (currentButton > numberOfPages.length - 3) {
            const sliced = numberOfPages.slice(numberOfPages.length - 4);
            tempNumberOfPages = [
                1,
                dotsLeft,
                ...sliced
            ];
        } else if (currentButton.toString() === "...") {
            setCurrentButton(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
        } else if (currentButton.toString() === dotsRight) {
            setCurrentButton(arrOfCurrButtons[3] + 2);
        } else if (currentButton.toString() === dotsLeft) {
            setCurrentButton(arrOfCurrButtons[3] - 2);
        }
        setArrOfCurrButtons(tempNumberOfPages);
        setCurrentPage(currentButton);
    }, [
        currentButton,
        pages,
        setCurrentPage
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "pagination p-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "page-item",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "page-link",
                                onClick: ()=>setCurrentButton((prev)=>prev === 1 ? prev : prev - 1
                                    )
                                ,
                                "aria-label": "Previous",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    "aria-hidden": "true",
                                    children: "\xab"
                                })
                            })
                        }),
                        arrOfCurrButtons.map((page, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: currentButton === page && 'page-item active',
                                onClick: ()=>setCurrentButton(page)
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "page-link",
                                    children: page
                                })
                            }, index);
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "page-item",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "page-link",
                                onClick: ()=>setCurrentButton((prev)=>prev === numberOfPages.length ? prev : prev + 1
                                    )
                                ,
                                "aria-label": "Next",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    "aria-hidden": "true",
                                    children: "\xbb"
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};


/***/ })

};
;
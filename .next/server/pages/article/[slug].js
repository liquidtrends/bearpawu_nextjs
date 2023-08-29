"use strict";
(() => {
var exports = {};
exports.id = 894;
exports.ids = [894,888];
exports.modules = {

/***/ 5277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export getStaticProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4626);




const Hero = ({ article  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "relative",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "bg-[url('/landing-header.svg')] h-[500px] bg-bottom bg-no-repeat bg-contain mb-8 md:bg-contain md:h-[500px] flex flex-col items-center justify-center",
            children: [
                /*#__PURE__*/ _jsx("h1", {
                    className: "text-5xl text-red-800 uppercase font-bold"
                }),
                /*#__PURE__*/ _jsx("p", {
                    className: "text-2xl w-1/2 pt-8 text-center"
                })
            ]
        })
    });
};
async function getStaticProps({ params  }) {
    const articlesRes = await fetchAPI("/articles", {
        filters: {
            slug: params.slug
        },
        populate: [
            "title"
        ]
    });
    return {
        props: {
            article: articlesRes.data[0]
        },
        revalidate: 1
    };
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Hero)));


/***/ }),

/***/ 8158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ProgressIndicator = ()=>{
    const [scrollPercentage, setScrollPercentage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const onScroll = ()=>{
            const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            const docHeight = document.documentElement.scrollHeight;
            const scrollTop = "pageYOffset" in window ? window.pageYOffset : document.documentElement.scrollTop;
            const trackLength = docHeight - windowHeight;
            const pctScrolled = Math.floor(scrollTop / trackLength * 100);
            setScrollPercentage(pctScrolled);
        };
        window.addEventListener("scroll", onScroll);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (scrollPercentage >= 1 && scrollPercentage < 3) {
            setMessage("Start scrolling and reading!");
        } else if (scrollPercentage >= 3 && scrollPercentage < 5) {
            setMessage("Tired of Reading? Listen instead!");
        } else if (scrollPercentage >= 5 && scrollPercentage < 25) {
            setMessage("Get to the bottom and take the Cayenne Quiz!");
        } else if (scrollPercentage === 50) {
            setMessage("You are halfway done! Keep scrolling!");
        } else if (scrollPercentage > 50 && scrollPercentage < 60) {
            setMessage("You are almost ready to take the Cayenne Quiz for free swag!");
        } else if (scrollPercentage >= 75) {
            setMessage("Woo, you completed the course!");
        } else {
            setMessage("");
        }
    }, [
        scrollPercentage
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed bottom-0 w-full h-4 bg-[#155A63] z-50 ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `h-full ${scrollPercentage >= 100 ? "bg-green-500" : "bg-blue-500"}`,
                    style: {
                        width: `${scrollPercentage}%`
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                        children: [
                            "Your Progress: ",
                            scrollPercentage,
                            "%"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "fixed bottom-12 right-4 flex items-center z-50 ml-4",
                children: [
                    message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-gray-200 py-2 px-4 rounded-lg",
                        children: message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "/cayenne.png",
                        alt: "Cayenne",
                        className: "w-16 h-16 ml-2"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressIndicator);


/***/ }),

/***/ 5990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ quiz)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-confetti"
const external_react_confetti_namespaceObject = require("react-confetti");
var external_react_confetti_default = /*#__PURE__*/__webpack_require__.n(external_react_confetti_namespaceObject);
;// CONCATENATED MODULE: ./components/quiz.js



const Quiz = ({ quiz  })=>{
    const [currentQuestion, setCurrentQuestion] = (0,external_react_.useState)(0);
    const [selectedAnswer, setSelectedAnswer] = (0,external_react_.useState)(null);
    const [showAlert, setShowAlert] = (0,external_react_.useState)(false);
    const [alertType, setAlertType] = (0,external_react_.useState)("success");
    const [alertMessage, setAlertMessage] = (0,external_react_.useState)("");
    const [gameFinished, setGameFinished] = (0,external_react_.useState)(false);
    const [disableNext, setDisableNext] = (0,external_react_.useState)(false);
    const [showConfetti, setShowConfetti] = (0,external_react_.useState)(false);
    if (quiz.length === 0) {
        return null;
    }
    (0,external_react_.useEffect)(()=>{
        if (showAlert) {
            setTimeout(()=>{
                setShowAlert(false);
                setDisableNext(false);
                if (alertType === "success") {
                    if (currentQuestion + 1 === quiz.length) {
                        setGameFinished(true);
                        setShowConfetti(true);
                        return;
                    }
                    nextQuestion();
                }
            }, 2000);
        }
    }, [
        showAlert
    ]);
    const nextQuestion = ()=>{
        setSelectedAnswer(null);
        setCurrentQuestion(currentQuestion + 1);
    };
    const submitQuiz = ()=>{
        setShowAlert(false);
        setDisableNext(true);
        if (selectedAnswer === null) {
            setAlertMessage("Please select an answer");
            setAlertType("error");
            setShowAlert(true);
            return;
        }
        if (!quiz[currentQuestion].Answers[selectedAnswer].Correct) {
            setAlertMessage("Incorrect answer");
            setAlertType("error");
            setShowAlert(true);
            return;
        }
        setAlertMessage("Correct answer");
        setAlertType("success");
        setShowAlert(true);
        if (currentQuestion + 1 === quiz.length) {
            return;
        }
    };
    const renderQuiz = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-white text-center transition-[padding] duration-500 ease absolute top-0 left-0 w-full h-0 overflow-hidden rounded-tl-xl rounded-tr-xl " + (showAlert && "h-auto py-5") + " " + (alertType === "error" ? "bg-red-500" : "") + " " + (alertType === "success" ? "bg-green-500" : ""),
                    children: alertMessage
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-gray-300 text-2xl",
                            children: [
                                "Question ",
                                currentQuestion + 1
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "text-gray-500",
                            children: [
                                "/",
                                quiz.length
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "my-3"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-white my-5 text-2xl",
                    children: quiz[currentQuestion].Question
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "grid md-grid-cols-2 grid-cols-1 gap-5 mb-7 mt-15",
                    children: quiz[currentQuestion].Answers.map((answer, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "text-white py-3 px-4 border-2 border-blue-500 hover:bg-blue-500 cursor-pointer flex justify-between items-center" + (selectedAnswer === index ? " bg-blue-500" : ""),
                            onClick: ()=>setSelectedAnswer(index),
                            children: [
                                answer.Answer,
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    class: "MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-c1sh5i",
                                    focusable: "false",
                                    "aria-hidden": "true",
                                    viewBox: "0 0 24 24",
                                    width: 28,
                                    height: 28,
                                    fill: "white",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
                                    })
                                })
                            ]
                        }, index))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "bg-white text-[#155A63] px-5 py-2 rounded-full",
                        onClick: submitQuiz,
                        disabled: disableNext,
                        children: "Submit"
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[#155A63] p-6 relative z-50 rounded-xl",
        children: [
            showConfetti && /*#__PURE__*/ jsx_runtime_.jsx((external_react_confetti_default()), {}),
            gameFinished && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-white text-center my-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-4xl font-bold text-white mb-2",
                        children: "Congratulations!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "You have completed the quiz"
                    })
                ]
            }),
            !gameFinished && renderQuiz()
        ]
    });
};
/* harmony default export */ const quiz = (Quiz);


/***/ }),

/***/ 4945:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(661);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7187);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7089);
/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5277);
/* harmony import */ var _components_progressIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8158);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4626);
/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6017);
/* harmony import */ var _components_quiz__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5990);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__]);
react_markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Article = ({ article  })=>{
    const imageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_8__/* .getStrapiMedia */ .$)(article.attributes.image);
    const tipImage = (0,_lib_media__WEBPACK_IMPORTED_MODULE_8__/* .getStrapiMedia */ .$)(article.attributes.image);
    const audioFileUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_8__/* .getStrapiMedia */ .$)(article.attributes.audioFile);
    const headerImageUrl = (0,_lib_media__WEBPACK_IMPORTED_MODULE_8__/* .getStrapiMedia */ .$)(article.attributes.HeaderImage);
    const seo = {
        metaTitle: article.attributes.title,
        metaDescription: article.attributes.description,
        shareImage: article.attributes.image,
        article: true
    };
    const getAllQuiz = ()=>{
        return article.attributes.contentBlocks.filter((block)=>block.Question);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_progressIndicator__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                seo: seo
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "h-[500px] bg-no-repeat bg-top bg-cover md:bg-cover md:h-[500px] flex flex-col items-center justify-center",
                    style: {
                        backgroundImage: `url(${headerImageUrl})`
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-5xl text-red-800 uppercase font-bold w-1/2 text-center",
                            children: article.attributes.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-2xl w-1/2 pt-8 text-center"
                        })
                    ]
                })
            }),
            audioFileUrl ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "audioBox",
                className: "w-full mx-auto p-2 flex grid-cols-2 gap-4 items-center justify-center bg-[{article.attributes.courseColour}]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-white text-bold text-xl uppercase",
                        children: "Tired of reading? Tap play to listen instead."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("audio", {
                        controls: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                src: audioFileUrl,
                                type: "audio/mp3"
                            }),
                            "Your browser does not support the audio tag."
                        ]
                    })
                ]
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[url('/block-header.png')] bg-no-repeat bg-center bg-cover",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "md:w-1/2 w-full m-auto space-y-8 text-center py-20",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-5xl font-bold uppercase text-[#FFEFDC]",
                            children: article.attributes.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-white",
                            children: article.attributes.description
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-white py-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container mx-auto px-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full md:w-1/2 mx-auto",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-10 space-y-8 ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    className: "text-lg",
                                    children: article.attributes.content
                                }),
                                article.attributes.contentBlocks && article.attributes.contentBlocks.map((block, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-12 space-y-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "text-3xl font-bold text-gray-900",
                                                children: block.sectionTitle
                                            }),
                                            block.sectionImages && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "pt-10 w-full",
                                                src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_8__/* .getStrapiMedia */ .$)(block.sectionImages)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                className: "contentBlock text-lg space-y-8",
                                                children: block.sectionContent
                                            }),
                                            block.sectionVideo && block.sectionVideo.url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                                    className: "pt-10 w-full",
                                                    controls: true,
                                                    src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_8__/* .getStrapiMedia */ .$)(block.sectionVideo)
                                                })
                                            }),
                                            block.tipTitle && block.tipText && block.tipImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                class: "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md",
                                                role: "alert",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    class: "flex",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            class: "py-1 w-1/2",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                className: "w-full pr-2",
                                                                src: (0,_lib_media__WEBPACK_IMPORTED_MODULE_8__/* .getStrapiMedia */ .$)(block.tipImage)
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    className: "text-xl font-bold text-gray-900",
                                                                    children: block.tipTitle
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    class: "text-sm",
                                                                    children: block.tipText
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }, index)),
                                _components_quiz__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_quiz__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    quiz: getAllQuiz()
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
async function getStaticPaths() {
    const articlesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_7__/* .fetchAPI */ .I)("/articles", {
        fields: [
            "slug"
        ]
    });
    return {
        paths: articlesRes.data.map((article)=>({
                params: {
                    slug: article.attributes.slug
                }
            })),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const articlesRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_7__/* .fetchAPI */ .I)("/articles", {
        filters: {
            slug: params.slug
        },
        populate: [
            "image",
            "audioFile",
            "HeaderImage",
            "courseColour",
            "contentBlocks",
            "contentBlocks.sectionVideo",
            "contentBlocks.sectionImages",
            "contentBlocks.Answers",
            "contentBlocks.TipForU",
            "contentBlocks.tipImage"
        ]
    });
    return {
        props: {
            article: articlesRes.data[0]
        },
        revalidate: 1
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 661:
/***/ ((module) => {

module.exports = require("react-moment");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [678,664,510,421], () => (__webpack_exec__(4945)));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,888];
exports.modules = {

/***/ 1881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./lib/media.js
var media = __webpack_require__(6017);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/image.js



const Image = ({ image  })=>{
    const { alternativeText , width , height  } = image.data.attributes;
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        className: "responsive",
        width: width,
        height: height,
        className: "contain",
        src: (0,media/* getStrapiMedia */.$)(image),
        alt: alternativeText || ""
    });
};
/* harmony default export */ const components_image = (Image);

;// CONCATENATED MODULE: ./components/card.js




const Card = ({ article  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/article/${article.attributes.slug}`,
        legacyBehavior: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "card",
                className: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container w-full md:w-1/2 lg:w-1/2 mx-auto flex flex-col",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        "v-for": "card in cards",
                        className: "flex flex-col md:flex-row overflow-hidden w-100",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pt-8 md:w-96 object-bottom",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_image, {
                                    image: article.attributes.image,
                                    className: "object-bottom"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full py-4 px-6 text-white flex flex-col justify-center space-y-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "font-semibold text-3xl leading-tight truncate text-white uppercase hover:no-underline",
                                        children: article.attributes.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-1 text-xl",
                                        children: article.attributes.description
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const card = (Card);

;// CONCATENATED MODULE: ./components/articles.js



const Articles = ({ articles  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full -mt-20",
        children: articles.map((article, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: index % 3 === 0 ? "bg-[#4E8188] hover:bg-[#105963] hover:scale-105 transition ease-in-out duration-300" : index % 3 === 1 ? "bg-[#6D6E6E] hover:[#6178a3] hover:scale-105 transition ease-in-out duration-300  no-underline" : "bg-teal-700",
                children: /*#__PURE__*/ jsx_runtime_.jsx(card, {
                    article: article
                })
            }, index))
    });
};
/* harmony default export */ const components_articles = (Articles);

;// CONCATENATED MODULE: ./components/otherCards.js

const OtherCards = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "pt-20 pb-10 lg:pt-[120px] lg:pb-20",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "uppercase text-5xl font-bold pb-8 text-[#4E8188] text-center",
                    children: "More from BearPaw U!"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "-mx-4 flex flex-wrap",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full px-4 md:w-1/2 xl:w-1/3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-10 overflow-hidden rounded-lg bg-white drop-shadow-lg transition ease-in-out duration-300 hover:drop-shadow-2xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/rights-with-police.png",
                                        alt: "image",
                                        className: "w-full"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-8 text-center sm:p-9 md:p-7 xl:p-9",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "javascript:void(0)",
                                                    className: "text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] uppercase",
                                                    children: "Rights with Police"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-body-color mb-7 text-base leading-relaxed",
                                                children: "Fresh out of Police Academy, there’s a lot of rules to remember! Good thing Raven took notes! Whether it’s interacting with the public on foot, in their vehicle or at home, Raven’s got the goods!"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full px-4 md:w-1/2 xl:w-1/3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-10 overflow-hidden rounded-lg bg-white drop-shadow-lg transition ease-in-out duration-300 hover:drop-shadow-2xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/id-opens-doors.png",
                                        alt: "image",
                                        className: "w-full"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-8 text-center sm:p-9 md:p-7 xl:p-9",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "javascript:void(0)",
                                                    className: "text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] uppercase",
                                                    children: "I.D. Opens Doors"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-body-color mb-7 text-base leading-relaxed",
                                                children: "Does the thought of applying for I.D. stress you out? Want to replace that birth certificate you lost 4 years ago? BearPaw U's got you covered! Take our I.D. Opens Doors Course to learn about getting your Alberta I.D., and more!"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full px-4 md:w-1/2 xl:w-1/3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-10 overflow-hidden rounded-lg bg-white drop-shadow-lg transition ease-in-out duration-300 hover:drop-shadow-2xl",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/bail.png",
                                        alt: "image",
                                        className: "w-full"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "p-8 text-center sm:p-9 md:p-7 xl:p-9",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "javascript:void(0)",
                                                    className: "text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] uppercase",
                                                    children: "Got Court? Bail, Gladue Reports and Sentencing"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-body-color mb-7 text-base leading-relaxed",
                                                children: "Got Court? Whether it’s a bail hearing, sentencing, or requesting a Gladue Report, BearPaw U’s got the basics! Click through this entertaining short story to learn more!"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const otherCards = (OtherCards);

// EXTERNAL MODULE: ./components/layout.js + 2 modules
var layout = __webpack_require__(7089);
// EXTERNAL MODULE: ./components/seo.js
var seo = __webpack_require__(7187);
// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__(4626);
;// CONCATENATED MODULE: ./pages/index.js







const Home = ({ articles , homepage  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(seo/* default */.Z, {
                seo: homepage.attributes.seo
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-[url('/home-header.png')] h-[500px] bg-no-repeat bg-center bg-cover md:bg-cover md:h-[500px] flex flex-col items-center justify-center"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "h-[600px] flex flex-col items-center justify-center bg-center bg-cover bg-[url('/block-header.png')]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-5xl text-yellow-50 uppercase font-bold text-center",
                                children: homepage.attributes.hero.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-2xl w-full md:w-1/2 px-4 pt-8 text-center text-white",
                                children: "BearPaw U is on a Legal Education Mission to make online learning as fun, rewarding, and fast as possible! Earn BearBucks for each completed course and swap 'em for some sweet SWAG!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(components_articles, {
                                    articles: articles
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(otherCards, {})
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
async function getStaticProps() {
    // Run API calls in parallel
    const [articlesRes, homepageRes] = await Promise.all([
        (0,api/* fetchAPI */.I)("/articles", {
            populate: [
                "image"
            ]
        }),
        (0,api/* fetchAPI */.I)("/homepage", {
            populate: {
                hero: "*",
                seo: {
                    populate: "*"
                }
            }
        })
    ]);
    return {
        props: {
            articles: articlesRes.data,
            homepage: homepageRes.data
        },
        revalidate: 1
    };
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [678,664,443,675,510,421], () => (__webpack_exec__(1881)));
module.exports = __webpack_exports__;

})();
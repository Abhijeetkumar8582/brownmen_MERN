"use strict";
(() => {
var exports = {};
exports.id = 9;
exports.ids = [9,96,976,780];
exports.modules = {

/***/ 3902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NoPost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(690);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);




function Post({ jsonRes , blog_category , insertDate , jsonRes2  }) {
    const yogaTags = [
        "Yoga",
        "YogaPoses",
        "Meditation",
        "YogaLife",
        "HealthyLiving",
        "Wellness",
        "Fitness",
        "Mindfulness",
        "YogaJourney",
        "YogaCommunity",
        "YogaPractice",
        "YogaInspiration",
        "YogaFlow",
        "YogaTeacher",
        "YogaEveryday",
        "StressRelief",
        "Flexibility",
        "Strength",
        "Balance",
        "InnerPeace"
    ];
    const nutritionTags = [
        "Nutrition",
        "HealthyEating",
        "Diet",
        "NutritionTips",
        "NutritionFacts",
        "BalancedDiet",
        "NutritionAdvice",
        "HealthyDiet",
        "NutritionPlan",
        "EatingWell",
        "NutritionEducation",
        "MealPlanning",
        "NutritionalWellness",
        "WholeFoods",
        "NutritionGoals",
        "Nutritionist",
        "CleanEating",
        "NutritionForLife",
        "HealthyChoices",
        "FoodAsMedicine"
    ];
    const fitnessTags = [
        "Fitness",
        "FitnessJourney",
        "Workout",
        "Exercise",
        "HealthyLifestyle",
        "StrengthTraining",
        "Cardio",
        "GymLife",
        "FitLife",
        "FitnessMotivation",
        "FitnessGoals",
        "ActiveLifestyle",
        "HealthAndFitness",
        "Weightlifting",
        "CrossFit",
        "Running",
        "Bodybuilding",
        "Wellness",
        "Nutrition",
        "FitnessCommunity"
    ];
    const healthTags = [
        "Health",
        "HealthyLiving",
        "Wellness",
        "Healthcare",
        "HealthTips",
        "HolisticHealth",
        "MentalHealth",
        "PhysicalHealth",
        "WellBeing",
        "SelfCare",
        "HealthyChoices",
        "MindBodyHealth",
        "HealthAndWellness",
        "HealthyHabits",
        "Nutrition",
        "HealthyMind",
        "HealthyBody",
        "WellnessJourney",
        "FitnessForHealth",
        "HealthyLifestyle"
    ];
    const yogaBenefits = [
        "Improved flexibility",
        "Increased strength",
        "Stress reduction",
        "Enhanced mental clarity",
        "Better posture and alignment",
        "Mind-body connection",
        "Relaxation",
        "Inner peace",
        "Weight management",
        "Improved balance",
        "Cardiovascular health",
        "Respiratory health",
        "Pain relief",
        "Flexibility",
        "Muscle tone",
        "Mood enhancement",
        "Better sleep",
        "Digestive health",
        "Energy boost",
        "Spiritual growth"
    ];
    const [getData, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [sugesstionArr, setsugesstionArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [blogPostRelevantTag, setblogPostRelevantTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [blogTags, setBlogTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const shuffledArray = yogaBenefits.slice();
    let postTag = [];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setData(jsonRes);
        setsugesstionArr(jsonRes2);
        for(let i = shuffledArray.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [
                shuffledArray[j],
                shuffledArray[i]
            ];
        }
        setblogPostRelevantTag(shuffledArray);
        if (blog_category === "Yoga") {
            postTag = yogaTags.slice(0);
        } else if (blog_category === "Fitness") {
            postTag = fitnessTags.slice(0);
        } else if (blog_category === "Health") {
            postTag = healthTags.slice(0);
        } else {
            postTag = nutritionTags.slice(0);
        }
        for(let i = postTag.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [postTag[i], postTag[j]] = [
                postTag[j],
                postTag[i]
            ];
        }
        setBlogTags(postTag);
    }, [
        setData,
        setsugesstionArr,
        setblogPostRelevantTag
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            " ",
                            jsonRes[0].text
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "Brownmen"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: jsonRes[0].text.slice(0, 40)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: jsonRes[1].text
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:width",
                        content: "1200"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image:height",
                        content: "628"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:url",
                        content: "https://brownmen.netlify.app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "space",
                style: {
                    padding: "1px"
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "blogPost_Main_div",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "blogPost_Main_div_sub_Div_one",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "blogPost_Main_div_sub_Div_one_subDiv",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "blogPost_Main_div_sub_Div_one_subDiv_tag",
                                        children: blogTags.slice(0, 3).map((element, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "postTags",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: "Mobile_text",
                                                    children: element
                                                })
                                            }, i))
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "postDate",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "Mobile_text",
                                            children: insertDate.slice(0, 8)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "ReadTime",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                            className: "Mobile_text",
                                            children: "10 Min Read"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "shareIcon",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "Mobile_text",
                                        children: "Share"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            gap: "5px"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-facebook",
                                                    "aria-hidden": "true",
                                                    style: {
                                                        color: "black",
                                                        fontSize: "17px"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-twitter",
                                                    "aria-hidden": "true",
                                                    style: {
                                                        color: "black",
                                                        fontSize: "17px"
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fa fa-linkedin",
                                                    "aria-hidden": "true",
                                                    style: {
                                                        color: "black",
                                                        fontSize: "17px"
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            display: "flex"
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                width: "100%"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        children: [
                                            jsonRes[0].text,
                                            " "
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "text_justify",
                                        children: jsonRes[2].text.replace(/<br\s*\/?>/g, " ")
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "blogPost_first_image_div",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: jsonRes[1].text,
                                        className: "blogPost_first_image_div_image",
                                        alt: jsonRes[1].text
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "blogPost_Head_div",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "blogPost_Main_div_sub_Div_two",
                                children: getData === undefined ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NoPost__WEBPACK_IMPORTED_MODULE_2__["default"], {}) : getData.slice(3).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "my-3",
                                            children: [
                                                item.key.startsWith("heading") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text_justify",
                                                    children: item.text.replace(/<br\s*\/?>/g, " ").replace(/\*\*/g, " ")
                                                }),
                                                item.key.startsWith("image") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        height: " 250px"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: item.text,
                                                        style: {
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover"
                                                        },
                                                        onError: (e)=>{
                                                            e.target.src = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg";
                                                        }
                                                    })
                                                }),
                                                item.key.startsWith("subheading") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text_justify",
                                                    children: item.text.replace(/<br\s*\/?>/g, " ")
                                                }),
                                                item.key.startsWith("content") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text_justify",
                                                    children: item.text.replace(/<br\s*\/?>/g, " ")
                                                }),
                                                item.key.startsWith("title") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text_justify",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                        children: item.text.replace(/<br\s*\/?>/g, " ")
                                                    })
                                                })
                                            ]
                                        })
                                    }, index))
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "blogPost_Main_div_sub_Div_three",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "blogPost_Main_div_sub_Div_three_subDiv",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "blogPost_Main_div_sub_Div_three_subDiv_tag_text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    children: "Tag"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "postBendefits_Tag",
                                                children: blogPostRelevantTag.slice(0, 5).map((element, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "postBendefits_Tag_div",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "Mobile_text",
                                                            children: element
                                                        })
                                                    }, i))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "Other_blog_post_Main_div",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "Other_blog_post_Main_div_post_text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    children: "Other blog post"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    display: "flex"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "Suggestion_card_Main_Div",
                                                    children: sugesstionArr.filter((element)=>element.category === blog_category).slice(0, 2).map((element, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "Suggestion_card",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "Suggestion_card_header",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                                className: "title",
                                                                                children: element.blogtitle
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                className: "Suggestion_card_name",
                                                                                children: element.author
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "Suggestion_card_image",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: element.image,
                                                                            style: {
                                                                                width: "100%",
                                                                                objectFit: "cover",
                                                                                borderRadius: "10px",
                                                                                height: "100%"
                                                                            }
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }, i))
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
Post.requireNavbarAndFooter = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
async function getServerSideProps(context) {
    try {
        const { blog_slug  } = context.query;
        const headers = new Headers();
        headers.append("X-Api-Key", "6706d6eb-e6ae-48ae-ad82-9e4c0ac50e96");
        const res = await fetch(`${"http://52.66.245.117:4001"}/category/blog/${blog_slug}`, {
            headers: headers,
            timeout: 0
        });
        const data = await res.json();
        const jsonRes = data[0].blog_desc;
        const blog_category = data[0].category;
        const insertDate = data[0].date;
        const res2 = await fetch(`${"http://52.66.245.117:4001"}/category/all_blog`, {
            headers: headers,
            timeout: 0
        });
        const data2 = await res2.json();
        const jsonRes2 = data2;
        return {
            props: {
                jsonRes,
                blog_category,
                insertDate,
                jsonRes2
            }
        };
    } catch (error) {
        console.error(error);
        return {
            props: {}
        };
    }
}


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675,690], () => (__webpack_exec__(3902)));
module.exports = __webpack_exports__;

})();
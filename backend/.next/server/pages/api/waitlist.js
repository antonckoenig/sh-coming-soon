"use strict";
(() => {
var exports = {};
exports.id = 41;
exports.ids = [41];
exports.modules = {

/***/ 491:
/***/ ((module) => {

module.exports = require("sendpulse-api");

/***/ }),

/***/ 52:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ waitlist)
/* harmony export */ });
const sendpulse = __webpack_require__(491);
async function waitlist(req, res) {
    const email = req.body.email;
    if (!email) {
        return res.status(400).json({
            message: "Invalid email"
        });
    }
    const emailData = [
        {
            email: email,
            variables: {
                time: new Date(Date.now()).toLocaleString()
            }
        }
    ];
    sendpulse.init(process.env.API_USER_ID, process.env.API_SECRET, TOKEN_STORAGE, function() {
        sendpulse.addEmails((data)=>{
            if (data !== undefined) {
                if (data.result === true) {
                    return res.status(200).json({
                        message: "Success"
                    });
                } else if (data.result === false) {
                    return res.status(400).json({
                        message: "Email is already registered"
                    });
                }
            }
            return res.status(500).json({
                message: "Internal server error"
            });
        }, process.env.MAILING_LIST_ID, emailData);
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(52));
module.exports = __webpack_exports__;

})();
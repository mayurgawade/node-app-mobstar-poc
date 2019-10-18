"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./../utils");
const configure_1 = require("./../configure");
const moment = require("moment");
exports.itSubmissionController = (req, res) => {
    const itSubmission = req.body;
    itSubmission.timestamp = moment()
        .utc()
        .format();
    console.log(configure_1.dbInstance);
    configure_1.dbInstance.itSubmission
        .insert(itSubmission)
        .then(result => {
        res.send(utils_1.responseSuccess(200, "Document added into database", result));
    })
        .catch(err => {
        console.log("document not exists", err);
        res.send(utils_1.responseFail(440, "Internal server Error"));
    });
};
//# sourceMappingURL=post.itSubmission.controller.js.map
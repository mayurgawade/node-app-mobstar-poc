"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./../utils");
const configure_1 = require("./../configure");
exports.getItSubmissionController = (req, res) => {
    configure_1.dbInstance.itSubmission
        .find({})
        .sort([["_id", -1]])
        .toArray()
        .then(function (result) {
        res.send(utils_1.responseSuccess(200, "Documents data retrive from database", result));
    })
        .catch(err => {
        console.log("Error in geting all documents", err);
        res.send(utils_1.responseFail(440, "Error in geting all documents"));
    });
};
//# sourceMappingURL=get.getItSubmission.controller.js.map
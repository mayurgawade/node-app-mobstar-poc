"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./../utils");
const configure_1 = require("./../configure");
const moment = require("moment");
exports.nominationsController = (req, res) => {
    const nominations = req.body;
    nominations.nominationConsidered = false;
    nominations.timestamp = moment()
        .utc()
        .format();
    configure_1.dbInstance.nominations
        .insert(nominations)
        .then(result => {
        res.send(utils_1.responseSuccess(200, "Nomination added into database", result));
    })
        .catch(err => {
        console.log("nomination not exists", err);
        res.send(utils_1.responseFail(440, "Internal server Error"));
    });
};
//# sourceMappingURL=post.nominations.controller.js.map
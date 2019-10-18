"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./../utils");
const configure_1 = require("./../configure");
exports.getAllMobStarController = (req, res) => {
    configure_1.dbInstance.awards
        .find({})
        .sort([["_id", -1]])
        .toArray()
        .then(function (result) {
        res.send(utils_1.responseSuccess(200, "Awards Data retrive from database", result));
    })
        .catch(err => {
        console.log("Error in geting all awards", err);
        res.send(utils_1.responseFail(440, "Error in geting all awards"));
    });
};
//# sourceMappingURL=get.getAllMobStar.controller.js.map
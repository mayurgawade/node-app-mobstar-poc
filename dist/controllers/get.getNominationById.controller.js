"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./../utils");
const configure_1 = require("./../configure");
const mongodb_1 = require("mongodb");
exports.getNominationByIdController = (req, res) => {
    try {
        const id = new mongodb_1.ObjectId(req.params.nominationsId);
        configure_1.dbInstance.nominations
            .find({ _id: id })
            .toArray()
            .then(function (result) {
            res.send(utils_1.responseSuccess(200, "Nomination Data retrive by id from database", result));
        })
            .catch(err => {
            console.log("Error in geting the nominations", err);
            res.send(utils_1.responseFail(440, "Error in geting nomination"));
        });
    }
    catch (error) {
        console.log("Not valid nombination id", error);
        res.send(utils_1.responseFail(440, "Not valid nombination id"));
    }
};
//# sourceMappingURL=get.getNominationById.controller.js.map
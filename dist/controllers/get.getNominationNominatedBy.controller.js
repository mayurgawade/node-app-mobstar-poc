"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./../utils");
const configure_1 = require("./../configure");
exports.getNominationNominatedByController = (req, res) => {
    const nominatedByReceived = req.params.nominatedBy;
    configure_1.dbInstance.nominations
        .find({ nominatedBy: nominatedByReceived })
        .toArray()
        .then(function (result) {
        res.send(utils_1.responseSuccess(200, "Nomination Data retrive from database", result));
    })
        .catch(err => {
        console.log("Error in geting the Nomination Data ", err);
        res.send(utils_1.responseFail(440, "Error in geting nomination Data "));
    });
};
//# sourceMappingURL=get.getNominationNominatedBy.controller.js.map
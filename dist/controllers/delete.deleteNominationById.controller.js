"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./../utils");
const configure_1 = require("./../configure");
const mongodb_1 = require("mongodb");
exports.deleteNominationByIdController = (req, res) => {
    const nominationId = req.params.nominationsId;
    configure_1.dbInstance.nominations
        .deleteOne({ _id: new mongodb_1.ObjectId(nominationId) })
        .then(deletedNomination => {
        res.send(utils_1.responseSuccess(200, "Nomination deleted from database", deletedNomination));
    })
        .catch(err => {
        console.log("Error in deleting nomination", err);
        res.send(utils_1.responseFail(440, "Error in deleting nominations"));
    });
};
//# sourceMappingURL=delete.deleteNominationById.controller.js.map
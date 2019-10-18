"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const utils_1 = require("./../utils");
const configure_1 = require("./../configure");
exports.updateNominationByIdController = (req, res) => {
    const id = req.params.nominationsId;
    const newNominationReason = req.body.nominationReason;
    configure_1.dbInstance.nominations
        .findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { $set: { nominationReasons: newNominationReason } }, { returnOriginal: false })
        .then(updatedNomination => {
        res.send(utils_1.responseSuccess(200, "Nomination updated in  database", updatedNomination.value));
    })
        .catch(err => {
        console.log("Error in updating  nomination", err);
        res.send(utils_1.responseFail(440, "Error in geting updating nominations"));
    });
};
//# sourceMappingURL=put.updateNominationById.controller.js.map
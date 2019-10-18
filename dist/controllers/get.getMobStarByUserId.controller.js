"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./../utils");
const configure_1 = require("./../configure");
exports.getMobStarByUserIdController = (req, res) => {
    const emailReceived = req.params.awardedTo;
    configure_1.dbInstance.awards
        .find({ awardedTo: emailReceived })
        .toArray()
        .then(function (result) {
        res.send(utils_1.responseSuccess(200, "Mob-Star User Data retrive from database", result));
    })
        .catch(err => {
        console.log("Error in geting the Mob-Star User Data ", err);
        res.send(utils_1.responseFail(440, "Error in geting Mob-Star User Data "));
    });
};
//# sourceMappingURL=get.getMobStarByUserId.controller.js.map
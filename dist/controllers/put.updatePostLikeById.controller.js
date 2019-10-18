"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const utils_1 = require("./../utils");
const configure_1 = require("./../configure");
exports.updatePostLikeByIdController = (req, res) => {
    const id = req.params.awardId;
    const likedUser = req.body.likes;
    configure_1.dbInstance.awards
        .findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, { $addToSet: { likes: likedUser } }, { returnOriginal: false })
        .then(updatedAward => {
        res.send(utils_1.responseSuccess(200, "Post Like Status updated in  database", updatedAward.value));
    })
        .catch(err => {
        console.log("Error in updating  awards", err);
        res.send(utils_1.responseFail(440, "Error in geting updating awards"));
    });
};
//# sourceMappingURL=put.updatePostLikeById.controller.js.map
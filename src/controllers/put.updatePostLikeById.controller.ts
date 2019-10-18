import { Request, Response } from "express";

import { ObjectId } from "mongodb";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";

export const updatePostLikeByIdController = (req: Request, res: Response) => {
  const id = req.params.awardId;
  const likedUser = req.body.likes;
  dbInstance.awards
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $addToSet: { likes: likedUser } },
      { returnOriginal: false }
    )
    .then(updatedAward => {
      res.send(
        responseSuccess(
          200,
          "Post Like Status updated in  database",
          updatedAward.value
        )
      );
    })
    .catch(err => {
      console.log("Error in updating  awards", err);
      res.send(responseFail(440, "Error in geting updating awards"));
    });
};

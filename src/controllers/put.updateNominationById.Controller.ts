import { Request, Response } from "express";

import { ObjectId } from "mongodb";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";

export const updateNominationByIdController = (req: Request, res: Response) => {
  const id = req.params.nominationsId;
  const newNominationReason = req.body.nominationReason;
  dbInstance.nominations
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { nominationReasons: newNominationReason } },
      { returnOriginal: false }
    )
    .then(updatedNomination => {
      res.send(
        responseSuccess(
          200,
          "Nomination updated in  database",
          updatedNomination.value
        )
      );
    })
    .catch(err => {
      console.log("Error in updating  nomination", err);
      res.send(responseFail(440, "Error in geting updating nominations"));
    });
};

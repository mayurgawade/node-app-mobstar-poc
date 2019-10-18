import { Request, Response } from "express";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";
import { ObjectId } from "mongodb";

export const deleteNominationByIdController = (req: Request, res: Response) => {
  const nominationId = req.params.nominationsId;
  dbInstance.nominations
    .deleteOne({ _id: new ObjectId(nominationId) })
    .then(deletedNomination => {
      res.send(
        responseSuccess(
          200,
          "Nomination deleted from database",
          deletedNomination
        )
      );
    })
    .catch(err => {
      console.log("Error in deleting nomination", err);
      res.send(responseFail(440, "Error in deleting nominations"));
    });
};

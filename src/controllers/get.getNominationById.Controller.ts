import { Request, Response } from "express";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";
import { Nominations } from "./../interfaces";
import { ObjectId } from "mongodb";

export const getNominationByIdController = (req: Request, res: Response) => {
  try {
    const id = new ObjectId(req.params.nominationsId);
    dbInstance.nominations
      .find({ _id: id })
      .toArray()
      .then(function(result) {
        res.send(
          responseSuccess(
            200,
            "Nomination Data retrive by id from database",
            result
          )
        );
      })
      .catch(err => {
        console.log("Error in geting the nominations", err);
        res.send(responseFail(440, "Error in geting nomination"));
      });
  } catch (error) {
    console.log("Not valid nombination id", error);
    res.send(responseFail(440, "Not valid nombination id"));
  }
};

import { Request, Response } from "express";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";

export const getNominationNominatedByController = (
  req: Request,
  res: Response
) => {
  const nominatedByReceived = req.params.nominatedBy;
  dbInstance.nominations
    .find({ nominatedBy: nominatedByReceived })
    .toArray()
    .then(function(result) {
      res.send(
        responseSuccess(200, "Nomination Data retrive from database", result)
      );
    })
    .catch(err => {
      console.log("Error in geting the Nomination Data ", err);
      res.send(responseFail(440, "Error in geting nomination Data "));
    });
};

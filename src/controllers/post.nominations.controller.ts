import { Request, Response } from "express";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";
import { Nominations } from "./../interfaces";
import * as moment from "moment";
export const nominationsController = (req: Request, res: Response) => {
  const nominations: Nominations = req.body;
  nominations.nominationConsidered = false;
  nominations.timestamp = moment()
    .utc()
    .format();

  dbInstance.nominations
    .insert(nominations)
    .then(result => {
      res.send(responseSuccess(200, "Nomination added into database", result));
    })
    .catch(err => {
      console.log("nomination not exists", err);
      res.send(responseFail(440, "Internal server Error"));
    });
};

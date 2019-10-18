import { Request, Response } from "express";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";
import { ItSubmission } from "./../interfaces";
import * as moment from "moment";
export const itSubmissionController = (req: Request, res: Response) => {
  const itSubmission: ItSubmission = req.body;
  itSubmission.timestamp = moment()
    .utc()
    .format();
  console.log(dbInstance);
  dbInstance.itSubmission
    .insert(itSubmission)
    .then(result => {
      res.send(responseSuccess(200, "Document added into database", result));
    })
    .catch(err => {
      console.log("document not exists", err);
      res.send(responseFail(440, "Internal server Error"));
    });
};

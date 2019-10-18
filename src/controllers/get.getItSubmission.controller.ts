import { Request, Response } from "express";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";
import { ItSubmission } from "./../interfaces";
import { MongoClient, ObjectId } from "mongodb";

export const getItSubmissionController = (req: Request, res: Response) => {
  dbInstance.itSubmission
    .find({})
    .sort([["_id", -1]])
    .toArray()
    .then(function(result) {
      res.send(
        responseSuccess(200, "Documents data retrive from database", result)
      );
    })
    .catch(err => {
      console.log("Error in geting all documents", err);
      res.send(responseFail(440, "Error in geting all documents"));
    });
};

import { Request, Response } from "express";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";
import { Nominations } from "./../interfaces";
import { MongoClient, ObjectId } from "mongodb";

export const getAllNominationsController = (req: Request, res: Response) => {
  dbInstance.nominations
    .find({})
    .sort([["_id", -1]])
    .toArray()
    .then(function(result) {
      res.send(
        responseSuccess(200, "Nomination Data retrive from database", result)
      );
    })
    .catch(err => {
      console.log("Error in geting all nominations", err);
      res.send(responseFail(440, "Error in geting all nominations"));
    });
};

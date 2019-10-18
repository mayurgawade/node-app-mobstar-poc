import { Request, Response } from "express";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";
import { Nominations } from "./../interfaces";
import { MongoClient, ObjectId } from "mongodb";

export const getAllMobStarController = (req: Request, res: Response) => {
  dbInstance.awards
    .find({})
    .sort([["_id", -1]])
    .toArray()
    .then(function(result) {
      res.send(
        responseSuccess(200, "Awards Data retrive from database", result)
      );
    })
    .catch(err => {
      console.log("Error in geting all awards", err);
      res.send(responseFail(440, "Error in geting all awards"));
    });
};

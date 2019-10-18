import { Request, Response } from "express";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";

export const getMobStarByUserIdController = (req: Request, res: Response) => {
  const emailReceived = req.params.awardedTo;
  dbInstance.awards
    .find({ awardedTo: emailReceived })
    .toArray()
    .then(function(result) {
      res.send(
        responseSuccess(200, "Mob-Star User Data retrive from database", result)
      );
    })
    .catch(err => {
      console.log("Error in geting the Mob-Star User Data ", err);
      res.send(responseFail(440, "Error in geting Mob-Star User Data "));
    });
};

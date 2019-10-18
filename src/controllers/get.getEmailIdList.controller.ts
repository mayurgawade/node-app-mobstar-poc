import { Request, Response } from "express";
import { responseSuccess, responseFail } from "../utils/index";
import { dbInstance } from "../configure/index";

export const getEmailIdListController = (req: Request, res: Response) => {
  dbInstance.employees
    .find({})
    .toArray()
    .then(function(result) {
      res.send(
        responseSuccess(200, "Employee Data retrive from database", result)
      );
    })
    .catch(err => {
      console.log("Error in getting all employee", err);
      res.send(responseFail(440, "Error in geting all employee"));
    });
};

import { Request, Response } from "express";
const bcrypt = require("bcryptjs");

import { ObjectId } from "mongodb";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";

export const changePasswordController = (req: Request, res: Response) => {
  const id = req.params.employeeId;
  const hashPassword = req.body.password;
  const newPassword = bcrypt.hashSync(hashPassword);
  dbInstance.employees
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { password: newPassword } },
      { returnOriginal: false }
    )
    .then(updatedEmployee => {
      res.send(
        responseSuccess(
          200,
          "Employee Password updated in  database",
          updatedEmployee.value
        )
      );
    })
    .catch(err => {
      console.log("Error in updating  password", err);
      res.send(
        responseFail(440, "Error in geting updating employee information")
      );
    });
};

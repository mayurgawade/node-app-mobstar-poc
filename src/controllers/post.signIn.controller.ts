import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
import { responseSuccess, responseFail } from "./../utils";
import { dbInstance } from "./../configure";
import { Employee } from "./../interfaces";
import * as jwt from "jsonwebtoken";

const expiresIn: number = 86400;
const JWT_SECRET_KEY = <string>process.env.JWT_SECRET_KEY;
export const signInController = (req: Request, res: Response) => {
  dbInstance.employees
    .findOne({ email: req.body.email })
    .then((emp: Employee) => {
      if (!emp) {
        res.send(responseFail(440, "Employee email not exist"));
      }

      if (!bcrypt.compareSync(req.body.password, emp.password)) {
        res.send(responseFail(440, "Password send does not match"));
      }
      delete emp.password;
      const token = jwt.sign({ employee: emp }, JWT_SECRET_KEY, {
        expiresIn: expiresIn
      });

      res.send(
        responseSuccess(220, "Signin Successful", {
          employee: emp,
          Token: token
        })
      );
    })
    .catch(err => {
      console.log("employee findone failed");
      res.send(responseFail(440, "Internal server Error"));
    });
};

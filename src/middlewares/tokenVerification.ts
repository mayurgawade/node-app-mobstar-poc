// In this file we created JSON Web Token for authorization purpose

import { Request, Response, NextFunction } from "express";
import { responseFail } from "./../utils";
import * as jwt from "jsonwebtoken";

const JWT_SECRET_KEY = <string>process.env.JWT_SECRET_KEY;

export const tokenVerifications = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) {
    res.send(responseFail(4000, "Please send authorization token"));
    return;
  }
  jwt.verify(token, JWT_SECRET_KEY, function(err, decodedTokenEmp) {
    if (err) {
      console.log("Token decode failed", err);
      res.send(responseFail(4000, "Authorization token invalid"));
      return;
    }

    if (!decodedTokenEmp) {
      res.send(responseFail(4000, "Authorization token invalid"));
      return;
    }
    next();
  });
};

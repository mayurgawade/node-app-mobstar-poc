import { Request, Response } from "express";
import { responseSuccess } from "./../utils";

export const tempController = (req: Request, res: Response) => {
  res.send(
    responseSuccess(220, "hello successful", { resdata: "hello World" })
  );
};

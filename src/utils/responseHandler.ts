import { Request, Response } from "express";
import { now } from "moment";

export const responseSuccess = function(
  statusCode: number = 200,
  msg: string = "Success",
  data: any
): ApiDataResponse {
  return {
    success: true,
    statusCode: statusCode,
    message: msg,
    data: data,
    timestamp: now()
  };
};

export const responseFail = function(
  statusCode: number = 400,
  msg: string = "Failed"
): ApiDataResponse {
  return {
    success: false,
    statusCode: statusCode,
    message: msg,
    data: undefined,
    timestamp: now()
  };
};

interface ApiDataResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: any;
  timestamp: number;
}

import type { Request, Response, NextFunction, RequestHandler } from "express";
import type { IGenericErrorMessage } from "../interfaces/errorType.js";
import httpStatus from "http-status";
import sendResponse from "./sendResponse.js";

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res, next);
    } catch (error) {
      sendResponse<IGenericErrorMessage>(res, {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: "Single Semester Retrieve Successfully",
      });
    }
  };
};

export default catchAsync;

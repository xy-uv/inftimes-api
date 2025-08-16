import type { Response } from "express";
import type { ISendResponse } from "../interfaces/sendResponseType.js";

const sendResponse = <T>(res: Response, data: ISendResponse<T>): void => {
  const resData: ISendResponse<T> = {
    statusCode: data?.statusCode,
    success: data?.success,
    message: data?.message || null,
    meta: data?.meta || null,
    data: data?.data || null,
  };
  res.status(data.statusCode).json(resData);
};

export default sendResponse;

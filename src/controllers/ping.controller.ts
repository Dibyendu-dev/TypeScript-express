import { NextFunction, Request, Response } from "express";
import fs from "fs/promises";
import { InternalServerError } from "../utils/errors/app.error";
export const pingHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // console.log("request body is",req.body)
  // console.log("query params is",req.query)
  // console.log("url params is", req.params)

  try {
    await fs.readFile("sample");
    res.status(200).json({ message: "pong" });
  } catch (error) {
    throw new InternalServerError("something went wrong")
  }
};

export const healthHandler = (req: Request, res: Response): void => {
  res.status(200).send("All OK");
};

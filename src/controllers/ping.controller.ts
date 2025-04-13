import { Request, Response } from "express";
export const pingHandler = (req:Request, res:Response) : void => {
    res.send("pong");
  }

  export const healthHandler = (req:Request, res:Response) : void => {
    res.status(200).send("All OK");
  }
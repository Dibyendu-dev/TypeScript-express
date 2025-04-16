import { Request, Response } from "express";
export const pingHandler = (req:Request, res:Response) : void => {
    console.log("request body is",req.body)
    console.log("query params is",req.query)
    console.log("url params is", req.params)

    res.send("pong");
  }

  export const healthHandler = (req:Request, res:Response) : void => {
    res.status(200).send("All OK");
  }
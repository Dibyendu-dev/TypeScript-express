import { NextFunction, Response, Request } from "express";
import { AnyZodObject } from "zod";

export const validateRequestBody = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      console.log("Request body is valid");
      next();
    } catch (error) {
      res.status(400).json({
        message: "invalid request body",
        success: false,
        error: error,
      });
    }
  };
};

export const validateUrlParams = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.params);
      console.log("url params is valid");
      next();
    } catch (error) {
      res.status(400).json({
        message: "invalid url params",
        success: false,
        error: error,
      });
    }
  };
};

export const validateQueryParams = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await schema.parseAsync(req.query);
        console.log("query params is valid");
        next();
      } catch (error) {
        res.status(400).json({
          message: "invalid query params",
          success: false,
          error: error,
        });
      }
    };
  };


  //  generic helper function
// const validateObject = async (schema: AnyZodObject, object:any, next:NextFunction) => {
//   await schema.parseAsync(object);
//   console.log("url params is valid");
//   next();
// };

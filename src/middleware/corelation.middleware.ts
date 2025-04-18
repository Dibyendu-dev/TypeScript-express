import {v4 as uuidV4} from 'uuid'
import { NextFunction, Request, Response } from "express";
import { asyncLocalStorage } from '../utils/helpers/request.healper';

export const attachCorelationIdMiddleware =( req: Request,
  res: Response,
  next: NextFunction)=>{

    const corelationId = uuidV4()
    req.headers['x-corelation-id']=corelationId
    
    asyncLocalStorage.run({corelationId:corelationId},()=>{
      next()
    })
}
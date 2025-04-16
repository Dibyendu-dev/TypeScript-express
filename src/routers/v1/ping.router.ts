import expess from "express";
import { healthHandler, pingHandler } from "../../controllers/ping.controller";
import { validateRequestBody } from "../../validators";
import { pingSchema } from "../../validators/ping.validator";

const pingRouter = expess.Router();

pingRouter.get("/",validateRequestBody(pingSchema), pingHandler);
pingRouter.get("/health",validateRequestBody(pingSchema), healthHandler);

export default pingRouter;

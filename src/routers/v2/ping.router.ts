import expess from "express";
import { healthHandler, pingHandler } from "../../controllers/ping.controller";

const pingRouter = expess.Router();

pingRouter.get("/", pingHandler);
pingRouter.get("/health", healthHandler);

export default pingRouter;

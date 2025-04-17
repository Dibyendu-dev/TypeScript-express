import express from "express";
import { serverConfig } from "./config/server.config";

import v1Router from "./routers/v1/v1.router";
import v2Router from "./routers/v2/v2.routes";
import { genericErrorHandler } from "./middleware/error.middleware";

const app = express();
app.use(express.json())
//  app.use(express.urlencoded())

app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);


// add the error handler middleware
app.use(genericErrorHandler)

console.log("Enviroment variable are loaded");

app.listen(serverConfig.PORT, () => {
  console.log(`server is running on http://localhost:${serverConfig.PORT}`);
  console.log("press Ctrl+c for terminate the server");
});

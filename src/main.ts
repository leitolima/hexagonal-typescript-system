import "./shared/infrastructure/load-env-vars";

import bodyParser from "body-parser";
import express from "express";

import { config } from "./shared/infrastructure/config";
import { connectDatabase } from "./users/infrastructure/database";

// Routers
import { userRouter } from "./users/infrastructure/rest-api/users/user-router";
import { productRouter } from "./users/infrastructure/rest-api/product/product-router";

function boostrap() {
  const app = express();

  app.use(bodyParser.json());
  app.use("/users", userRouter);
  app.use("/products", productRouter);

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
    connectDatabase()
  });
}

boostrap();

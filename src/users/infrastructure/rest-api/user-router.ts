import express from "express";

import { userController } from "../dependencies";

const userRouter = express.Router();

userRouter.post(
  "/login",
  userController.loginUser.bind(userController)
);

export { userRouter };

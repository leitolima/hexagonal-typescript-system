import express from "express";

import { userController } from "../../dependencies";

const userRouter = express.Router();

userRouter.post("/login", userController.loginUser.bind(userController));
userRouter.post("/signup", userController.signUpUser.bind(userController));

export { userRouter };

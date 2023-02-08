import { Request, Response } from "express";

import { User } from "../../../domain";

import { UserService } from "../../../application/users/user-service";

export class UserController {
  constructor(
    private readonly userServiceInstance: UserService,
  ) {}

  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await this.userServiceInstance.loginWithEmail(email, password);
      const { _id, emails } = user;

      res.status(200).send({ data: { _id, emails } });
    } catch (error: any) {
      const errorMessage = error.toString().replace("Error: ", "");
      res.status(500).send({ message: errorMessage });
    }
  }

  async signUpUser(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user: User = await this.userServiceInstance.signUpWithEmail(email, password);
      const { _id, emails } = user;

      res.status(200).send({ data: { _id, emails } });
    } catch (error: any) {
      const errorMessage = error.toString().replace("Error: ", "");
      res.status(500).send({ message: errorMessage });
    }
  }
}

import { Request, Response } from "express";

import { Login } from "../../application/login";

export class UserController {
  constructor(private readonly loginInstance: Login) {}

  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await this.loginInstance.loginWithEmail(email, password);

      res.status(200).send({ data: user });
    } catch (error: any) {
      const errorMessage = error.toString().replace("Error: ", "");
      res.status(500).send({ message: errorMessage });
    }
  }
}

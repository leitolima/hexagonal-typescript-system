const bcrypt = require("bcryptjs");
import { Types } from "mongoose";

export class User {
  constructor(
    readonly _id: Types.ObjectId,
    readonly emails: string[],
    private password: string
  ) {}

  public validatePassword = async (pass: string) => {
    return await bcrypt.compareSync(pass, this.password);
  };
}

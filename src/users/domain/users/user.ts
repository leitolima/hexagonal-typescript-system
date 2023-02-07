const bcrypt = require("bcryptjs");

export class User {
  constructor(
    readonly _id: string,
    readonly emails: string[],
    private password: string
  ) {}

  public validatePassword = async (pass: string) => {
    return await bcrypt.compareSync(pass, this.password);
  };
}

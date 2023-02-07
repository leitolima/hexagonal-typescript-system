const bcrypt = require("bcryptjs");

export class User {
  constructor(
    readonly id: string,
    readonly email: string,
    private password: string
  ) {}

  public validatePassword = async (pass: string) => {
    return await bcrypt.compareSync(pass, this.password);
  };
}

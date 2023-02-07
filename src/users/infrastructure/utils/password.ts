const bcrypt = require('bcryptjs');

export const encryptPassword = (pass: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(pass, salt);
};
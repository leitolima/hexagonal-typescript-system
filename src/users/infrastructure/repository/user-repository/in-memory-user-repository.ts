import { Types } from "mongoose";
import { Request } from "express";

import { User } from "../../../domain";
import { UserRepository } from "../../../domain/users/user-repository";

import { verifySessionToken } from "../../utils/token";
import { encryptPassword } from "../../utils/password";
import UserModel from "../../database/schemas/users-schema";

export class InMemoryUserRepository implements UserRepository {
  validateToken(req: Request): Types.ObjectId {
    const headers = req.headers['authorization'];
    if (!headers) throw new Error('You do not have access to this functionality');
    const _id = verifySessionToken(headers);
    return _id;
  }
  
  async getByEmail(email: string): Promise<User | null> {
    const userRes = await UserModel.aggregate([
      {
        $match: {
          emails: email,
        },
      },
    ]);
    if (!userRes || !userRes.length) {
      return null;
    }
    const user = userRes[0];

    return new User(user._id, user.emails, user.password);
  }

  async createUser(email: string, password: string): Promise<User> {
    const user = new UserModel({
      emails: [email],
      password: encryptPassword(password),
    });
    await user.save();

    return new User(user._id, user.emails, user.password);
  }
}

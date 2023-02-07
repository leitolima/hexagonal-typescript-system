import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";
import UserModel from "../database/schemas/users-schema";

export class InMemoryUserRepository implements UserRepository {
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

    return new User(user.id, user.emails, user.password);
  }
}

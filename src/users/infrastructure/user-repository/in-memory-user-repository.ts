import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";
import { USERS } from "./users";

export class InMemoryUserRepository implements UserRepository {
  async getByEmail(email: string): Promise<User | null> {
    const user: User | undefined = USERS.find((user) => user.email === email);

    if (!user) {
      return null;
    }

    return user;
  }
}

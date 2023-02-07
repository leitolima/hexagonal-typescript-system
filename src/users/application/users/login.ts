import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";

export class Login {
  constructor(private readonly userRepository: UserRepository) {}

  async loginWithEmail(email: string, password: string): Promise<User> {
    const user: User | null = await this.userRepository.getByEmail(email);

    if (!user) {
      throw new Error(`User not found: ${email}`);
    }

    if (!(await user.validatePassword(password))) {
      throw new Error("Incorrect password");
    }
    return user
  }
}

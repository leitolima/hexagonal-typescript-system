import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

export class Login {
  constructor(private readonly userRepository: UserRepository) {}

  async loginWithEmail(email: string, password: string): Promise<void> {
    const user: User | null = await this.userRepository.getByEmail(email);

    if (!user) {
      const error = new Error(`User not found: ${email}`);
      throw error;
    }
    if (!(await user.validatePassword(password))) {
      throw new Error("Incorrect password");
    }
  }
}

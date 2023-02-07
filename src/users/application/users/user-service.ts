import { User, UserRepository } from "../../domain";

export class UserService {
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

  async signUpWithEmail(email: string): Promise<void> {
    const user: User | null = await this.userRepository.getByEmail(email);

    if (user) {
      throw new Error('This email is already registered');
    }
  }
}
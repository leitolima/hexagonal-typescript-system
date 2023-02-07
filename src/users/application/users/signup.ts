import { User } from "../../domain/user";
import { UserRepository } from "../../domain/user-repository";

export class SignUp {
  constructor(private readonly userRepository: UserRepository) {}

  async signUpWithEmail(email: string): Promise<void> {
    const user: User | null = await this.userRepository.getByEmail(email);

    if (user) {
      throw new Error('This email is already registered');
    }
  }
}
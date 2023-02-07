import { User } from "./user";

export interface UserRepository {
  // Queries
  getByEmail(email: string): Promise<User | null>;
  
  // Mutations
  createUser(email: string, password: string): Promise<User>;
}

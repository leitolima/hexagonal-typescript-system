import { Types } from "mongoose";
import { Request } from 'express';

import { User } from "./user";

export interface UserRepository {
  // Login validations
  validateToken(req: Request): Types.ObjectId;

  // Queries
  getByEmail(email: string): Promise<User | null>;
  
  // Mutations
  createUser(email: string, password: string): Promise<User>;
}

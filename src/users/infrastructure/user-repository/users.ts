import { User } from "../../domain/user";
import { encryptPassword } from "../utils/password";

export const USERS: User[] = [
  new User("1", "user1@hotmail.com", encryptPassword("Password123$")),
  new User("2", "user2@hotmail.com", encryptPassword("Password123$")),
  new User("3", "user3@hotmail.com", encryptPassword("Password123$")),
];

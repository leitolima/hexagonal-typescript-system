import { Login } from "../application/login";
import { UserController } from "./rest-api/user-controller";
import { InMemoryUserRepository } from "./user-repository/in-memory-user-repository";

const userRepository = new InMemoryUserRepository();
const loginInstance = new Login(userRepository);

export const userController = new UserController(loginInstance);

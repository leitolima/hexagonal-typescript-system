import { Login } from "../application/users/login";
import { SignUp } from "../application/users/signup";
import { UserController } from "./rest-api/users/user-controller";
import { InMemoryUserRepository } from "./repository/user-repository/in-memory-user-repository";

const userRepository = new InMemoryUserRepository();
const loginInstance = new Login(userRepository);
const signUpInstance = new SignUp(userRepository);

export const userController = new UserController(loginInstance, signUpInstance);

import { Login } from "../application/login";
import { SignUp } from "../application/signup";
import { UserController } from "./rest-api/user-controller";
import { InMemoryUserRepository } from "./user-repository/in-memory-user-repository";

const userRepository = new InMemoryUserRepository();
const loginInstance = new Login(userRepository);
const signUpInstance = new SignUp(userRepository);

export const userController = new UserController(loginInstance, signUpInstance);

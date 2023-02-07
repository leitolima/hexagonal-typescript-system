import { Login } from "../application/users/login";
import { SignUp } from "../application/users/signup";
import { ProductService } from "../application/products/product-service";

import { UserController } from "./rest-api/users/user-controller";
import { ProductController } from "./rest-api/product/product-controller";

import { InMemoryUserRepository } from "./repository/user-repository/in-memory-user-repository";
import { InMemoryProductRepository } from "./repository/product-repository/in-memory-product-repository";

// Users
const userRepository = new InMemoryUserRepository();
const loginInstance = new Login(userRepository);
const signUpInstance = new SignUp(userRepository);

export const userController = new UserController(loginInstance, signUpInstance);

// Products
const productRepository = new InMemoryProductRepository();
const productInstance = new ProductService(productRepository);

export const productController = new ProductController(productInstance);

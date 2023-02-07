import { UserService } from "../application/users/user-service";
import { ProductService } from "../application/products/product-service";

import { UserController } from "./rest-api/users/user-controller";
import { ProductController } from "./rest-api/product/product-controller";

import { InMemoryUserRepository } from "./repository/user-repository/in-memory-user-repository";
import { InMemoryProductRepository } from "./repository/product-repository/in-memory-product-repository";

// Users
const userRepository = new InMemoryUserRepository();
const userServiceInstance = new UserService(userRepository);

export const userController = new UserController(userServiceInstance);

// Products
const productRepository = new InMemoryProductRepository();
const productServiceInstance = new ProductService(productRepository);

export const productController = new ProductController(productServiceInstance);

import { Types } from "mongoose";
import { Request, Response } from "express";

import { Product } from "../../../domain";

import { UserService } from "../../../application/users/user-service";
import { ProductService } from "../../../application/products/product-service";

export class ProductController {
  constructor(
    readonly userServiceInstance: UserService,
    readonly productServiceInstance: ProductService
  ) {}

  async getProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      if (!id) {
        throw new Error('You must insert a product ID');
      }
      const product = await this.productServiceInstance.getProduct(id);
  
      res.status(200).send({ data: product });
    } catch (error: any) {
      const errorMessage = error.toString().replace("Error: ", "");
      res.status(500).send({ message: errorMessage });
    }
  }

  async createProduct(req: Request, res: Response) {
    const { title, price, description } = req.body;
    try {
      if (!title || !price) {
        throw new Error('You must insert Title and Price as required values');
      }
      const _user: Types.ObjectId = this.userServiceInstance.validateUserAuthorization(req);
      const product: Product = await this.productServiceInstance.createProduct(_user, title, price, description);

      res.status(200).send({ data: product });
    } catch (error: any) {
      const errorMessage = error.toString().replace("Error: ", "");
      res.status(500).send({ message: errorMessage });
    }
  }

  async updateProduct(req: Request, res: Response) {
    const { id, title, price, description } = req.body;
    try {
      if (!id) {
        throw new Error('You must insert a product ID');
      }
      const _user: Types.ObjectId = this.userServiceInstance.validateUserAuthorization(req);
      const product: Product = await this.productServiceInstance.updateProduct(id, _user, title, price, description);

      res.status(200).send({ data: product });
    } catch (error: any) {
      const errorMessage = error.toString().replace("Error: ", "");
      res.status(500).send({ message: errorMessage });
    }
  }
}
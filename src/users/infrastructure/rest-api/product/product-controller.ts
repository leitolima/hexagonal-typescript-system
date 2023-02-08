import { Request, Response } from "express";

import { Product } from "../../../domain";

import { ProductService } from "../../../application/products/product-service";

export class ProductController {
  constructor(
    readonly productServiceInstance: ProductService
  ) {}

  async getProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
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
      const product: Product = await this.productServiceInstance.createProduct(title, price, description);

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
        throw new Error('You must send a product ID');
      }
      const product: Product = await this.productServiceInstance.updateProduct(id, title, price, description);

      res.status(200).send({ data: product });
    } catch (error: any) {
      const errorMessage = error.toString().replace("Error: ", "");
      res.status(500).send({ message: errorMessage });
    }
  }
}
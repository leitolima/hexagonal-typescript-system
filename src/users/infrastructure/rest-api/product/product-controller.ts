import { Request, Response } from "express";
import { ProductService } from "../../../application/products/product-service";

export class ProductController {
  constructor(
    readonly productInstance: ProductService
  ) {}

  async getProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await this.productInstance.getProduct(id);
  
      res.status(200).send({ data: product });
    } catch (error: any) {
      const errorMessage = error.toString().replace("Error: ", "");
      res.status(500).send({ message: errorMessage });
    }
  }

  async createProduct(req: Request, res: Response) {}

  async updateProduct(req: Request, res: Response) {}
}
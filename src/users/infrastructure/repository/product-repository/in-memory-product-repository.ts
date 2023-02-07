import { Product } from "../../../domain/products/product";
import { ProductRepository } from "../../../domain/products/product-repository";

import ProductModel from "../../database/schemas/product-schema";

export class InMemoryProductRepository implements ProductRepository {
  async getById(id: string): Promise<Product | null> {
    const product: Product|null = await ProductModel.findById(id);

    if (!product) {
      return null;
    }
    
    return new Product(product._id, product.title, product.price, product.description);
  }

  // Function used for searching
  async getByTitle(title: string): Promise<Product[]> {
    const products: Product[] = await ProductModel.find({
      title: new RegExp(`/${title}/`)
    })

    return products;
  }

  async createProduct(title: string, price: number, description?: string | undefined): Promise<Product> {
    const product = new ProductModel({
      title,
      price,
      description,
    })
    await product.save();

    return new Product(product._id, product.title, product.price, product.description);
  }
}
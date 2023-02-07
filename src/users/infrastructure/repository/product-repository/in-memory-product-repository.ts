import { Product } from "../../../domain/products/product";
import { ProductRepository } from "../../../domain/products/product-repository";

import ProductSchema from "../../database/schemas/product-schema";

export class InMemoryProductRepository implements ProductRepository {
  async getById(id: string): Promise<Product | null> {
    const product: Product|null = await ProductSchema.findById(id);

    if (!product) {
      return null;
    }
    
    return new Product(product._id, product.title, product.price, product.description);
  }

  async getByTitle(title: string): Promise<Product[]> {
    const products: Product[] = await ProductSchema.find({
      title: new RegExp(`/${title}/`)
    })

    return products;
  }
}
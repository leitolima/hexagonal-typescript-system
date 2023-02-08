import { Types } from "mongoose";

import { Product } from "../../../domain/products/product";
import { ProductRepository } from "../../../domain/products/product-repository";

import ProductModel from "../../database/schemas/product-schema";

export class InMemoryProductRepository implements ProductRepository {
  async getById(id: string): Promise<Product | null> {
    const product: Product|null = await ProductModel.findById(id);

    if (!product) {
      return null;
    }
    
    return new Product(product._id, product._user, product.title, product.price, product.description);
  }

  // Function used for searching
  async getByTitle(title: string): Promise<Product[]> {
    const products: Product[] = await ProductModel.find({
      title: new RegExp(`/${title}/`)
    })

    return products;
  }

  async createProduct(_user: Types.ObjectId, title: string, price: number, description?: string | undefined): Promise<Product> {
    const product = new ProductModel({
      _user,
      title,
      price,
      description,
    })
    await product.save();

    return new Product(product._id, _user, title, price, description);
  }

  async updateProduct(id: string, title: string, price: number, description?: string | undefined): Promise<Product> {
    const product = await ProductModel.findOneAndUpdate({
      _id: new Types.ObjectId(id),
    }, {
      $set: { title, price, description }
    }, {
      returnDocument: 'after'
    })
    if (!product) throw new Error('There was an error. Please, try again later');
    await product.save();

    return new Product(product._id, product._user, title, price, description);
  }
}
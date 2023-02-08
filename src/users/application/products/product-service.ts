import { Types } from "mongoose";

import { Product, ProductRepository } from '../../domain'

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getProduct(id: string): Promise<Product> {
    const product = await this.productRepository.getById(id);

    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async getProducts(page: number, perPage: number): Promise<Product[]> {
    const products = await this.productRepository.getProducts(page, perPage);
    return products;
  }

  async createProduct(_user: Types.ObjectId, title: string, price: number, description?: string): Promise<Product> {
    const product: Product = await this.productRepository.createProduct(_user, title, price, description);

    return product;
  }

  async updateProduct(id: string, _user: Types.ObjectId, title: string, price: number, description?: string): Promise<Product> {
    const product: Product = await this.productRepository.updateProduct(id, _user, title, price, description);

    return product;
  }
}
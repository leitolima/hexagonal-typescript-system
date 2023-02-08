import { Types } from "mongoose";

import { Product } from "./product";

export interface ProductRepository {
  // Queries
  getById(id: string): Promise<Product | null>;
  getProducts(page: number, perPage: number): Promise<Product[]>
  // getByTitle(title: string): Promise<Product[] | null>;

  // Mutations
  createProduct(_user: Types.ObjectId, title: string, price: number, description?: string): Promise<Product>;
  updateProduct(id: string, _user: Types.ObjectId, title: string, price: number, description?: string): Promise<Product>;
}

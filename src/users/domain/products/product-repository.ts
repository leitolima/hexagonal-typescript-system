import { Product } from "./product";

export interface ProductRepository {
  // Queries
  getById(id: string): Promise<Product | null>;
  getByTitle(title: string): Promise<Product[] | null>;

  // Mutations
  createProduct(title: string, price: number, description?: string): Promise<Product>;
  updateProduct(id: string, title: string, price: number, description?: string): Promise<Product>;
}

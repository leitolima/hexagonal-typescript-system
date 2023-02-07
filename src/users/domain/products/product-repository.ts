import { Product } from "./product";

export interface ProductRepository {
  getById(id: string): Promise<Product | null>;
  getByTitle(title: string): Promise<Product[] | null>;

  createProduct(title: string, price: number, description?: string): Promise<Product>;
}

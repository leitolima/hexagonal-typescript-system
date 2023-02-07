import { Product } from "./product";

export interface ProductRepository {
  getById(id: string): Promise<Product | null>;
  // getByTitle(title: string): Promise<Product[] | null>;
}

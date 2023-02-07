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
}
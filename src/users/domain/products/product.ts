export class Product {
  constructor(
    readonly _id: string,
    readonly title: string,
    readonly price: number,
    readonly description?: string,
  ) {}
}
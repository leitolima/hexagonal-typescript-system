import { Types } from "mongoose";

export class Product {
  constructor(
    readonly _id: Types.ObjectId,
    readonly _user: Types.ObjectId,
    readonly title: string,
    readonly price: number,
    readonly description?: string
  ) {}
}

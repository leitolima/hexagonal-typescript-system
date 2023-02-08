import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    require: true,
  },
  title: {
    type: String,
    default: '',
    require: true,
  },
  price: {
    type: Number,
    default: 0,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
})
ProductSchema.index({ title: 'text' })

const productModel = model('products', ProductSchema);
// productModel.createIndexes();

export default productModel;

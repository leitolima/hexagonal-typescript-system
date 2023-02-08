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

export default model('products', ProductSchema);

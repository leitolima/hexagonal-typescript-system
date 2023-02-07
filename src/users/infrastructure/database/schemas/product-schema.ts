import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: false,
  },
})

export default model('products', ProductSchema);

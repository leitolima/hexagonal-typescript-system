import { Schema, model } from 'mongoose';

const UsersSchema = new Schema({
  emails: [{
    type: String,
    default: [],
  }],
  password: {
    type: String,
    default: '',
    require: true,
  }
})

export default model('users', UsersSchema);

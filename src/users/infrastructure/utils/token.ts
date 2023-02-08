import { Types } from "mongoose";
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'MY_SECRET_KEY'

// Save user's _id on token
export const generateSessionToken = (_id: Types.ObjectId) => {
  return jwt.sign({ _id }, SECRET, {
    expiresIn: '1h',
  });
}

// Decode and return user's _id
export const verifySessionToken = (token: string) => {
  const decoded = jwt.verify(token, SECRET);
  const { _id } = decoded;
  return _id;
}

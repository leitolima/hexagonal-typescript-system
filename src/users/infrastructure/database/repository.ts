import mongoose from "mongoose";
const mongoURL = "mongodb://localhost:27017/admin";

// Connecting to database
export const connectDatabase = () => {
  try {
    mongoose.connect(mongoURL);
    mongoose.set("strictQuery", false);
    console.log("[DATABASE] - Connected to database");
  } catch (err: any) {
    console.error(err);
    process.exit(1);
  }
};

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({});

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);

    console.log("Database Connection Successful.");
  } catch (error) {
    console.log("Failed to connect Database.");
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;

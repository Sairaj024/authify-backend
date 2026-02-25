const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
  "mongodb+srv://sairajapple24_db_user:KnYJEdGYdsf55SBr@cluster0.owo9z4v.mongodb.net/authify?retryWrites=true&w=majority"
);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

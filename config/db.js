const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("first");
    await mongoose.connect(
      "mongodb+srv://pulkit:I7G1NzcjCRYQmLT9@cluster0.3hdtu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    ); // No additional options needed
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log("error");

    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

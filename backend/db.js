const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/myManagementsystem";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI); // ✅ Remove deprecated options
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process on a failed connection
  }
};

module.exports = connectToMongo;

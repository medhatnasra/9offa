const mongoose = require("mongoose");

module.exports = connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("database connected ...");
      })
      .catch((err) => console.error("Database connection failed:", err)); // Handle connection errors
  } catch (err) {
    console.error("An unexpected error occurred:", err);
  }
};

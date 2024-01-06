import mongoose from "mongoose";

// Variable to track the MongoDB connection status
let isConnected = false;

// Function to connect to MongoDB
const connectToMongoDB = async () => {
  // If already connected, log a message and return
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    // Get the MongoDB connection URL from the environment variables
    const url = process.env.MONGODB_URL;

    // Check if the URL is available
    if (!url) {
      throw new Error("MONGODB_URL environment variable is not set.");
    }

    // Connect to MongoDB using Mongoose
    await mongoose.connect(url);

    // Update the connection status
    isConnected = true;

    // Log a success message
    console.log("MongoDB connected successfully.");
  } catch (error) {
    // Log an error message if there's an issue connecting
    console.error("Error connecting to MongoDB:", error.message);
  }
};

// Export the connectToMongoDB function
export default connectToMongoDB;

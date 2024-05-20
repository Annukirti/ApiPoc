import mongoose from "mongoose";
import { config } from "../config/configuration";

const connection = async (): Promise<void> => {
  try {
    await mongoose.connect(config.database.mongoUri, {
      retryWrites: true,
      w: "majority",
    });
    console.log("MongoDB connected successfully");
  } catch (err: any) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

// Event handlers for managing MongoDB connection states
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to DB");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected from DB");
});

// Gracefully close the Mongoose connection on app termination
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("Mongoose connection closed due to app termination");
  process.exit(0);
});

export default connection;

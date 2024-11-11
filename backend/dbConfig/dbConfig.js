import mongoose from "mongoose";

let isConnected = false;
export async function connect() {
    if (isConnected) {
        console.log("Database is already connected.");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        isConnected = true;
        console.log("Database connected successfully.");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
}

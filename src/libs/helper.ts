import mongoose from "mongoose";

export async function connect() {
    return mongoose.connect(process.env.MONGO_URL as string);
}
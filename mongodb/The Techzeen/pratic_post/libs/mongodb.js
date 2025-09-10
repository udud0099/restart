// libs/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = `mongodb+srv://udud0099:udud0099@cluster0.p8anpn6.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0`;
if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI in .env.local");
}

// cache across hot-reloads in dev
let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export default async function connectMongoDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

import mongoose from "npm:mongoose@^7.0";
import env from "./config.ts";

try {
  const db = await mongoose.connect(env.MONGO_URI);
  console.log("connected to the database", db.connection.name);
} catch (error) {
  console.error(error);
}

import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT ?? 5000;

await mongoose.connect(process.env.MONGO_URI);
console.log("MongoDB connected");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

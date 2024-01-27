import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routeRole from "./routes/Role.js";
import routeAuth from "./routes/User.js";

const app = express();
const port = 3000;

// Load env variables
dotenv.config();
app.use(express.json());

// Connect to MongoDB
const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("error when connect", error);
    throw error;
  }
};

// Collect Role
app.use("/api/role", routeRole);
// Collect User
app.use("/auth", routeAuth);

app.use("/", (req, res) => {
  res.send("Hello World 1");
});

app.listen(port, () => {
  connectMongoDb();
  console.log(`Server running on port ${port}`);
});

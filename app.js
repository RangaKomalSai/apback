import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { EmailRouter } from "./routes/emailRoute.js";
import { RegisterRouter } from "./routes/registerRoute.js";
dotenv.config();

const app = express();

// Middleware 
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

app.use("/api/email", EmailRouter);
app.use("/api/register", RegisterRouter);

//DB Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("!!!!!!!!!Database connected!!!!!!!"))
  .catch((err) => console.error("Database connection failed:", err));

export default app;

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGO_URI);
const port = process.env.port;

app.listen(port, () => {
  console.log(`Server Running At ${port}`);
});

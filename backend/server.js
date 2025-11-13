import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.port;
dotenv.config();
mongoose.connect(process.env.MONGO_URI);


app.use(express.json())

app.use('/users',userRoutes)


app.listen(port, () => {
  console.log(`Server Running At ${port}`);
});

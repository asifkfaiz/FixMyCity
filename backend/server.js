require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGO_URI);
port = process.env.port;


app.listen(port, () => {
  console.log(`Server Running At ${port}`);
});

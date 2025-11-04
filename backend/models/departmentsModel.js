const mongoose = require("mongoose");

const departmentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
  logoUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: String,
  },
});

module.exports = mongoose.model("Departments", departmentsSchema);

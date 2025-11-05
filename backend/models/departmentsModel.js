const mongoose = require("mongoose");

const departmentsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    code: {
      type: String,
      unique: true,
      require: true,
      trim: true,
    },
    logoUrl: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      trim: true,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Department", departmentsSchema);

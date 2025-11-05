const mongoose = require("mongoose");

const flagsSchema = new mongoose.Schema(
  {
    flaggedUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    reportedById: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    reason: {
      type: String,
      require: true,
      trim: yes,
    },
    status: {
      type: String,
      enum: ["pending", "reviewed", "actioned"],
      default: "pending",
    },
    actionTaken: {
      type: String,
      enum: ["none", "warned", "restricted", "banned"],
      default: "none",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flags", flagsSchema);

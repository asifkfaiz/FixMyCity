const mongoose = require("mongoose");

const flagsSchema = new mongoose.Schema({
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
  },
  status: {
    type: String,
    enum: ["pending", "reviewed", "actioned"],
  },
  actionTaken: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Flags", flagsSchema);

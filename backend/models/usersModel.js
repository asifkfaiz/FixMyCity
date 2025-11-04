const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["citizen", "official", "admin"],
      default: "citizen",
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      default: null,
    },
    flagCount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["active", "restricted", "banned"],
      default: "active",
    },
    bannedReason: {
      type: String,
      default: null,
    },
    bannedUntil: {
      type: Date,
      default: Date.now,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reportTotal: {
      type: Number,
      default: 0,
    },
    bookMarkedReports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Report",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", usersSchema);

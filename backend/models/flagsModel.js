import mongoose from "mongoose";

const flagsSchema = new mongoose.Schema(
  {
    flaggedUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reportedById: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    relatedCommentId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    relatedReportId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Report",
      default: null,
    },
    reason: {
      type: String,
      required: true,
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

export default mongoose.model("Flags", flagsSchema);

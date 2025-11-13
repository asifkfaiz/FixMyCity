import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  type: {
    type: String,
    enum: ["status_update", "comment", "upvote", "system"],
    required: true,
  },
  reportId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Report",
    default: null,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    default: null,
  },
});

export default mongoose.model("Notification", notificationSchema);

import mongoose from "mongoose";

const reportsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Open", "In-Progress", "Completed"],
      default: "Open",
      required: true,
    },
    location: {
      type: String,
      // require:true
    },
    media: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        text: {
          type: String,
          required: true,
          trim: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    flags: {
      type: Number,
      default: 0,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Report", reportsSchema);

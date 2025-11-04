const mongoose = require("mongoose");

const reportsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  status: {
    type: String,
  },
  location: {
    type: String,
  },
  media: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  assignedTo: {
    type: String,
  },
  upvotes: {
    type: String,
  },
  comments: {
    type: String,
  },
  priority: {
    type: String,
  },
  flags: {
    type: String,
  },
  verified: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Reports", reportsSchema);

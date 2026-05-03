const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  status: String,
  priority: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    index: true // ✅ REQUIRED
  }
});

// ✅ REQUIRED
taskSchema.index({ status: 1, priority: 1 });

module.exports = mongoose.model("Task", taskSchema);
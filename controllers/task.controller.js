const Task = require("../models/task.model");

let cache = {
  data: null,
  timestamp: null
};

// GET ALL TASKS
exports.getTasks = async (req, res) => {
  const now = Date.now();

  if (cache.data && now - cache.timestamp < 60000) {
    return res.json({ source: "cache", data: cache.data });
  }

  const tasks = await Task.find({ userId: req.user._id });

  cache.data = tasks;
  cache.timestamp = now;

  res.json({ source: "db", data: tasks });
};

// CREATE TASK
exports.createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    userId: req.user._id
  });

  cache.data = null;

  res.json(task);
};
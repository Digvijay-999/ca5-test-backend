const express = require("express");
const router = express.Router();
const { getTasks, createTask } = require("../controllers/task.controller");
const { protect } = require("../middleware/auth.middleware");

router.use(protect);

router.get("/", getTasks);
router.post("/", createTask);

module.exports = router;
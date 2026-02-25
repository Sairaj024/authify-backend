const express = require("express");
const {
  createTask,
  getMyTasks,
  getAllTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// Create task (Logged-in users)
router.post("/", protect, createTask);

// Get my tasks (Only user's own tasks)
router.get("/my", protect, getMyTasks);

// Admin - Get all tasks (Admin only)
router.get("/all", protect, adminOnly, getAllTasks);

// Update task (Only owner)
router.put("/:id", protect, updateTask);

// Delete task (Only owner)
router.delete("/:id", protect, deleteTask);

module.exports = router;
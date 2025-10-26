import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  getCompletedTodos
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", protect, getTodos);
router.post("/", protect, addTodo);
router.put("/:id", protect, updateTodo);
router.delete("/:id", protect, deleteTodo);

export default router;

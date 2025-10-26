import Todo from "../models/Todo.js";

// ✅ Get all todos for logged-in user
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user }); // req.user from middleware
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos" });
  }
};

// ✅ Add new todo (linked to logged-in user)
export const addTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      text: req.body.text,
      deadline: req.body.deadline,
      user: req.user,
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
};

// ✅ Update todo (only if it belongs to this user)
export const updateTodo = async (req, res) => {
  try {
    const updates = { ...req.body };
    if (req.body.completed === true) updates.completedAt = new Date();
    if (req.body.completed === false) updates.completedAt = null;
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      updates,
      { new: true }
    );
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: "Error updating todo" });
  }
};

// completd todos hostory 
export const getCompletedTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user, completed: true })
      .sort({ completedAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Error fetching completed todos" });
  }
};

// ✅ Delete todo (only if it belongs to this user)
export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.user,
    });
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo" });
  }
};

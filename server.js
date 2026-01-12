require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* =======================
   MIDDLEWARE
======================= */
app.use(cors());
app.use(express.json());

/* =======================
   ENV VARIABLES
======================= */
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

/* =======================
   DB CONNECTION
======================= */
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅");
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌", err);
    process.exit(1);
  });

/* =======================
   SCHEMA & MODEL
======================= */
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

/* =======================
   ROUTES
======================= */

// Health check (VERY IMPORTANT for Railway)
app.get("/", (req, res) => {
  res.status(200).json({ message: "Todo API running 🚀" });
});

// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create todo
app.post("/todos", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete todo
app.delete("/todos/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* =======================
   SERVER START
======================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});

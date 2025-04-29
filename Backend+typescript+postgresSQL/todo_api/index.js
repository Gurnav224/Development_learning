const express = require("express");
const logger = require("./logger");

const app = express();
app.use(express.json());

// In-memory todo list
let todos = [
  {
    id: 1,
    title: "Learn Node.js",
    completed: false,
  },
];
let idCounter = 1;

// Winston logging middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url} ${req.ip} ${req.get("User-Agent")} ${req.get("Accept")}     ${req.get("Accept-Language")}`);
  res.on("finish", () => {
    logger.info(`Response: ${res.statusCode} ${res.statusMessage}`);
  });
  res.on("error", (err) => {
    logger.error(`Response error: ${res.statusCode} ${res.statusMessage}`, { error: err });
  });
  next();
});

// CRUD Endpoints
app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { title } = req.body;
  if (!title) {
    logger.warn("POST /todos missing title");
    return res.status(400).json({ error: "Title is required" });
  }
  const todo = { id: idCounter++, title, completed: false };
  todos.push(todo);
  logger.info("Todo created", { todo });
  res.status(201).json(todo);
});

app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, completed } = req.body;
  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    logger.warn(`PUT /todos/${id} not found`);
    return res.status(404).json({ error: "Todo not found" });
  }
  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  logger.info("Todo updated", { todo });
  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) {
    logger.warn(`DELETE /todos/${id} not found`);
    return res.status(404).json({ error: "Todo not found" });
  }
  const deleted = todos.splice(index, 1);
  logger.info("Todo deleted", { todo: deleted[0] });
  res.json({ success: true });
});

// 404 handler for unmatched routes
app.use((req, res, next) => {
  logger.error(`Route not found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  logger.error("Unhandled error", { error: err });
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

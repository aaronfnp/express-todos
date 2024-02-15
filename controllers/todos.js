const Todo = require("../models/todo");

function index(req, res) {
  const todos = Todo.getAll();
  res.render("todos/index.ejs", { todos: todos, title: "New Todo" });
}

function show(req, res) {
  const todo = Todo.getOne(req.params.id);
  res.render("todos/show.ejs", { todo, title: "New Todo" });
}

function newTodo(req, res) {
  res.render("todos/new", { title: "New Todo" });
}

module.exports = {
  index,
  show,
  new: newTodo,
};

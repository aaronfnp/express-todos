const express = require("express");
const router = express.Router();
const todosCtrl = require("../controllers/todos");

// GET /todos
router.get("/", todosCtrl.index);
// GET /todos/new <-- DEFINE BEFORE SHOW
router.get("/new", todosCtrl.new);
// GET /todos/:id
router.get("/:id", todosCtrl.show);

module.exports = router;

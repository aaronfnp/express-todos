const todos = [
  { id: 125223, todo: "Feed Dogs", done: true },
  { id: 127904, todo: "Learn Express", done: false },
  { id: 139608, todo: "Buy Milk", done: false },
];

module.exports = {
  getAll,
  getOne,
};

function getOne(id) {
  const todo = todos.find((t) => t.id === parseInt(id));
  return todo;
}

function getAll() {
  return todos;
}

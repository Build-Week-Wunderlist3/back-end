const db = require("../database/dbConfig");

module.exports = {
    getTask,
    getByUserId,
    add,
    update,
    remove,
    getAllTasks
  };

function add(newTask) {
    return db("tasks").insert(newTask);
}

function getTask(id) {
    return db("tasks").where({ id }).first();
}

function getByUserId(id) {
    // Update this after implementing tags
    return db("tasks")
      .join("users", "tasks.user_id", "users.id")
      .select("tasks.id", "tasks.name", "tasks.Date", "tasks.completed")
      .where("users.id", id)
      .orderBy("tasks.completed")
      .orderBy("tasks.id");
}

function remove(task_id) {
    return db("tasks").where({ id: task_id }).del();
}

function update(id, changes) {
    return db('tasks')
      .where({ id })
      .update(changes);
}

//removeTodos
function removeTodos(id) {
    return db('todos')
      .where('id', id)
      .del();
}


//removeTask
function removeTask(id) {
    return db('task')
      .where('id', id)
      .del();
}

//getalltasks
function getAllTasks() {
    return db("tasks")
};


// AUTH ROUTES
GET ALL USERS - restricted path must be logged in to access
Get request
/api/auth/

Register a new user
POST REQUEST
/api/auth/register
requires: username, password

Login a user
POST REQUEST
/api/auth/login
requires: username, password

// TASK ROUTES

Get all tasks for specific ID
GET REQUEST
/api/todo/tasks/:id
requires user id

Get all tasks in database - restricted 
GET REQUEST
/api/todo/tasks

Add task for a specific user
POST REQUEST
/api/todo/tasks
requires: username, user_id

Update task by ID
PUT REQUEST
/api/todo/task/:id
requires: name, id
name is the new name for the task
Id is which task

Delete Task
DELETE REQUEST
/api/todo/tasks/:id
requires the id of which taks you want removed

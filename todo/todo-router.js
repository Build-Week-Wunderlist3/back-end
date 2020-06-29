const router = require("express").Router();
const Tasks = require('./todo-model.js');
const resToken = require('../auth/restrictedmiddleware.js');

//get tasks by id
// router.get('/tasks/:id', resToken, (req, res) => {
    router.get('/tasks/:id', (req, res) => {
    const { id } = req.params;
    Tasks.getByUserId(id)
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

//get all tasks
router.get('/tasks', resToken, (req, res) => {
  // router.get('/tasks', (req, res) => {
    Tasks.getAllTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(error => {
        res.status(500).json(error)
    })
});


//add task for user
router.post('/tasks', (req, res) => {
    const body = req.body;
    if(body.name && body.user_id) {
        Tasks.add(body)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                res.status(500).json({  message: 'Failed to add task'})
            });
    } else {
        res.status(400).json({ error: 'the post must have a task name and user_id' })
    };
})


//update task by id 
router.put('/task/:id',  (req, res) => {
    const changes = req.body;
    Tasks.update(req.params.id, changes)
    .then(post => {
      if (post) {
          res.status(200).json(post);
          } else {
            res.status(404).json({ message: 'The task could not be found' });
          }
        })
        .catch(error => {
          // log error to database
          console.log(error);
          res.status(500).json({
            message: 'Error updating the task',
          });
        });});

        // delete task by id
        router.delete('/tasks/:id', (req, res) => {
          Tasks.remove(req.params.id)
          .then(count => {
            if (count > 0) {
              res.status(200).json({ message: 'The task has been removed' });
            } else {
              res.status(404).json({ message: 'The task could not be found' });
            }
          })
          .catch(error => {
            console.log(error);
            res.status(500).json({
               message: 'Error removing the post',
            });
      });});
              

module.exports = router;

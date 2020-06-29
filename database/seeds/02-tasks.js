
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'clean', date: "01/01/2000", completed: false, user_id: 1},
        {id: 2, name: 'go for a run', date: "01/01/2000", completed: false, user_id: 1},
        {id: 3, name: 'sleep', date: "01/01/2000", completed: false, user_id: 2},
        {id: 4, name: 'eat dinner', date: "01/01/2000", completed: false, user_id: 2},
        {id: 5, name: 'work out', date: "01/01/2000", completed: false, user_id: 3},
        {id: 6, name: 'watch tv', date: "01/01/2000", completed: false, user_id: 3},
      ]);
    });
};

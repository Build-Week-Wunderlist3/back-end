
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'bob1', password: "12345"},
        {id: 2, username: 'bob2', password: "12345"},
        {id: 3, username: 'bob3', password: "12345"},
      ]);
    });
};

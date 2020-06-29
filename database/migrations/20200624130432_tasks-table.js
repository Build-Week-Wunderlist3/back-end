
exports.up = function(knex) {
    return knex.schema
  
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('name', 255)
          .notNullable();
      tbl.string('date', 255);
      tbl.boolean('completed');
      tbl.integer('user_id')
          .notNullable()
          .unsigned()
          .references('users.id')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
  
    .createTable('user_tasks', tbl => {
        tbl.increments();
        tbl.integer('user_id')
          .notNullable()
          .unsigned()
          .references('users.id')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
        tbl.integer('task_id')
          .notNullable()
          .unsigned()
          .references('tasks.id')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('tasks')
        .dropTableIfExists('user_tasks')
};

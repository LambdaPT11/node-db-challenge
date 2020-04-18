
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments('projects_id');
      tbl.string('projects_name', 128)
         .notNullable;
      tbl.text('projects_description');
      tbl.boolean('projects_complete')
         .defaultTo(0);
    })
    .createTable('resources', tbl => {
      tbl.increments('resource_id');
      tbl.string('resource_name', 255)
         .notNullable();
      tbl.text('resource_description');
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id');
      tbl.text('task_description')
         .notNullable();
      tbl.text('task_notes');
      tbl.boolean('task_complete')
         .defaultTo(0);
      tbl.integer('project_id')
         .unsigned()
         .unique()
         .references('projects_id')
         .inTable('projects');
    })
    .createTable('project', tbl => {
      tbl.integer('projects_id')
         .unsigned()
         .unique()
         .references('projects_id')
         .inTable('projects');
      tbl.integer('task_id')
         .unsigned()
         .unique()
         .references('task_id')
         .inTable('tasks');
         tbl.integer('resource_id')
         .unsigned()
         .unique()
         .references('resource_id')
         .inTable('resources');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('project')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects');
  };

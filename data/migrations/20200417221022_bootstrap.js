
exports.up = function (knex) {
   return knex.schema.createTable('projects', tbl => {
       tbl.increments();
       tbl.string('p_name', 100)
          .notNullable();
       tbl.string('p_description', 255);
       tbl.boolean('p_complete')
          .notNullable()
          .defaultTo(false);
   })

       .createTable('resources', tbl => {
           tbl.increments();
           tbl.string('r_name', 100)
              .notNullable()
              .unique();
           tbl.string('r_description', 255);
       })

       .createTable('tasks', tbl => {
           tbl.increments();
           tbl.string('description', 255)
              .notNullable();
           tbl.string('notes', 255);
           tbl.boolean('complete')
              .notNullable()
              .defaultTo(false);
           tbl.integer('project_id') // Foreign Key
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('projects')
               .onDelete('CASCADE') // corresponding records in the child table will automatically be deleted
               .onUpdate('CASCADE');
       })
       // Trans Table
       .createTable('project_resources', tbl => {
           tbl.primary(['project_id', 'resource_id']);
           tbl.integer('project_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('projects')
               .onDelete('CASCADE')
               .onUpdate('CASCADE');
           tbl.integer('resource_id')
               .unsigned()
               .notNullable()
               .references('id')
               .inTable('resources')
               .onDelete('CASCADE')
               .onUpdate('CASCADE');
       })
};

exports.down = function (knex) {
   return knex.schema
      .dropTableIfExists('project_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects');
};


exports.seed = function(knex) {
  // Deletes ALL existing entries and reset's id's
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projects_name: 'Paint west room', projects_description: 'West room needs refresh before assembly', projects_complete: 0},
        {projects_name: 'Project management tool', projects_description: 'A group to design and build project management tool', projects_complete: 0},
        {projects_name: 'Group A', projects_description: 'assemble 3 full stack developers for small or test developments', projects_complete: 1}
      ]);
    });
};

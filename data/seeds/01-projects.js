
exports.seed = function(knex) {
  // Deletes ALL existing entries and reset's id's
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {p_name: 'upgrade this rat of a pc', p_description: 'upgrade memory and drive for optimum performance of this machine', p_complete: false },
        {p_name: 'create model submarine', p_description: 'robotics project with kids', p_complete: false },
        {p_name: 'figure this sprint out', p_description: 'close to piecing this project together', p_complete: false }
      ]);
    });
};

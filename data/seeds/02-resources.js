
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, r_name: 'box', r_description: 'big one' },
        {id: 2, r_name: 'cube', r_description: 'small one' },
        {id: 3, r_name: 'rubix', r_description: 'great game' }
      ]);
    });
};

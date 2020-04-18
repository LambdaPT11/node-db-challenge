
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resource_name: 'laptop-design', resource_description: 'mobile computer with graphic software'},
        {resource_name: 'laptop-program', resource_description: 'mobile computer with code writing software'},
        {resource_name: 'paint supplies', resource_description: 'paint, brushes, rollers, tape, drop cloths, 6ft ladder'},
        {resource_name: 'John Doe', resource_description: 'full stack - front end focus'},
        {resource_name: 'Jane Doe', resource_description: 'full stack - back end focus'},
        {resource_name: 'Pat Doe', resource_description: 'full stack'}
      ]);
    });
};

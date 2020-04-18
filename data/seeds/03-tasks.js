
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1,
          description: 'research upgrade', 
          notes: 'hope online, find the info about this rat', 
          complete: false, 
          project_id: 1 },

        { id: 2,
          description: 'research parts', 
          notes: 'hope online and find the cheapest, origin or suppliment, parts', 
          complete: false, 
          project_id: 1 },

        { id: 3,
          description: 'repair', 
          notes: 'wait for parts delivery. bet on what get returned', 
          complete: false, 
          project_id: 1 },

        { id: 4,
          description: 'research', 
          notes: 'model design, groups or forums', 
          complete: false, 
          project_id: 2 },

        { id: 5,
          description: 'concept', 
          notes: 'draw out concept, how will controls work', 
          complete: false, 
          project_id: 2 },

        { id: 6,
          description: 'build', 
          notes: 'after gathering some resources, begin build', 
          complete: false, 
          project_id: 2 },

        { id: 7,
          description: 'init', 
          notes: 'does not everything start with init', 
          complete: false, 
          project_id: 3 },

        { id: 8,
          description: 'git', 
          notes: 'you missed a commit, and so that code you deleted, gone..', 
          complete: false, 
          project_id: 3 },

        { id: 9,
          description: 'eagle', 
          notes: 'take it to the limit, one more time', 
          complete: false, 
          project_id: 3 },

      ]);
    });
};

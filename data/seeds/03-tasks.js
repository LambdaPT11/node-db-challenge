
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_description: 'get with Jessica on color for west room', task_notes: 'mobile - (555) 555-5687', task_complete: 0,  },
        {task_description: 'PO # for paint and supplies', task_notes: 'mobile - (555) 555-5687', task_complete: 0,  },
        {task_description: 'interview for group A', task_notes: '3 Full Stack developers required', task_complete: 1,  },
        {task_description: 'get group A equipment', task_notes: 'laptops for programing', task_complete: 0,  },
        {task_description: 'ready west room for paint', task_notes: 'tare down west room for paint', task_complete: 1,  }
      ]);
    });
};

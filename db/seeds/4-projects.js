
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, project_name: 'Lighthouse'},
        {id: 2, project_name: 'Banana'},
        {id: 3, project_name: 'RESTFUL'}
      ]);
    });
};

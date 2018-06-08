
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Lighthouse'},
        {project_name: 'Banana'},
        {project_name: 'RESTFUL'}
      ]);
    });
};

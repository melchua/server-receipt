
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'Office Holiday Party'},
        {project_name: 'Toronto Trip'},
        {project_name: 'Fixing Door'},
        {project_name: 'VIP Client Visit'}
      ]);
    });
};

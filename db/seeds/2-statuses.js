
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([
        {id:1, status_name: 'Pending'},
        {id:2, status_name: 'Approved'},
        {id:3, status_name: 'Rejected'}
      ]);
    });
};

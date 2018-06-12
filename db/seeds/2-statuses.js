
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('statuses').del()
    .then(function () {
      // Inserts seed entries
      return knex('statuses').insert([
        {status_name: 'Pending'},
        {status_name: 'Approved'},
        {status_name: 'Rejected'}
      ]);
    });
};

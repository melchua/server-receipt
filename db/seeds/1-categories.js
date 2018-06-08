
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {cat_name: 'Food'},
        {cat_name: 'Transportation'},
        {cat_name: 'Entertainment'}
      ]);
    });
};

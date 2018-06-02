
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {id:1, cat_name: 'Food'},
        {id:2, cat_name: 'Transportation'}
      ]);
    });
};

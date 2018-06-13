
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {cat_name: 'Car & Truck Expenses'},
        {cat_name: 'Meals & Entertainment'},
        {cat_name: 'Office Expenses & Postage'},
        {cat_name: 'Supplies'},
        {cat_name: 'Travel'}
      ]);
    });
};

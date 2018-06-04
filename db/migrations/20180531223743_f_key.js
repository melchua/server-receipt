exports.up = function(knex, Promise) {
 return knex.schema.table('receipts', table => {
  table.integer('category_id');
  table.foreign('category_id').references('categories.id');
  table.integer('user_id');
  table.foreign('user_id').references('users.id');
  table.integer('status_id');
  table.foreign('status_id').references('statuses.id');
 });
};

exports.down = function(knex, Promise) {
 return knex.schema.table('receipts', function(table){
   table.dropColumn('category_id');
   table.dropColumn('user_id');
   table.dropColumn('status_id');
 });
};
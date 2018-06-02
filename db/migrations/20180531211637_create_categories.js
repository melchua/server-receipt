exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', function(t) {
        t.increments('id').primary();
        t.string('cat_name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories');
};

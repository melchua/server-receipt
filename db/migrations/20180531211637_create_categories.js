exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', function(t) {
        t.integer('id').unsigned().primary();
        t.string('name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories');
};

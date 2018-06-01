
exports.up = function(knex, Promise) {
    return knex.schema.createTable('statuses', function(t) {
        t.increments('id').primary();
        t.string('name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('statuses');
};

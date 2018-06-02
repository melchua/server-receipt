
exports.up = function(knex, Promise) {
    return knex.schema.createTable('statuses', function(t) {
        t.increments('id').primary();
        t.string('status_name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('statuses');
};

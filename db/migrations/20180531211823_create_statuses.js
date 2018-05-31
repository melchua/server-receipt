
exports.up = function(knex, Promise) {
    return knex.schema.createTable('statuses', function(t) {
        t.integer('id').unsigned().primary();
        t.string('name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('statuses');
};

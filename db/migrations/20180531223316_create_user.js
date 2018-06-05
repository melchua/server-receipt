exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(t) {
        t.increments('id').primary();
        t.string('first_name');
        t.string('last_name');
        t.string('email');
        t.string('password');
        t.boolean('admin');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};

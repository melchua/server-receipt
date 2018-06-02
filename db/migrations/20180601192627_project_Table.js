
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(t) {
        t.increments('id').primary();
        t.string('project_name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('projects');
};

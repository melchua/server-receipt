
exports.up = function(knex, Promise) {
    return knex.schema.createTable('receipts', function(t) {
        t.increments('id').primary();
        t.string('location');
        t.integer('total');
        t.date('date');
        t.string('image_url');
        t.string('description')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('receipts');
};

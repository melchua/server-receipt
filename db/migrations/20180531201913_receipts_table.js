
exports.up = function(knex, Promise) {
    return knex.schema.createTable('receipts', function(t) {
        t.integer('id').unsigned().primary();
        t.string('location');
        t.decimal('total');
        t.date('date');
        t.date('created_date');
        t.string('image_url');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('receipts');
};

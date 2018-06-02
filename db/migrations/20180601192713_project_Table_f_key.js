exports.up = function(knex, Promise) {
    return knex.schema.table('receipts', table => {
     table.integer('project_id');
     table.foreign('project_id').references('projects.id');
    });
   };
   
   exports.down = function(knex, Promise) {
    return knex.schema.table('receipts', function(table){
      table.dropColumn('project_id');
    });
   };
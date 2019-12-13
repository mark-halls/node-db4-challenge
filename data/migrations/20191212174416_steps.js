exports.up = function(knex) {
  return knex.schema.createTable(`steps`, tbl => {
    tbl.increments();
    tbl
      .integer(`recipe_id`)
      .unsigned()
      .notNullable()
      .references(`id`)
      .inTable(`recipes`)
      .onDelete(`CASCADE`)
      .onUpdate(`CASCADE`);
    tbl.integer(`step_number`).notNullable();
    tbl.text(`instruction`, 10000);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(`steps`);
};

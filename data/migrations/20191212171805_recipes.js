exports.up = function(knex) {
  return knex.schema.createTable(`recipes`, tbl => {
    tbl.increments();
    tbl
      .text(`name`, 255)
      .unique()
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(`recipes`);
};

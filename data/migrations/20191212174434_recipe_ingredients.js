exports.up = function(knex) {
  return knex.schema.createTable(`recipe_ingredients`, tbl => {
    tbl
      .integer(`recipe_id`)
      .unsigned()
      .notNullable()
      .references(`id`)
      .inTable(`recipes`)
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer(`ingredient_id`)
      .unsigned()
      .notNullable()
      .references(`id`)
      .inTable(`ingredients`)
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.float(`quantity`);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(`recipe_ingredients`);
};

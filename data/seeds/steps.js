exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("table_name").insert([
        { recipe_id: 1, step_number: 1, instruction: "Crack eggs into pan" },
        { recipe_id: 1, step_number: 2, instruction: "Beat thoroughly" },
        { recipe_id: 1, step_number: 3, instruction: "When cooked, serve." }
      ]);
    });
};

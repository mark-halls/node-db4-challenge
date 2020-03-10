exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "eggs" },
        { name: "egg yolks" },
        { name: "lemmon juice" },
        { name: "white pepper" },
        { name: "worcestershire sauce" },
        { name: "water" },
        { name: "butter" },
        { name: "salt" },
        { name: "white vinegar" },
        { name: "bacon" },
        { name: "muffins" }
      ]);
    });
};

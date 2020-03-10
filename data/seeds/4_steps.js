exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { recipe_id: 1, step_number: 1, instruction: "Crack eggs into pan" },
        { recipe_id: 1, step_number: 2, instruction: "Beat thoroughly" },
        { recipe_id: 1, step_number: 3, instruction: "When cooked, serve." },
        {
          recipe_id: 2,
          step_number: 1,
          instruction:
            "To Make Hollandaise: Fill the bottom of a double boiler part-way with water. Make sure that water does not touch the top pan. Bring water to a gentle simmer. In the top of the double boiler, whisk together egg yolks, lemon juice, white pepper, Worcestershire sauce, and 1 tablespoon water."
        },
        {
          recipe_id: 2,
          step_number: 2,
          instruction:
            "Add the melted butter to egg yolk mixture 1 or 2 tablespoons at a time while whisking yolks constantly. If hollandaise begins to get too thick, add a teaspoon or two of hot water. Continue whisking until all butter is incorporated. Whisk in salt, then remove from heat. Place a lid on pan to keep sauce warm."
        },
        {
          recipe_id: 2,
          step_number: 3,
          instruction:
            "Preheat oven on broiler setting. To Poach Eggs: Fill a large saucepan with 3 inches of water. Bring water to a gentle simmer, then add vinegar. Carefully break eggs into simmering water, and allow to cook for 2 1/2 to 3 minutes. Yolks should still be soft in center. Remove eggs from water with a slotted spoon and set on a warm plate"
        },
        {
          recipe_id: 2,
          step_number: 4,
          instruction:
            "While eggs are poaching, brown the bacon in a medium skillet over medium-high heat and toast the English muffins on a baking sheet under the broiler."
        },
        {
          recipe_id: 2,
          step_number: 5,
          instruction:
            "Spread toasted muffins with softened butter, and top each one with a slice of bacon, followed by one poached egg. Place 2 muffins on each plate and drizzle with hollandaise sauce. Sprinkle with chopped chives and serve immediately."
        }
      ]);
    });
};

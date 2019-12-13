const db = require(`../data/db-config`);

const getRecipes = () => {
  return db(`recipes`);
};

const getShoppingList = recipe_id => {
  return db({ ri: `recipe_ingredients` })
    .select(`i.name`, `ri.quantity`)
    .where({ recipe_id })
    .innerJoin({ i: `ingredients` }, `i.id`, `ri.ingredient_id`);
};

const getInstructions = recipe_id => {
  return db(`steps`)
    .where({ recipe_id })
    .orderBy(`step_number`, `asc`);
};

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

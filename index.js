const recipesModel = require(`./recipes/recipes-model`);

recipesModel.getRecipes().then(i => console.log(`recipes`, i));
recipesModel.getInstructions(2).then(i => console.log(`instructions`, i));
recipesModel.getShoppingList(2).then(i => console.log(`shoppinglist`, i));

const RecipeModel = require('./models/recipeModel');

const recipeData = require('./recipes.json');

RecipeModel.remove({}).then(() => {
	recipeData.map((recipe) => {
		RecipeModel.create(recipe).then((newRecipe) => {
			console.log(newRecipe);
		});
	});
});

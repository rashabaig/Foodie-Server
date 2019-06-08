const mongoose = require('../../connection');

const InstructionModel = new mongoose.Schema({
	step: String
});
const IngredientModel = new mongoose.Schema({
	ingredientName: String,
	ingredientQuantity: Number,
	ingredientUnits: String
});

const RecipeModel = new mongoose.Schema({
	name: String,
	image: String,
	prepTime: String,
	cookTime: String,
	servings: Number,
	mealType: String,
	dessert: Boolean,
	ingredients: [ IngredientModel ],
	instructions: [ InstructionModel ]
});

module.exports = mongoose.model('Recipe', RecipeModel);

const mongoose = require('../../connection');

const InstructionModel = new mongoose.Schema({
	steps: [ String ]
});
const IngredientModel = new mongoose.Schema({
	name: String,
	quantity: Number
});

const RecipeModel = new mongoose.Schema({
	name: String,
	hours: Number,
	servings: Number,
	mealType: String,
	ingredients: [ IngredientModel ],
	instructions: [ InstructionModel ]
});

module.exports = mongoose.model('Recipe', RecipeModel);

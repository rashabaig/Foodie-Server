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

const DayModel = new mongoose.Schema({
	breakfast: [ RecipeModel ],
	lunch: [ RecipeModel ],
	dinner: [ RecipeModel ]
});
const MealPlanModel = new mongoose.Schema({
	dateRange: String,
	Monday: [ DayModel ],
	Tuesday: [ DayModel ],
	Wednesday: [ DayModel ],
	Thursday: [ DayModel ],
	Friday: [ DayModel ]
});

const GroceryListModel = new mongoose.Schema({
	list: [ IngredientModel ]
});

const UserModel = new mongoose.Schema({
	firstName: String,
	lastName: String,
	userName: String,
	password: String,
	groceryList: [ GroceryListModel ],
	mealPlan: [ MealPlanModel ],
	recipes: [ RecipeModel ]
});

module.exports = mongoose.model('User', UserModel);

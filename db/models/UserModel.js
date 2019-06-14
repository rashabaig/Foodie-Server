const mongoose = require('../../connection');

const UserModel = new mongoose.Schema({
	firstName: String,
	lastName: String,
	dateOfBirth: String,
	emailAddress: String,
	userName: String,
	password: String,
	groceryList: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'GroceryList'
	}],
	mealPlan: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'MealPlan'
	}],
	recipes: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Recipe'
	}]
});

module.exports = mongoose.model('User', UserModel);

const express = require('express');
const router = express.Router();
const RecipeModel = require('../db/models/recipeModel');

//To get all recipes
router.get('/', (req, res) => {
	RecipeModel.find({}).then((allrecipes) => {
		res.json(allrecipes);
	});
});

//To get a recipe by name
router.get('/:name', (req, res) => {
	let recipeName = req.params.name;
	RecipeModel.findOne({ name: recipeName }).then((recipe) => {
		res.json(recipe);
	});
});

// To create a new recipe
router.post('/', (req, res) => {
	let newRecipe = req.body;
	RecipeModel.create(newRecipe).then((newRecipe) => {
		res.json(newRecipe);
		newRecipe.save();
	});
});

//To add a new ingredient to a recipe
router.put('/newIngredient/:recipeID', (req, res) => {
	RecipeModel.update({ _id: req.params.recipeID }, { $push: { ingredients: req.body } }).then((updatedRecipe) => {
		res.json(updatedRecipe);
	});
});

//To add a new step to a recipe
router.put('/newInstruction/:recipeID', (req, res) => {
	RecipeModel.update({ _id: req.params.recipeID }, { $push: { instructions: req.body } }).then((updatedRecipe) => {
		res.json(updatedRecipe);
	});
});

//To delete a recipe
router.delete('/:id', (req, res) => {
	RecipeModel.deleteOne({ _id: req.params.id }).then((deleted) => {
		res.json(deleted);
	});
});

//To delete an ingredient
router.put('/removeIngredient/:recipeID/:ingredientID', (req, res) => {
	RecipeModel.update(
		{ _id: req.params.recipeID },
		{ $pull: { ingredients: { _id: req.params.ingredientID } } }
	).then((updatedIngredients) => {
		res.json(updatedIngredients);
	});
});

//To delete a step from instructions
router.put('/removeStep/:recipeID/:stepID', (req, res) => {
	RecipeModel.update(
		{ _id: req.params.recipeID },
		{ $pull: { instructions: { _id: req.params.stepID } } }
	).then((updatedInstructions) => {
		res.json(updatedInstructions);
	});
});
module.exports = router;

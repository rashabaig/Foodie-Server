const express = require('express');
const router = express.Router();
const UserModel = require('../db/models/UserModel');
const RecipeModel = require('../db/models/RecipeModel');

router.put('/newRecipe/:userID', (req, res) => {
	UserModel.findOneAndUpdate({ _id: req.params.userID })
		.then((user) => {
			console.log(user);
			RecipeModel.create(req.body).then((recipe) => {
				console.log(recipe)
				user.recipes.push(recipe._id);
				// recipe.userID = user._id
				recipe.save();
				user.save();
				console.log(user);
				return res.json(user);
			});
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get('/all/:userID', (req, res) => {
	UserModel.find({ _id: req.params.userID })
		.then((user) => {
			console.log(user)
			console.log(UserModel)
			RecipeModel.find({
				_id: user[0].recipes
			}).then((obj) => {
				return res.json(obj);
			});
		})
})


module.exports = router;
const mongoose = require('../../connection');

const RecipeModel = new mongoose.Schema({
    recipeName: String,
    image: String,
    prepTime: String,
    cookTime: String,
    servings: Number,
    ingredients: [String],
    instructions: [String]
});


module.exports = mongoose.model('Recipe', RecipeModel);

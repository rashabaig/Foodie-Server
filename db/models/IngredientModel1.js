const mongoose = require('../../connection');

const IngredientModel = new mongoose.Schema({
    ingredientName: String,
    ingredientQuantity: Number,
    ingredientUnits: String
});

module.exports = mongoose.model('Ingredient', IngredientModel);
const mongoose = require('../../connection');

const GroceryListModel = new mongoose.Schema({
    list: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
    }]
});

module.exports = mongoose.model('GroceryList', GroceryListModel);

const mongoose = require('../../connection');
const DayModel = new mongoose.Schema({
    breakfast: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    lunch: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    dinner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }]
});
module.exports = mongoose.model('Day', DayModel);
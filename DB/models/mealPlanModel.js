const mongoose = require('../../connection');

const MealPlanModel = new mongoose.Schema({
    dateRange: String,
    Monday: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day'
    }],
    Tuesday: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day'
    }],
    Wednesday: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day'
    }],
    Thursday: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day'
    }],
    Friday: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day'
    }]
});

module.exports = mongoose.model('MealPlan', MealPlanModel);

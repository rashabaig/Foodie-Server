const mongoose = require('../../connection');

const InstructionModel = new mongoose.Schema({
    step: String
});

module.exports = mongoose.model('Instruction', InstructionModel);
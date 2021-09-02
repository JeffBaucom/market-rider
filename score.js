let mongoose = require('mongoose');

let ScoreSchema = new mongoose.Schema({
    score: {required: true, type: Number},
    walletId: {required: true, type: String, minlength: 5},
}, {timestamps: true});

module.exports = mongoose.model('Score', ScoreSchema);
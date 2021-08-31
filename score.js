let mongoose = require('mongoose');

let ScoreSchema = new mongoose.Schema({
    score: {required: true, type: Number},
    _wallet: {type: mongoose.Schema.Types.ObjectId, ref: 'Wallet'}
}, {timestamps: true});

module.exports = mongoose.model('Score', ScoreSchema);
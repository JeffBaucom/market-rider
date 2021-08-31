let mongoose = require('mongoose');

let WalletSchema = new mongoose.Schema({
    walletId: {required: true, type: String, minlength: 5},
    scores: [{type: mongoose.Schema.Types.ObjectId, ref: 'Score'}]
}, {timestamps: true});

module.exports = mongoose.model('Wallet', WalletSchema);
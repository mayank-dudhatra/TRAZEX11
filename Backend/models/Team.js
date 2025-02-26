// const mongoose = require('mongoose');

// const teamSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     contest: { type: mongoose.Schema.Types.ObjectId, ref: 'Contest', required: true },
//     teamName: { type: String, required: true },
//     stocks: [{ type: String, required: true }],
//     captain: { type: String, required: true },
//     viceCaptain: { type: String, required: true }
// });

// module.exports = mongoose.model('Team', teamSchema);



const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    contestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Contest', required: true },
    stocks: {
        type: [
          {
            symbol: String,
            action: String, // "buy" or "sell"
          },
        ],
        validate: {
          validator: function (stocks) {
            return stocks.length === 11; // Ensures exactly 11 stocks
          },
          message: "You must select exactly 11 stocks.",
        },
      },
    points: { type: Number, default: 0 }, // Array of stock symbols
    captain: { type: String, required: true },
    viceCaptain: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Team', teamSchema);

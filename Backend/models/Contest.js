// const mongoose = require('mongoose');

// const contestSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     entryFee: { type: Number, required: true },
//     prizePool: { type: Number, required: true },
//     teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }]
// });

// module.exports = mongoose.model('Contest', contestSchema);



const mongoose = require('mongoose');

const contestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    entryFee: { type: Number, required: true },
    totalSpots: { type: Number, required: true },
    spotsLeft: { type: Number, required: true },
    prize: { type: Number, required: true},
    firstprize: { type: Number, required: true},
    maximumteam: { type: Number, required: true},
    winpercentage: { type: Number, required: true},
    joinedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // Users who joined
}, { timestamps: true });

module.exports = mongoose.model('Contest', contestSchema);

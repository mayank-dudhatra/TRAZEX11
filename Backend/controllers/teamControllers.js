// const mongoose = require('mongoose');
// const Team = require('../models/Team');

// exports.createTeam = async (req, res) => {
//     try {
//         const { userId, contest, teamName, stocks, captain, viceCaptain } = req.body;

//         // Validate userId and contest as ObjectIds
//         if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(contest)) {
//             return res.status(400).json({ error: 'Invalid user or contest ID' });
//         }

//         // Create a new team with corrected ObjectId usage
//         const newTeam = new Team({
//             user: new mongoose.Types.ObjectId(userId),
//             contest: new mongoose.Types.ObjectId(contest),
//             teamName,
//             stocks,
//             captain,
//             viceCaptain
//         });

//         await newTeam.save();
//         res.status(201).json({ message: 'Team created successfully', team: newTeam });

//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// exports.getTeamsByUser = async (req, res) => {
//     try {
//         const { userId } = req.params;

//         // Validate userId as an ObjectId
//         if (!mongoose.Types.ObjectId.isValid(userId)) {
//             return res.status(400).json({ error: 'Invalid user ID' });
//         }

//         const teams = await Team.find({ user: new mongoose.Types.ObjectId(userId) });

//         if (!teams.length) {
//             return res.status(404).json({ error: 'No teams found for this user' });
//         }

//         res.json(teams);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };


// const Team = require('../models/Team');
// const mongoose = require('mongoose');

// // Create a new team
// exports.createTeam = async (req, res) => {
//     try {
//         const { userId, contestId, stocks, captain, viceCaptain } = req.body;

//         // Validate userId and contestId formats
//         if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(contestId)) {
//             return res.status(400).json({ error: 'Invalid user ID or contest ID format' });
//         }

//         // Ensure exactly 11 stocks are selected
//         if (!stocks || stocks.length !== 11) {
//             return res.status(400).json({ error: 'You must select exactly 11 stocks.' });
//         }

//         // Ensure Captain & Vice-Captain are in the selected stocks
//         const stockSymbols = stocks.map(s => s.symbol);
//         if (!stockSymbols.includes(captain) || !stockSymbols.includes(viceCaptain)) {
//             return res.status(400).json({ error: 'Captain and Vice-Captain must be from the selected stocks.' });
//         }

//         // Prevent Captain and Vice-Captain from being the same
//         if (captain === viceCaptain) {
//             return res.status(400).json({ error: 'Captain and Vice-Captain cannot be the same stock.' });
//         }

//         // Create the team
//         const team = new Team({ userId, contestId, stocks, captain, viceCaptain });
//         await team.save();

//         res.status(201).json({ message: 'Team created successfully', team });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Get all teams for a specific user
// exports.getTeamsByUser = async (req, res) => {
//     try {
//         const { userId } = req.params;

//         if (!mongoose.Types.ObjectId.isValid(userId)) {
//             return res.status(400).json({ error: 'Invalid user ID format' });
//         }

//         const teams = await Team.find({ userId }).populate('contestId', 'contestName');
//         res.json(teams);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Get all teams for a specific contest
// exports.getTeamsByContest = async (req, res) => {
//     try {
//         const { contestId } = req.params;

//         if (!mongoose.Types.ObjectId.isValid(contestId)) {
//             return res.status(400).json({ error: 'Invalid contest ID format' });
//         }

//         const teams = await Team.find({ contestId }).populate('userId', 'username');
//         res.json(teams);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Delete a team
// exports.deleteTeam = async (req, res) => {
//     try {
//         const { teamId } = req.params;

//         if (!mongoose.Types.ObjectId.isValid(teamId)) {
//             return res.status(400).json({ error: 'Invalid team ID format' });
//         }

//         const team = await Team.findByIdAndDelete(teamId);
//         if (!team) return res.status(404).json({ error: 'Team not found' });

//         res.json({ message: 'Team deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };






const Team = require('../models/Team');
const mongoose = require('mongoose');

// Function to calculate points based on the given system
const calculatePoints = (stocks, captain, viceCaptain) => {
    let totalPoints = 0;

    stocks.forEach(stock => {
        let points = 0;

        if (stock.action === "buy") {
            if (stock.priceChange === 0.01) points += 1;
            if (stock.priceChange === -0.01) points -= 0.2;
            if (stock.highDay === 7) points += 5;
            if (stock.highDay === 30) points += 10;
            if (stock.highDay === 180) points += 20;
            if (stock.highDay === 365) points += 50;
            if (stock.lowDay === 7) points -= 1;
            if (stock.lowDay === 30) points -= 2;
            if (stock.lowDay === 180) points -= 4;
            if (stock.lowDay === 365) points -= 10;
            if (stock.LTP === "High") points += 100;
            if (stock.LTP === "Low") points -= 20;
            if (stock.open === "High") points += 100;
            if (stock.open === "Low") points -= 20;
        } 
        else if (stock.action === "sell") {
            if (stock.priceChange === 0.01) points -= 0.2;
            if (stock.priceChange === -0.01) points += 1;
            if (stock.highDay === 7) points -= 1;
            if (stock.highDay === 30) points -= 2;
            if (stock.highDay === 180) points -= 4;
            if (stock.highDay === 365) points -= 10;
            if (stock.lowDay === 7) points += 5;
            if (stock.lowDay === 30) points += 10;
            if (stock.lowDay === 180) points += 20;
            if (stock.lowDay === 365) points += 50;
            if (stock.LTP === "High") points -= 20;
            if (stock.LTP === "Low") points += 100;
            if (stock.open === "High") points -= 20;
            if (stock.open === "Low") points += 100;
        }

        // Apply Captain (2x) and Vice-Captain (1.5x) multipliers
        if (stock.symbol === captain) {
            points *= 2;
        } else if (stock.symbol === viceCaptain) {
            points *= 1.5;
        }

        totalPoints += points;
    });

    return totalPoints;
};

// Create a new team
exports.createTeam = async (req, res) => {
    try {
        const { userId, contestId, stocks, captain, viceCaptain } = req.body;

        if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(contestId)) {
            return res.status(400).json({ error: 'Invalid user ID or contest ID format' });
        }

        if (stocks.length !== 11) {
            return res.status(400).json({ error: 'You must select exactly 11 stocks.' });
        }

        // Calculate points
        const totalPoints = calculatePoints(stocks, captain, viceCaptain);

        const team = new Team({ userId, contestId, stocks, captain, viceCaptain, points: totalPoints });
        await team.save();

        res.status(201).json({ message: 'Team created successfully', team });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all teams for a specific user
exports.getTeamsByUser = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ error: 'Invalid user ID format' });
        }

        const teams = await Team.find({ userId }).populate('contestId', 'contestName');
        res.json(teams);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all teams for a specific contest
exports.getTeamsByContest = async (req, res) => {
    try {
        const { contestId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(contestId)) {
            return res.status(400).json({ error: 'Invalid contest ID format' });
        }

        const teams = await Team.find({ contestId }).populate('userId', 'username');
        res.json(teams);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a team
exports.deleteTeam = async (req, res) => {
    try {
        const { teamId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(teamId)) {
            return res.status(400).json({ error: 'Invalid team ID format' });
        }

        const team = await Team.findByIdAndDelete(teamId);
        if (!team) return res.status(404).json({ error: 'Team not found' });

        res.json({ message: 'Team deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

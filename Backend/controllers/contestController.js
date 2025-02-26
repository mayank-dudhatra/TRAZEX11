// const Contest = require('../models/Contest');
// const mongoose = require('mongoose');

// // Create a new contest
// exports.createContest = async (req, res) => {
//     try {
//         const { name, entryFee, totalSpots, prize, firstprize, totalteam, winpercentage } = req.body;

//         const contest = new Contest({
//             name,
//             entryFee,
//             totalSpots,
//             spotsLeft: totalSpots, // Initialize spotsLeft as totalSpots
//             prize,
//             firstprize,
//             totalteam,
//             winpercentage,
//             joinedUsers: []
//         });

//         await contest.save();
//         res.status(201).json({ message: 'Contest created successfully', contest });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Get all contests
// exports.getAllContests = async (req, res) => {
//     try {
//         const contests = await Contest.find();
//         res.json(contests);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Get contest details by ID
// exports.getContestById = async (req, res) => {
//     try {
//         const { contestId } = req.params;

//         if (!mongoose.Types.ObjectId.isValid(contestId)) {
//             return res.status(400).json({ error: 'Invalid contest ID format' });
//         }

//         const contest = await Contest.findById(contestId).populate('joinedUsers', 'username');
//         if (!contest) return res.status(404).json({ error: 'Contest not found' });

//         res.json(contest);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // User joins a contest
// exports.joinContest = async (req, res) => {
//     try {
//         const { userId, contestId } = req.body;

//         if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(contestId)) {
//             return res.status(400).json({ error: 'Invalid user ID or contest ID format' });
//         }

//         const contest = await Contest.findById(contestId);
//         if (!contest) return res.status(404).json({ error: 'Contest not found' });

//         if (contest.spotsLeft <= 0) {
//             return res.status(400).json({ error: 'Contest is full' });
//         }

//         if (contest.joinedUsers.includes(userId)) {
//             return res.status(400).json({ error: 'User has already joined this contest' });
//         }

//         contest.joinedUsers.push(userId);
//         contest.spotsLeft -= 1; // Decrease spotsLeft
//         await contest.save();

//         res.json({ message: 'User joined the contest successfully', spotsLeft: contest.spotsLeft });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // User leaves a contest (optional)
// exports.leaveContest = async (req, res) => {
//     try {
//         const { userId, contestId } = req.body;

//         if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(contestId)) {
//             return res.status(400).json({ error: 'Invalid user ID or contest ID format' });
//         }

//         const contest = await Contest.findById(contestId);
//         if (!contest) return res.status(404).json({ error: 'Contest not found' });

//         if (!contest.joinedUsers.includes(userId)) {
//             return res.status(400).json({ error: 'User has not joined this contest' });
//         }

//         contest.joinedUsers = contest.joinedUsers.filter(id => id.toString() !== userId);
//         contest.spotsLeft += 1; // Increase spotsLeft
//         await contest.save();

//         res.json({ message: 'User left the contest successfully', spotsLeft: contest.spotsLeft });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Delete a contest
// exports.deleteContest = async (req, res) => {
//     try {
//         const { contestId } = req.params;

//         if (!mongoose.Types.ObjectId.isValid(contestId)) {
//             return res.status(400).json({ error: 'Invalid contest ID format' });
//         }

//         const contest = await Contest.findByIdAndDelete(contestId);
//         if (!contest) return res.status(404).json({ error: 'Contest not found' });

//         res.json({ message: 'Contest deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

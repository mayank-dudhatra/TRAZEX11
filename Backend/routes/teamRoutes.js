// const express = require('express');
// const router = express.Router();
// const teamController = require('../controllers/teamControllers');

// // Route to create a new team
// router.post('/teams', teamController.createTeam);

// // Route to get teams by user ID
// router.get('/teams/user/:userId', teamController.getTeamsByUser);

// module.exports = router;





const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamControllers');

router.post('/teams', teamController.createTeam);
router.get('/teams/user/:userId', teamController.getTeamsByUser);
router.get('/teams/contest/:contestId', teamController.getTeamsByContest);
router.delete('/teams/:teamId', teamController.deleteTeam);

module.exports = router;

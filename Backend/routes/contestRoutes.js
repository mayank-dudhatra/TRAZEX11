const express = require('express');
const router = express.Router();
const contestController = require('../controllers/contestController');

router.post('/contests', contestController.createContest);
router.get('/contests', contestController.getAllContests);
router.get('/contests/:contestId', contestController.getContestById);
router.post('/contests/join', contestController.joinContest);
router.delete('/contests/:contestId', contestController.deleteContest);

module.exports = router;

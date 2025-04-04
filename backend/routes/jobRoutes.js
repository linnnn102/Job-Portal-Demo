const express = require('express');
const router = express.Router();
const { getAllJobs, createJob } = require('../controllers/jobController');

// Route for fetching jobs (used by employees)
router.get('/', getAllJobs);

// Route for creating jobs (used by admin)
router.post('/job', createJob);

module.exports = router; 
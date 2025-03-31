const express = require('express');
const router = express.Router();
const { getAllJobs, createJob } = require('../controllers/jobController');

router.get('/', getAllJobs);
router.post('/create', createJob);

module.exports = router; 
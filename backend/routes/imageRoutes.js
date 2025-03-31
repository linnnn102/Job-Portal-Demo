

const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { uploadImage } = require('../controllers/imageController');

router.post('/uploadImage', upload.single('image'), uploadImage);

module.exports = router;
const User = require('../models/User');
const path = require('path');
const {isValidImg} = require('../utils/validatorsImg');

const uploadImage = async (req, res) => {
    const { email } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ error: 'User not found.' });
    }

    // Check if user already has an image
    if (user.imageUrl) {
        return res.status(400).json({ error: 'Image already exists for this user.' });
    }

    if (!req.file) {
        return res.status(400).json({ error: 'No image uploaded.' });
    }

    if (!isValidImg(req.file)) {
        return res.status(400).json({ error: 'Invalid file type. Only JPEG, PNG, and GIF are allowed.' });
    }

    const filePath = `/images/${req.file.filename}`;
    user.imageUrl = filePath;
    await user.save();

    res.status(201).json({
        message: 'Image uploaded successfully.',
        filePath,
    });
};

module.exports = { uploadImage };
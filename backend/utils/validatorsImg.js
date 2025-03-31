const path = require('path');
const isValidImg = (file) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    return mimetype && extname
};

module.exports = {
    isValidImg
};
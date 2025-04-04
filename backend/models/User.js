const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required.'],
        match: [/^[A-Za-z\s]+$/, 'Full name can only contain alphabetic characters.'],
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Invalid email format.'],
    },
    password: {
        type: String,
        required: [true, 'Password is required.'],
        minlength: [8, 'Password must be at least 8 characters long.'],
    },
    type: {
        type: String,
        required: [true, 'User type is required.'],
        enum: {
            values: ['admin', 'employee'],
            message: 'User type must be either "admin" or "employee".'
        }
    },
    imageUrl: {
        type: String,
    },
});

module.exports = mongoose.model('User', userSchema);
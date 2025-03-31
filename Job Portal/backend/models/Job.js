const mongoose = require('mongoose');


// _id
// 67e955d35af6243a38700bb0

// ObjectId
// title
// Software Engineer

// String
// company
// Google

// String
// location
// Mountain View, CA

// String
// description
// Join our team to work on cutting-edge technology.

// String
// salary
// 150000

// String
// type
// Full-time

// String
// createdAt
// 2025-03-30T14:31:47.520+00:00

// Date
// __v
// 0

// Int32



const jobSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requiredSkills: {
        type: [String],
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    lastUpdated: {
        type: String,
        required: true
    },
    applyLink: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Job1', jobSchema); 
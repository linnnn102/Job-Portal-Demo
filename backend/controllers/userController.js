const bcrypt = require('bcryptjs');
const User = require('../models/User');
const {
    isValidEmail,
    isValidFullName,
    isValidPassword,
} = require('../utils/validatorsUser');

// Create a new user
const createUser = async (req, res) => {
    const { fullName, email, password, type } = req.body;

    // Basic input validations
    if (!fullName || !email || !password || !type) {
        return res.status(400).json({ error: 'Validation failed: All fields are required.' });
    }

    // Validate user type
    if (!['admin', 'employee'].includes(type)) {
        return res.status(400).json({ error: 'Validation failed: User type must be either "admin" or "employee".' });
    }

    // Validate full name (only alphabets and spaces)
    if (!isValidFullName(fullName)) {
        return res
            .status(400)
            .json({ error: 'Validation failed: Full name can only contain alphabetic characters.' });
    }

    // Validate email format
    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Validation failed: Invalid email format.' });
    }

    // Validate strong password
    if (!isValidPassword(password)) {
        return res.status(400).json({
            error:
                'Validation failed: Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.',
        });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const user = new User({
            fullName,
            email,
            password: hashedPassword,
            type
        });
        await user.save();
        res.status(201).json({ message: 'User created successfully.' });
    } catch (err) {
        // Handle unique email constraint violation
        if (err.code === 11000) {
            return res.status(400).json({ error: 'Email already exists.' });
        }
        res.status(500).json({ error: 'Server error.' });
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    const users = await User.find().select('-password');
    res.status(200).json({ users });
};

// Update user
const updateUser = async (req, res) => {
    const { email, fullName, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ error: 'User not found.' });
    }

    // Validate full name (only alphabets and spaces)
    if (!isValidFullName(fullName)) {
        return res
            .status(400)
            .json({ error: 'Validation failed: Full name can only contain alphabetic characters.' });
    }

    // Validate strong password
    if (!isValidPassword(password)) {
        return res.status(400).json({
            error:
                'Validation failed: Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.',
        });
    }

    if (fullName) user.fullName = fullName;
    if (password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
    }

    await user.save();
    res.status(200).json({ message: 'User updated successfully.' });
};

// Delete user
const deleteUser = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOneAndDelete({ email });

    if (!user) {
        return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json({ message: 'User deleted successfully.' });
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid user' });
        }

        console.log('Found user:', { 
            id: user._id, 
            email: user.email, 
            type: user.type 
        });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // If password matches, respond with success and user info
        const response = {
            message: 'Login successful',
            userId: user._id,
            userType: user.type
        };
        
        console.log('Sending response:', response);
        res.status(200).json(response);
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).send('Server error');
    }
};

// Export all functions
module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
    loginUser
};
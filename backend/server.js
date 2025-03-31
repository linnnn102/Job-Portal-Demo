const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const swaggerDocs = require('./swagger');
const cors = require('cors');
const { initializeJobs } = require('./controllers/jobController');

dotenv.config();
const app = express();

// CORS Middleware
app.use(cors({
    origin: ['http://localhost:5004'], // Allow requests from React frontend ports
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

// Middleware
app.use(express.json());

// Import Routes
const userRoutes = require('./routes/userRoutes');
const imageRoutes = require('./routes/imageRoutes');
const jobRoutes = require('./routes/jobRoutes');

// Mount routes
app.use('/api/auth', userRoutes);
app.use('/api/user', imageRoutes);
app.use('/api/jobs', jobRoutes);

// Connect to MongoDB
connectDB().then(() => {
    // Initialize sample jobs after database connection
    initializeJobs();
});

const PORT = process.env.PORT || 5003;

// Serve companies.json via /api/companies
app.get('/api/companies', (req, res) => {
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, 'data', 'companies.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Failed to load company data.' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Swagger documentation
swaggerDocs(app, PORT);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('Available routes:');
    console.log('- POST /api/auth/login - Login user');
    console.log('- POST /api/auth/register - Register new user');
    console.log('- GET /api/jobs - Get all jobs');
    console.log('- POST /api/jobs/create - Create a new job');
});
const Job = require('../models/Job');

// Get all jobs
const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json({ jobs });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch jobs.' });
    }
};

// Create a new job
const createJob = async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json({ message: 'Job created successfully', job });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create job.' });
    }
};

// Initialize jobs with the required data
const initializeJobs = async () => {
    try {
        const count = await Job.countDocuments();
        if (count === 0) {
            const jobPosts = [
                {
                    id: 1,
                    title: "Full Stack Developer",
                    description: "Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.",
                    requiredSkills: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
                    salary: "$80,000 - $120,000",
                    lastUpdated: "Last updated 2 days ago",
                    applyLink: "https://example.com/apply/full-stack-developer",
                },
                {
                    id: 2,
                    title: "Digital Marketing Specialist",
                    description: "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
                    requiredSkills: ["SEO", "SEM", "Social Media Marketing", "Content Strategy", "Analytics"],
                    salary: "$60,000 - $85,000",
                    lastUpdated: "Last updated 1 day ago",
                    applyLink: "https://example.com/apply/digital-marketing-specialist",
                },
                {
                    id: 3,
                    title: "UX/UI Designer",
                    description: "Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.",
                    requiredSkills: ["Figma", "Adobe XD", "User Research", "Prototyping", "UI Design"],
                    salary: "$70,000 - $100,000",
                    lastUpdated: "Last updated 4 hours ago",
                    applyLink: "https://example.com/apply/ux-ui-designer",
                },
                {
                    id: 4,
                    title: "Data Scientist",
                    description: "Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.",
                    requiredSkills: ["Python", "R", "Machine Learning", "SQL", "Data Visualization"],
                    salary: "$90,000 - $140,000",
                    lastUpdated: "Last updated 3 days ago",
                    applyLink: "https://example.com/apply/data-scientist",
                },
                {
                    id: 5,
                    title: "Customer Support Representative",
                    description: "Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.",
                    requiredSkills: ["Customer Service", "Problem Solving", "Communication", "CRM Software", "Ticketing Systems"],
                    salary: "$45,000 - $60,000",
                    lastUpdated: "Last updated 6 hours ago",
                    applyLink: "https://example.com/apply/customer-support-representative",
                },
                {
                    id: 6,
                    title: "Project Manager",
                    description: "Guide and coordinate project teams to ensure successful project delivery. Strong organizational and leadership skills are required.",
                    requiredSkills: ["Project Management", "Agile", "Team Leadership", "Budgeting", "Risk Management"],
                    salary: "$85,000 - $130,000",
                    lastUpdated: "Last updated 1 week ago",
                    applyLink: "https://example.com/apply/project-manager",
                }
            ];

            await Job.insertMany(jobPosts);
            console.log('Sample jobs initialized');
        }
    } catch (err) {
        console.error('Error initializing jobs:', err);
    }
};

module.exports = {
    getAllJobs,
    createJob,
    initializeJobs
}; 
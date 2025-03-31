# Job Portal Application

A modern job portal application built with React frontend and Node.js backend, featuring user authentication, job listings, and company showcases.

## Project Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn package manager

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```
PORT=5003
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the backend server:
```bash
node server.js
```
The backend will run on http://localhost:5003

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```
REACT_APP_API_URL=http://localhost:5003
```

4. Start the frontend development server:
```bash
npm start
```
The frontend will run on http://localhost:5004

## Folder Structure

```
/job-portal
├── /backend
│   ├── /config
│   │   └── db.js         # MongoDB connection configuration
│   ├── /controllers
│   │   ├── imageController.js  # Authentication logic
│   │   ├── userController.js   # Authentication logic
│   │   └── jobController.js   # Job-related operations
│   ├── /data
│   │   └── companies.json # Sample company data
│   ├── /models
│   │   ├── User.js       # User schema and model
│   │   └── Job.js        # Job schema and model
│   ├── /routes
│   │   ├── imageRoutes.js # Image routes
│   │   ├── userRoutes.js # User authentication routes
│   │   ├── sw.js # Swagger routes
│   │   └── jobRoutes.js  # Job-related routes
│   ├── /utils
│   │   ├── validatorsImg.js       # Image validation
│   │   └── validatorsUser.js        # User validation
│   ├── server.js         # Main backend server
│   └── .env              # Environment variables
│
├── /frontend
│   ├── /public
│   │   └── index.html    # Main HTML file
│   ├── /src
│   │   ├── /components
│   │   │   ├── Navbar.jsx
│   │   │   └── PrivateRoute.jsx
│   │   ├── /pages
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── JobListings.jsx
│   │   │   ├── CompanyShowcase.jsx
│   │   │   └── *.css     # CSS styles
│   │   ├── /services
│   │   │   └── api.js    # API configuration
│   │   ├── App.js       # Main React component
│   │   └── index.jsx    # Application entry point
│   ├── package.json
│   └── .env              # Frontend environment variables
└── README.md
```

## Navigation

### Public Routes
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/login` - Login page

### Protected Routes (Requires Authentication)
- `/jobs` - Job listings page
- `/companies` - Company showcase page

## Key Functionalities

### Authentication
- User registration
- User login with JWT authentication
- Protected routes
- Session management

### Job Management
- View all job listings
- Detailed job information display
- Job search and filtering
- Job application process

### Company Showcase
- Company profiles display
- Company information
- Company-specific job listings

### User Interface
- Responsive design
- Modern and intuitive navigation
- Interactive job cards
- Dynamic content loading

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

#### Jobs
- `GET /api/jobs` - Get all job listings
- `POST /api/jobs/create` - Create new job listing

#### Companies
- `GET /api/companies` - Get company information

## Technologies Used
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Styling: CSS3
- API: RESTful

## Development
- The application uses modern React practices including hooks and functional components
- RESTful API architecture
- Secure authentication with JWT
- Responsive design for all screen sizes
- Error handling and loading states
- Environment variable configuration for different deployment environments
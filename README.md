# Job Portal Application

A modern job portal application built with React frontend and Node.js backend, featuring user authentication, role-based access control, job listings, and company showcases.

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

## User Roles

The application supports two types of users:

### Admin Users
- Can manage users
- Can create new job listings
- Access to admin dashboard
- Can view all job listings

### Employee Users
- Can view job listings
- Can apply for jobs
- Access to company showcase

## API Endpoints

### Authentication
- `POST /user/create` - Register new user
- `POST /user/login` - User login
- `GET /users` - Get all users (Admin only)

### Jobs
- `GET /jobs` - Get all job listings (Employee access)
- `POST /create/job` - Create new job listing (Admin access)

### Companies
- `GET /api/companies` - Get company information

### Images
- `POST /api/user/uploadImage` - Upload user profile image

## Navigation

### Public Routes
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/login` - Login page

### Protected Routes (Employee)
- `/jobs` - Job listings page
- `/companies` - Company showcase page

### Protected Routes (Admin)
- `/admin/users` - User management
- `/add-job` - Create new job listing

## Technologies Used
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Styling: CSS3
- API: RESTful

## Development
- Role-based access control (RBAC)
- Modern React practices including hooks and functional components
- RESTful API architecture
- Secure authentication with JWT
- Responsive design for all screen sizes
- Error handling and loading states
- Environment variable configuration for different deployment environments
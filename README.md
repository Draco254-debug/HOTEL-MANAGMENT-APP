Hotel Management App

A full-stack web application for managing hotel operations, bookings, and user authentication. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

![App Screenshot](https://via.placeholder.com/800x400?text=Hotel+Management+App+Screenshot)

## Features

- **User Authentication**
  - Registration & Login with JWT
  - Role-based access (User/Admin)
- **Hotel Management**
  - Create/View hotels with amenities
  - Manage hotel rooms
- **Booking System**
  - Room availability checking
  - Booking reservations
- **Admin Dashboard**
  - Manage all hotels and bookings
  - View system statistics
- **Responsive UI**
  - Built with Material-UI components

## Technologies Used

- **Backend**
  - Node.js & Express.js
  - MongoDB & Mongoose
  - JWT Authentication
  - Bcrypt.js for password hashing
- **Frontend**
  - React.js with Hooks
  - React Router v6
  - Material-UI (MUI)
  - Axios for API calls

## Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas cluster)
- NPM/Yarn package manager

## Installation

1. **Clone the repository**
bash
git clone https://github.com/yourusername/hotel-management-app.git
cd hotel-management-app


2. **Backend Setup**
bash
cd backend
npm install
cp .env.example .env
# Update .env with your credentials


3. **Frontend Setup**
bash
cd ../frontend
npm install


## Configuration

1. **Backend Environment (.env)**

MONGODB_URI=mongodb://localhost:27017/hotel_db
JWT_SECRET=your_strong_secret_here
PORT=5000


2. **Start MongoDB Service**
bash
mongod


## Running the Application

1. **Start Backend Server**
bash
cd backend
npm start


2. **Start Frontend Development Server**
bash
cd frontend
npm run dev


The app will be available at:
- Backend: `http://localhost:5000`
- Frontend: `http://localhost:5173`

## Project Structure


hotel-management-app/
├── backend/
│   ├── models/          # MongoDB models
│   │   ├── User.js
│   │   ├── Hotel.js
│   │   ├── Room.js
│   │   └── Booking.js
│   ├── routes/         # API routes
│   │   ├── auth.js
│   │   ├── hotels.js
│   │   ├── bookings.js
│   │   └── admin.js
│   ├── middleware/     # Authentication middleware
│   │   ├── auth.js
│   │   └── admin.js
│   └── server.js       # Main server file
│
└── frontend/
    ├── src/
    │   ├── components/ # Reusable components
    │   ├── pages/      # Application views
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Hotels.jsx
    │   │   └── Dashboard.jsx
    │   ├── App.jsx     # Main application router
    │   └── main.jsx    # React entry point
    └── package.json


## API Endpoints

| Method | Endpoint              | Description                | Access     |
|--------|-----------------------|----------------------------|------------|
| POST   | /api/auth/register    | User registration          | Public     |
| POST   | /api/auth/login       | User login                 | Public     |
| GET    | /api/hotels           | Get all hotels             | Public     |
| POST   | /api/hotels           | Create new hotel           | Admin      |
| GET    | /api/rooms            | Get available rooms        | Public     |
| POST   | /api/bookings         | Create booking             | User       |
| GET    | /api/admin/stats      | Get system statistics      | Admin      |

## Testing

Use API clients like [Thunder Client](https://www.thunderclient.com/) or Postman:

**Sample Registration Request:**
http
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}


**Sample Login Request:**
http
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}


## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- Material-UI for UI components
- MongoDB Atlas for cloud database
- JWT for authentication
- React community for awesome tools


This README provides:
- Comprehensive project overview
- Clear installation instructions
- API documentation
- Development guidelines
- Contribution workflow
- License information

You can customize it further by:
1. Adding actual screenshots
2. Including deployment instructions
3. Adding test coverage information
4. Expanding the FAQ section
5. Including contact information

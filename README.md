# Udaan Lead Management System

## Project Overview
Udaan Lead Management System is a comprehensive platform designed to streamline the management of leads, interactions, and performance metrics for key account managers (KAMs). It includes features for task planning, performance tracking, user authentication, and detailed reporting, making it a robust solution for sales teams.

---
## Live Demo
Access the live versions of the frontend and backend applications through the links below:

- **Live Application**: https://udankamdevanshu.netlify.app
---
## System Requirements
### Backend
- **Node.js**: v16 or later
- **MongoDB**: v4.0 or later
- **npm/yarn**: v7 or later

### Frontend
- **React**: v18 or later
- **Node.js**: v16 or later
- **npm/yarn**: v7 or later

---

## Installation Instructions
### 1. Clone the Repository
```bash
$ git clone https://github.com/abhay-59/KAM
$ cd udaan-lead-management
```

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   $ cd backend
   ```
2. Install dependencies:
   ```bash
   $ npm install
   ```
3. Configure `.env` file with the following variables:
   ```env
   MONGO_URI=your uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   $ npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   $ cd frontend
   ```
2. Install dependencies:
   ```bash
   $ npm install
   ```
3. Start the frontend server:
   ```bash
   $ npm start
   ```

---

## Running Instructions
### Start Backend
```bash
$ cd backend
$ npm run dev
```

### Start Frontend
```bash
$ cd frontend
$ npm start
```

Access the application at `http://localhost:5000`.

---

## Test Execution Guide
### Backend Tests
1. Navigate to the backend directory:
   ```bash
   $ cd backend
   ```
2. Run tests:
   ```bash
   $ npm test
   ```

### Frontend Tests
1. Navigate to the frontend directory:
   ```bash
   $ cd frontend
   ```
2. Run tests:
   ```bash
   $ npm test
   ```

---

## API Documentation
### Authentication
- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login with email and password.

### Restaurants
- **GET** `/api/restaurants`: Fetch all restaurants.
- **POST** `/api/restaurants`: Create a new restaurant.
- **PUT** `/api/restaurants/:id`: Update a restaurant.
- **DELETE** `/api/restaurants/:id`: Delete a restaurant.

### Performance
- **GET** `/api/performance`: Fetch performance metrics for the current month.

### Interactions
- **GET** `/api/calls/today`: Fetch today’s interactions (calls, emails, orders).

---

## Sample Usage Examples
### Fetch Today’s Tasks
Request:
```bash
GET /api/calls/today
Authorization: Bearer <token>
```
Response:
```json
{
  "interactions": [
    {
      "_id": "12345",
      "type": "Call",
      "restaurantName": "ABC Restaurant",
      "contactName": "John Doe",
      "time": "10:00",
      "status": "Pending"
    }
  ]
}
```

---

## Code Setup Process
1. Clone the repository.
2. Set up environment variables in the backend.
3. Install dependencies for both backend and frontend.
4. Start both servers.

---

## Application Running
1. Access the app at `http://localhost:5000`.
2. Register or login as a user.
3. Navigate to the dashboard to view and manage tasks and performance metrics.

---

## Major Features Demonstration
### Task Management
- View and manage tasks (calls, emails, orders) for the day.
- Track completed and pending tasks.

### Performance Metrics
- Identify well-performing and underperforming accounts.
- View aggregated interaction data for the current month.

### User Management
- Register and log in securely.
- Assign restaurants to KAMs and reassign as needed.

---

## Sample Inputs/Outputs
### Create a Restaurant
Request:
```json
{
  "name": "XYZ Restaurant",
  "address": "123 Main Street",
  "city": "Metropolis",
  "state": "NY",
  "zipcode": "12345",
  "status": "Active"
}
```
Response:
```json
{
  "message": "Restaurant created successfully.",
  "data": {
    "_id": "12345",
    "name": "XYZ Restaurant",
    ...
  }
}
```

---


![Screenshot 2025-01-05 184317](https://github.com/user-attachments/assets/9864aa45-dd44-4a3d-8e7f-171db74f5f2d)
![Screenshot 2025-01-05 184449](https://github.com/user-attachments/assets/228cfbf1-664b-47c7-8302-811f79f831e0)
![Screenshot 2025-01-05 184602](https://github.com/user-attachments/assets/4c634e0b-3769-40c1-b9dc-1e1dbc641425)
![Screenshot 2025-01-05 184635](https://github.com/user-attachments/assets/88492a2c-6d0f-4218-b301-545a14fb3a6c)
![Screenshot 2025-01-05 185415](https://github.com/user-attachments/assets/5b2b44d7-f90e-47df-a0d5-136bec182cf6)
![image](https://github.com/user-attachments/assets/2080957b-1f4d-4780-b609-5e3af1f2da33)
![image](https://github.com/user-attachments/assets/518593bc-a617-4d4b-af07-166c156e3eb5)
![image](https://github.com/user-attachments/assets/c14cf31c-1fe2-45ea-9b84-3a4f704d7123)












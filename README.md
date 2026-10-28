# Student Management System

A web-based Student Management System built using HTML, CSS, JavaScript, Node.js, and Express.js. The application allows users to manage student records through a frontend connected to a REST API.

## Features

* Add student records
* View all students
* Search students by name
* Update student details
* Delete student records
* Validate student information on the backend
* Organize backend code using separate routes and controllers
* Handle errors using middleware

## Technologies Used

**Frontend**

* HTML
* CSS
* JavaScript
* Fetch API

**Backend**

* Node.js
* Express.js
* REST API

## Project Structure

```text
student-management-system/
├── practice.html
├── package.json
├── package-lock.json
├── .gitignore
└── backend/
    ├── index.js
    ├── package.json
    ├── controllers/
    │   └── studentController.js
    ├── data/
    │   └── studentStore.js
    ├── middleware/
    │   └── errorMiddleware.js
    └── routes/
        └── studentsRoutes.js
```

## API Endpoints

| Method | Endpoint               | Description             |
| ------ | ---------------------- | ----------------------- |
| GET    | `/students`            | Retrieve all students   |
| GET    | `/students?name=Pavan` | Search students by name |
| POST   | `/students`            | Add a student           |
| PUT    | `/students/:id`        | Update a student        |
| DELETE | `/students/:id`        | Delete a student        |

## How to Run

### 1. Install dependencies

Open a terminal in the backend directory and run:

```bash
npm install
```

### 2. Start the backend server

```bash
node index.js
```

The server runs on:

`http://localhost:3000`

### 3. Open the frontend

Open `practice.html` in your browser while the backend server is running.

The frontend sends HTTP requests to the local Express API.

## Current Limitation

Student records are currently stored in an in-memory array. The records are lost when the backend server restarts.

Database integration is planned as a future improvement.

## Future Improvements

* Integrate MySQL for persistent storage
* Improve input validation and error handling
* Deploy the frontend and backend
* Add automated API tests

## Author

Pavan Goud Vemula

GitHub: [pavangoudvemula](https://github.com/pavangoudvemula)

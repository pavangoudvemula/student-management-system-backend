# Student Management System

A full-stack Student Management System built using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL. The application allows users to manage student records through a frontend connected to a REST API and a MySQL database.

## Features

* Add new student records.
* View all students.
* Search students by name.
* Update existing student records.
* Delete student records.
* Validate student information on the backend.
* Store student records persistently in MySQL.
* Use environment variables to keep database credentials out of the source code.
* Handle API errors through Express middleware.

## Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript
* Fetch API

**Backend**

* Node.js
* Express.js
* REST API
* MySQL2
* dotenv

**Database**

* MySQL

## Project Structure

```text
student-management-system/
├── practice.html
├── README.md
├── .gitignore
└── backend/
    ├── index.js
    ├── db.js
    ├── package.json
    ├── package-lock.json
    ├── .env                 # Local configuration; not committed
    ├── controllers/
    │   └── studentController.js
    ├── routes/
    │   └── studentsRoutes.js
    ├── middleware/
    │   └── errorMiddleware.js
    └── data/
        └── studentStore.js  # Legacy array-based storage
```

## Prerequisites

Install the following before running the application:

* Node.js and npm
* MySQL Server
* A web browser

## Database Setup

### 1. Create the database

Open MySQL Workbench and execute:

```sql
CREATE DATABASE student_management;

USE student_management;
```

If the database already exists, use it instead of creating it again.

### 2. Create the students table

Execute the following SQL:

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    age INT,
    course VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    branch VARCHAR(10),
    perc DECIMAL(5,2)
);
```

The `id` column automatically generates a unique identifier for each student.

The `created_at` column records when a student record is created.

The `name`, `branch`, and `perc` fields are used by the current student CRUD API.

## Environment Configuration

Database credentials are stored in a local `.env` file instead of being hardcoded in JavaScript.

Create `backend/.env` with the following configuration:

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=student_management
```

Replace `your_mysql_password` with your actual MySQL password.

**Security note:** Never commit your real `.env` file or database password to GitHub. The `.env` file should be ignored by Git.

The `backend/db.js` file uses `dotenv` to load these environment variables and `mysql2` to establish the database connection.

## Installation and Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

Navigate to the downloaded project directory.

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure the database

Make sure MySQL Server is running, the database and table exist, and `backend/.env` contains the correct local credentials.

### 4. Start the backend server

```bash
node index.js
```

The server runs on port `3000`.

When the database connection succeeds, the terminal displays a message confirming the MySQL connection.

### 5. Open the frontend

Open `practice.html` in your browser.

Keep the backend server running while using the application.

## API Endpoints

The backend provides the following student management operations:

| Method | Endpoint               | Description                       |
| ------ | ---------------------- | --------------------------------- |
| GET    | `/students`            | Retrieve all students             |
| GET    | `/students?name=Pavan` | Search for students by exact name |
| POST   | `/students`            | Add a student                     |
| PUT    | `/students/:id`        | Update a student by ID            |
| DELETE | `/students/:id`        | Delete a student by ID            |

These endpoints assume the student routes are mounted at `/students` in `index.js`.

### Example: Add a Student

**POST** `/students`

Request body:

```json
{
    "name": "Pavan",
    "branch": "CSE",
    "perc": 85.5
}
```

The API validates the student data before inserting the record into MySQL.

### Example: Update a Student

**PUT** `/students/1`

Request body:

```json
{
    "name": "Pavan Goud",
    "branch": "CSE",
    "perc": 90.5
}
```

### Example: Delete a Student

**DELETE** `/students/1`

The API deletes the student whose ID is `1`, if that record exists.

## Data Persistence

Student records are stored in the MySQL database rather than only in an in-memory JavaScript array.

This means records remain available after the Node.js server is stopped and restarted, as long as the database and its data remain intact.

## Future Improvements

* Improve error handling and validation.
* Add pagination and sorting.
* Implement authentication and authorization.
* Add email and course management features.
* Improve the frontend user experience.
* Deploy the application to a hosting platform.

## Author

**Pavan Goud Vemula**

GitHub: [pavangoudvemula](https://github.com/pavangoudvemula)

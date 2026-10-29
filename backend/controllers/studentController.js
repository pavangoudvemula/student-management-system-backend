const db = require("../db");

function getStudents(req, res, next) {
const name = req.query.name;


let sql = "SELECT * FROM students";
let values = [];

if (name !== undefined) {
    sql += " WHERE name = ?";
    values.push(name);
}

db.query(sql, values, (err, results) => {
    if (err) return next(err);
    return res.status(200).json(results);
});


}

function addStudent(req, res, next) {
const student = req.body;


if (
    !student ||
    typeof student.name !== "string" ||
    student.name.trim() === "" ||
    !["CSE", "ECE", "EEE", "CSM", "CSD"].includes(student.branch) ||
    typeof student.perc !== "number" ||
    !Number.isFinite(student.perc) ||
    student.perc < 0 ||
    student.perc > 100
) {
    return res.status(400).send("Student addition unsuccessful");
}

const sql =
    "INSERT INTO students (name, branch, perc) VALUES (?, ?, ?)";

db.query(
    sql,
    [student.name.trim(), student.branch, student.perc],
    (err, result) => {
        if (err) return next(err);

        return res.status(201).json({
            message: "Student added successfully",
            id: result.insertId
        });
    }
);


}

function updateStudent(req, res, next) {
const id = Number(req.params.id);
const student = req.body;


if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).send("Invalid student ID");
}

if (
    !student ||
    typeof student.name !== "string" ||
    student.name.trim() === "" ||
    !["CSE", "ECE", "EEE", "CSM", "CSD"].includes(student.branch) ||
    typeof student.perc !== "number" ||
    !Number.isFinite(student.perc) ||
    student.perc < 0 ||
    student.perc > 100
) {
    return res.status(400).send("Invalid student data");
}

const sql =
    "UPDATE students SET name = ?, branch = ?, perc = ? WHERE id = ?";

db.query(
    sql,
    [student.name.trim(), student.branch, student.perc, id],
    (err, result) => {
        if (err) return next(err);

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        return res.status(200).send("Student updated successfully");
    }
);


}

function deleteStudent(req, res, next) {
const id = Number(req.params.id);


if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).send("Invalid student ID");
}

db.query(
    "DELETE FROM students WHERE id = ?",
    [id],
    (err, result) => {
        if (err) return next(err);

        if (result.affectedRows === 0) {
            return res.status(404).send("Student not found");
        }

        return res.status(200).send("Student deleted successfully");
    }
);


}

module.exports = {
getStudents,
addStudent,
updateStudent,
deleteStudent
};

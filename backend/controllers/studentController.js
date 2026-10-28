const students = require("../data/studentStore");

function getStudents(req, res, next) {
try {
const name = req.query.name;


    if (name !== undefined) {
        const specificStudents = students.filter(function (student) {
            return student.name === name;
        });

        return res.status(200).json(specificStudents);
    }

    return res.status(200).json(students);
} catch (err) {
    return next(err);
}


}

function deleteStudent(req, res, next) {
    try {
        const id = req.params.id;

        const index = students.findIndex(function (student) {
            return student.id == id;
        });

        if (index !== -1) {
            students.splice(index, 1);
            return res.status(200).send("Student deleted successfully");
        }

        return res.status(404).send("Student not found");
    } catch (err) {
        return next(err);
    }
}

function updateStudent(req, res, next) {
    try {
        const id = req.params.id;
        const student = req.body;

        const index = students.findIndex(function (s) {
            return s.id == id;
        });

        if (index === -1) {
            return res.status(404).send("Student not found");
        }

        if (
            typeof student.name !== "string" ||
            student.name.trim() === "" ||
            !["CSE", "ECE", "EEE", "CSM", "CSD"].includes(student.branch) ||
            typeof student.perc !== "number" ||
            student.perc < 0 ||
            student.perc > 100
        ) {
            return res.status(400).send("Invalid student data");
        }

        students[index].name = student.name;
        students[index].branch = student.branch;
        students[index].perc = student.perc;

        return res.status(200).send("Student updated successfully");
    } catch (err) {
        return next(err);
    }
}

function addStudent(req, res, next) {
    try {
        const student = req.body;

        if (
            student.name.trim() !== "" &&
            ["CSE", "ECE", "EEE", "CSM", "CSD"].includes(student.branch) &&
            student.perc >= 0 &&
            student.perc <= 100
        ) {
            student.id = Date.now();
            students.push(student);

            return res.status(201).send("Student added successfully");
        }

        return res.status(400).send("Student addition unsuccessful");
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    getStudents: getStudents,
    addStudent: addStudent,
    deleteStudent: deleteStudent,
    updateStudent: updateStudent
};

const Faculty = require("../models/faculty")

exports.getFacultyIById = (req, res, next, id) => {
    
    Faculty.findById(id).exec((err, faculty) => {
        if (err) {
            return res.status(400).json({
                error: "Faculty is not found in DB"
            })
        }
        req.faculty = faculty;
        next();
    });
};


exports.createFaculty = (req, res) => {
    const faculty = new Faculty(req.body);
    faculty.save((err, faculty) => {
        if (err) {
            return res.status(400).json({
                error: "Not able to create the Faculty in DB"
            })
        }
        res.json(faculty);
    });
}

exports.getFaculty = (req, res) => {
    return res.json(req.faculty)
}

exports.getAllFaculty = (req, res) => {
    Faculty.find().exec((err, faculties) => {
        if (err) {
            return res.status(400).json({
                error: "No Faculties found in DB"
            })
        }
        res.json(faculties);
    })
}

exports.updateFaculty = (req, res) => {
    const faculty = req.faculty;
    faculty.facultyName =  req.body.facultyName;

    faculty.save((err, updatedFacultyy) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to update Faculty"
            })
        }
        res.json({updatedFacultyy});
    });
}

exports.removeFaculty = (req, res) => {
    const faculty = req.faculty;
    faculty.facultyName =  req.body.facultyName;

    faculty.remove((err, faculty) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to DELETE Faculty"
            });
        }
        res.json({
            message: "Successfull deleted"
        });
    });
}
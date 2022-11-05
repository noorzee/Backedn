const Department = require("../models/department");

exports.createDepartment = (req, res) => {
    const department = new Department(req.body);
    department.save((err, department) => {
        if (err) {
            return res.status(400).json({
                error: "Not able to create the Department in DB"
            })
        }
        res.json(department);
    });
}

exports.getDepartmentById = (req, res, next, id) => {
    Department.findById(id)
      .populate("department")
      .exec((err, department) => {
        if (err) {
          return res.status(400).json({
            error: "Product not found"
          });
        }
        req.department = department;
        next();
      });
  };
  

const express = require("express");
const router = express.Router();

const { isAuthenticated, isAdmin, isSignedIn } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");
const { createDepartment } = require("../controllers/department");
const { getFacultyIById } = require("../controllers/faculty")

//param
router.param("userId", getUserById);
router.param("facultyId", getFacultyIById);

//create
router.post(
  "/department/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createDepartment
);

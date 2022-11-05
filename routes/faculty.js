const express = require("express");
const router = express.Router();

const {
  getFacultyIById,
  createFaculty,
  getAllFaculty,
  getFaculty,
  updateFaculty,
  removeFaculty
} = require("../controllers/faculty");
const { isAuthenticated, isAdmin, isSignedIn } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//param
router.param("userId", getUserById);
router.param("facultyId", getFacultyIById);

//actual routers goes here
//create
router.post(
"/faculty/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createFaculty
);

//read
router.get("/faculty/:facultyId", getFaculty);
router.get("/faculty", getAllFaculty);

//update
router.put(
  "/faculty/:facultyId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateFaculty
);

//delete
router.delete(
  "/faculty/:facultyId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeFaculty
);

module.exports = router;

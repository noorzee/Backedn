const express = require("express");
const router = express.Router();
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");
const { check } = require("express-validator");

router.post("/signup", [
    check("username", "username should be at least 3 char").isLength({ min: 3 }),
    check("email", "Email is required").isEmail(),
    check("password", "Email should be at least 3 char").isLength({ min: 3 })
], signup);

router.post("/signin", [
    check("password", "Password field is requied").isLength({ min: 3 })
], signin);

router.get("/signout", signout);

router.get("/testroute", isSignedIn, (req, res) => {
    res.jsonp(req.auth)
})

module.exports = router;
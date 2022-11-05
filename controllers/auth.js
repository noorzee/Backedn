const User = require("../models/user");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");


// Signup Controller 
exports.signup = (req, res) => {

const errors = validationResult(req);

if (!errors.isEmpty()) {
  return res.status(422).json({
    error: errors.array()[0].msg
  })
}

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save user in DB"
      });
    }
    res.json({
      name: user.name,
      username: user.username,
      id: user._id
    });
  });
};

// Signin Controller
exports.signin = (req,res) => {
  const errors = validationResult(req);
  const {username, password} = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    });
  }

  User.findOne({username}, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "USERNAME doesn't exists"
      })
    }

    if (!user.autheticate(password)) {
      return res.status(401).json({
        error: "USERNAME and Password do not match"
      })
    }
    // create token
    const token = jwt.sign({_id: user._id}, process.env.SECRET_KEY);

    // put token into cookie
    res.cookie("token", token, {expire: new Date() + 1});

    // Send response to front-end
    const {_id, email, username, role} = user;
    return res.json({token, user: {_id, email, username, role}});
  })

}

// Signout Controller
exports.signout = (req, res) => {
  res.clearCookie("token");

  res.json({
    message: "User signout successfully"
  });
};

// Protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET_KEY,
  userProperty: "auth"
});

//custom middlewares
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      error: "ACCESS DENIED"
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "You are not ADMIN, Access denied"
    });
  }
  next();
};

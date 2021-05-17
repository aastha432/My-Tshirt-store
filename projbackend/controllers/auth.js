const User = require("../models/user");
const { check, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const e = require("express");
 

exports.signup = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()
    });
  } 

  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        err: "NOT able to save user in DB"
      });
    }
    res.json(user);
  });
};

exports.signin = (req, res) => {
  const errors = validationResult(req);
  const {email, password} = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()
    });
  }

  User.findOne({email}, (err, user) => {
    if(err || !user){
      return res.status(400).json({
        error: "USER email does not exists"
      })
    }
    if(!user.authenticate(password)){
      return res.status(401).json({
        error: "email and password do not match"
      })
    }

    //create token
    const token = jwt.sign({_id:user._id},process.env.SECRET);
    //put token in cookie
    res.cookie("token",token, {expire: new Date() + 9999});
    //send response to frontend
    const {_id,name,email,role} = user;
    return res.json({token, user: {_id,name,email,role}});

  });
}

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout succesfully"
  });
};

//protected routes
exports.isSignedIn = expressJwt({
  secret: process.env.SECRET,
  userProperty: "auth"
})

//custom middlewares
exports.isAuthenticated = (req, res, next) => {
  let checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if(!checker){
    return res.status(403).json({
      error: "ACCESS DENIED"
    })
  }
  next();
}

exports.isAdmin = (req, res, next) => {
  if(req.profile.role === 0){
    return res.status(403).json({
      error:"You are not ADMIN, Acsess denied"
    })
  }
  next();
}



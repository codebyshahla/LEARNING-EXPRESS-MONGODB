const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userModel = require("../models/userschema");
const bcrypt = require('bcrypt');
const msg = require("../globalVariables/errorMessages");

// async function hashPassword(password) {
//   try {
//     const salt = await bcrypt.genSalt(saltRounds);
//     const hash = await bcrypt.hash(password, salt);
//     return hash;
//   } catch (error) {
//     console.error('Error hashing password:', error);
//     throw error;
//   }
//   let b=hashPassword()
//   console.log(b);
// }


const signup = (req, res) => {
  // console.log(req.session)
  let msg = req.session.errs
  req.session.errs = ""
  res.render("signup",{message: msg});
};

const login = (req, res) => {
  res.render("login");
};

const postsignup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmpass } = req.body;     
    // Find user already have an account
    const existUser = await userModel.findOne({ email});

    // If user have an account then throw an error
    if (existUser ) {
      req.session.errs = "Username already exists. Choose another username.";
      res.redirect("/signup")
    } else {
      // If user doesn't have an account create a new account if the password and confirm password matches
      if (password === confirmpass) {

        // encrypt the password using bcrypt package 
        const hashedPassword = await bcrypt.hash(password, 10);                     
        const newUser = {
          firstName,
          lastName,
          email,
          password: hashedPassword,
        };
        const userdata = new userModel(newUser)
        await userdata.save();
        res.redirect('/login')
      } else {
        req.session.errs = "Confirm password does not match";
        res.redirect("/signup");
      }
    }
  } catch (error) {
    console.log("Something went wrong",error);
  }
};

// {email, password} =req.body
// find person with that email from database, if he doesn't have an account throw error
// else compare hashed password with the input password using that package u used to hash the password

// if password !== actualpassword , throw error 
// else if check that user is an admin or user 
// if that is admin 'user home' else 'user home'

const postlogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      req.session.message = "Invalid email or password";
      return res.redirect("/login");
    }
    // Compare hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      req.session.message = "Invalid email or password";
      return res.redirect("/login");
    }
    // Set user session
    req.session.user = user.email;
    // Check user type
    if (user.role === "admin") {
      req.session.isAdmin = true;
      return res.redirect("/adminhome"); // Redirect to admin home page
    } else {
      req.session.isAdmin = false;
      req.session.username = user.email;
      return res.redirect("/userhome"); // Redirect to regular user home page
    }
  } catch (error) {
    res.status(500).send(`Error during login: ${error.message}`);
  }
}




module.exports = {
  signup,
  login,
  postsignup,
  postlogin
};

// controllers/authController.js
const passport = require('passport');
const User = require('../models/User'); // Add this line

const loginSuccess = async (req, res) => {
  try {
    if (req.user) {
      // Check if the user already exists in the database
      const existingUser = await User.findOne({ googleId: req.user.id });

      if (existingUser) {
        console.log('User already exists:', existingUser);
        // Perform actions if user already exists
      } else {
        // Create a new user in the database
        const newUser = await User.create({
          googleId: req.user.id,
          displayName: req.user.displayName,
          email: req.user.emails[0].value,
          // Add other fields as needed
        });
        console.log('New user created:', newUser);
        // Perform actions after creating a new user
      }

      res.status(200).json({
        error: false,
        message: 'Successfully Logged In',
        user: req.user,
      });
    } else {
      res.status(403).json({ error: true, message: 'Not Authorized' });
    }
  } catch (error) {
    console.error('Error in loginSuccess:', error);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  }
};

const loginFailed = (req, res) => {
  res.status(401).json({ error: true, message: 'Log in failure' });
};

const googleAuth = passport.authenticate('google', ['profile', 'email']);

const googleCallback = passport.authenticate('google', {
  successRedirect: "http://localhost:5173/",
  failureRedirect: '/login/failed',
});

const logout = (req, res) => {
  req.logout();
  req.session = null;
  res.status(200).json({ error: false, message: 'Logout successful' });
};

module.exports = {
  loginSuccess,
  loginFailed,
  googleAuth,
  googleCallback,
  logout,
};

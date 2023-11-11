// server.js
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const authRoute = require('./routes/authRoutes');
const passportStrategy = require('./passport'); // Assuming passport.js is in config folder
const { connect } = require('./utils/db'); // Add this line

// Connect to MongoDB
connect();
const app = express();

// Connect to MongoDB


app.use(
  cookieSession({
    name: 'session',
    keys: ['cyberwolve'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}), authRoute);

app.use('/auth', authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

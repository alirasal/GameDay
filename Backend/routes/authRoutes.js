// routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const passport = require('passport');

const router = express.Router();

router.get('/login/success', authController.loginSuccess);
router.get('/login/failed', authController.loginFailed);
router.get('/google', authController.googleAuth);
router.get('/google/callback', authController.googleCallback);
router.get('/logout', authController.logout);

module.exports = router;

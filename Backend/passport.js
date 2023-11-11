const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

require('dotenv').config();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			console.log("Google Strategy Callback");
			console.log(profile); // Print the profile to see if it's received
			callback(null, profile);
		}
	)
);


passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
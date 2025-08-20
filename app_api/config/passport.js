
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/user'); // use the model you exported in the user.js i think

passport.use(new LocalStrategy({
    usernameField: 'email'  // use 'email' instead of default 'username'
  },
  (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false, { message: 'User not found' });
      if (!user.validPassword(password)) return done(null, false, { message: 'Wrong password' });

      return done(null, user);
    });
  }
));

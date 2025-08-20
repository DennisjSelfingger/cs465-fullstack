// added tyr and catch blocks jsut to get used to it hope this is ok
const mongoose = require('mongoose');
const User = mongoose.model('users'); // 
require('dotenv').config();
const passport = require('passport');

// Register a new user
const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.setPassword(password);
// added this on my own
  try {
    await user.save();
    const token = user.generateJWT();
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err });
  }
};

// Log in existing user
const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(404).json(err);
    }

    if (user) {
      const token = user.generateJWT();
      res.status(200).json({ token });
    } else {
      res.status(401).json(info);
    }
  })(req, res);
};

module.exports = {
  register,
  login
};

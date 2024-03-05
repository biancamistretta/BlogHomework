const passport = require('passport');
const User = require('../models/user');

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    req.login(user, (err) => {
      if (err) throw err;
      res.redirect('/dashboard');
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.login = passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
});

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};

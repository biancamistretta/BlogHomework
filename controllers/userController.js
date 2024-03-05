const { User } = require('../models');
const passport = require('../config/passport');

const userController = {
  signup: async (req, res) => {
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
  },

  login: passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  }),

  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  }
};

module.exports = userController;

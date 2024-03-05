const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err);
    });
});

// Local strategy
passport.use(
  new LocalStrategy({ usernameField: 'username' }, async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { username: username } });
      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }
      const isMatch = await user.checkPassword(password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

module.exports = passport;

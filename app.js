const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const db = require('./models');

// Initialize express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Express session
app.use(session({
  secret: 'your-secret-key',
  resave: true,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
const routes = require('./routes');
app.use(routes);

// Sync database and start server
db.sequelize.sync().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

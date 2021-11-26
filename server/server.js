const express = require('express');
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');


const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 5000;
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const routes = require('./routes');


require('dotenv').config();

const passportConfig = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
};

app.use(express.json());
app.use(helmet());
app.use(logger('dev'));


app.use(
  cors({
    origin: true,
    credentials: true,
  })
);


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());


passport.use(
  new GitHubStrategy(passportConfig, function (
    _accessToken,
    _refreshToken,
    profile,
    cb
  ) {

    return cb(null, profile);
  })
);


passport.serializeUser((user, cb) => {
  console.log('serializeUser', user);
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  console.log('deserializeUser', user);
  cb(null, user);
});

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});

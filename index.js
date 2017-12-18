const   express = require('express'),
        mongoose = require('mongoose'),
        cookieSession = require('cookie-session'),
        passport = require('passport'),
        keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 6 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

//Routes
require('./routes/authRoutes')(app);


app.listen(process.env.PORT || 5000);
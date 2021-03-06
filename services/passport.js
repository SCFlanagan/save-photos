const passport = require('passport'),
      GoogleStrategy = require('passport-google-oauth20').Strategy,
      mongoose = require('mongoose'),
      User = mongoose.model('users'),
      keys = require('../config/keys');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
            console.log('User already exists');
            done(null, existingUser);
        } else {
            const user = await new User({ googleId: profile.id }).save();
            done(null, user);
        }  
    }
));
'use strict';

var passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth20').Strategy;

var verifyHandler = function (accessToken, refreshToken, profile, cb, done) {

  var data = {
    id: cb.id,
    name: cb.displayName,
    email: cb.emails[0].value,
    emailVerified: cb.emails[0].verified
  };

  return done(null, data);
};

passport.use(new GoogleStrategy({
  clientID: '89473903059-r5p5onuk78sbc6d2unn4b5u6qutf28fh.apps.googleusercontent.com',
  clientSecret: 'nfsUeeTJH0OBWrgzkwBCR1kb',
  callbackURL: "http://dashboard.ptit-nuage.fr/api/v1/auth/facebook/callback",
  passReqToCallback: true
}, verifyHandler));
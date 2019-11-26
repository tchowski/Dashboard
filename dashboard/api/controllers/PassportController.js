/**
* PassportController
*
* @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var passport = require('passport');

module.exports = {
facebookAuth: function (req, res, next) {
        passport.authenticate('facebook', { scope: ['email'] })(req, res, next);
        console.log(req.session.userId);
    },
    facebookCallback: function (req, res, next) {
        passport.authenticate('facebook', function (err, user) {

            console.log('facebook credentials');
            console.log(user);
            req.session.social = parseInt(user.id);
            req.session.cookie.maxAge = sails.config.custom.rememberMeCookieMaxAge;
            console.log(req.session);
            res.redirect('/')
        })(req, res, next);
    },
    googleAuth: (req, res) => {
        passport.authenticate('google', { scope: ['email', 'profile'] })(req, res);
    },

    googleCallback: (req, res, next) => {
        passport.authenticate('google', function (err, user) {
            if (err) {
                console.log('google callback error: ' + err);
                res.redirect('/login');
            } else {
                req.session.social = parseInt(user.id);
                
                console.log('google credentials');
                console.log(user);
                res.redirect('/');
            }
        })(req, res, next);
    }
};
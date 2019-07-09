var mongoose = require('mongoose');
var passport = require('passport');
var settings = require('../../config');
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../../models/user.js");

require('../../config/passport')(passport);


////// *ROUTE FOR CREATING A NEW ACCOUNT //////
// Route "/api/auth/signup"
router.post('/signup', function (req, res) {

    let activeHash = Math.random().toString(36).slice(2)


    if (!req.body.username || !req.body.password) {
        res.json({ success: false, message: 'Please pass username and password.' });
    } else {
        var newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            displayName: req.body.firstName + " " + req.body.lastName[0],
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            startDate: req.body.startDate,
            active: false,
            activeHash: activeHash
        });
        // save the user
        newUser.save(function (err) {

            if (err) {
                console.log(err)
                return res.json({ success: false, message: 'Username already exists.' });
            }

            try {

            }
            catch (e) { console.log(e) }
            res.json({ success: true, message: 'Successful created new user.' });
        });
    }

});

// Route "/api/auth/login"
///// * ROUTE FOR LOGGING IN A NEW USER ///////
router.post('/login', function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) throw err;

        if (!user) {
            res.status(400).send({ success: false, message: 'Authentication failed. User not found.' });
        } else {

            if (user.active) {
                // check if password matches
                user.comparePassword(req.body.password, function (err, isMatch) {
                    if (isMatch && !err) {
                        // if user is found and password is right create a token
                        var token = jwt.sign(user.toJSON(), settings.secret);
                        // return the information including token as JSON
                        res.json({ success: true, token: 'JWT ' + token });
                    } else {
                        res.status(401).json({ success: false, message: 'Authentication failed. Incorrect password.' });
                    }
                });
            } else {
                res.status(403).json({ success: false, message: 'Authentication failed. Please verify your email address.' });
            }

        }
    });
});
//////////////////////////////////////////////////

module.exports = router;
const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const config = require('../../config');
// const db_url = process.env.MONGODB_URI || config.dbUri
const usersController = require("../../controllers/userController")
var passport = require('passport');

require('../../config/passport')(passport);

// mongoose.connect(db_url);

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

// api call get /api/users/confirm/:id
///////////////////  CONFIRM REGISTRATION  ////////////////
router.get('/confirm/:id', function (req, res) {
    usersController.confirm(req, res)
});
///////////////////////////////////////////////////////////



// api call get /api/users/authenticate
///////////////////  RETURN AUTHENTICATED USER //////////////
router.get('/authenticate', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        var authenticatedUser = {
            id: req.user._id,
            firstName: req.user.firstName,
            lastName: req.user.lastName,
            displayName: req.user.firstName + " " + req.user.lastName[0],
            email: req.user.email
        }
        res.send({ authenticatedUser: authenticatedUser })
    } else {
        res.status(401).send({ success: false, msg: 'Unauthorized.' });
    }
});
///////////////////////////////////////////////////////////////



// api call get /api/users/
/////////////////////  GET ALL USERS /////////////////////////
router.get('/', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        if (req.user.role === 'admin' || req.user.role === 'employee') {
            usersController.findAll(req, res);
        } else {
            res.json({ success: false, message: "Unauthorized" })
        }
    } else {
        res.json({ success: false, message: "User Not Authenticated." })
    }
})
//////////////////////////////////////////////////////////////



// api call delete /api/users/:id
//////////////////    DELETE A USER   /////////////////////////
router.delete('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        if (req.user.role === 'admin') {
            usersController.remove(req, res)
        } else {
            res.json({ success: false, message: "Unauthorized" })
        }
    } else {
        res.json({ success: false, message: "User Not Authenticated." })
    }
})
/////////////////////////////////////////////////////////////////


// api call put /api/users/:id
//////////////////  UPDATE A USER   /////////////////////////
router.put('/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        if (req.user.role === 'admin') {
            usersController.update(req, res)
        } else {
            res.json({ success: false, message: "Unauthorized" })
        }
    } else {
        res.json({ success: false, message: "User Not Authenticated." })
    }
})
//////////////////////////////////////////////////////////////

// api call put /api/users/password/:id
//////////////////  UPDATE A USERS PASSWORD  //////////////////
router.put('/password/:id', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        usersController.updatePassword(req, res)
    } else {
        res.json({ success: false, message: "User Not Authenticated." })
    }
})
//////////////////////////////////////////////////////////////////



// api call get /api/users/:id
///////////////// RETURN A SPECIFIC USER ////////////////////////
router.get('/:id', function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        usersController.findById(req, res)
    } else {
        res.json({ success: false, message: "User Not Authenticated." })
    }
});
///////////////////////////////////////////////////////////////

module.exports = router;
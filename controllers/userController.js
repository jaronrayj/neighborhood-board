const db = require('../models/user')
var bcrypt = require('bcrypt-nodejs');

module.exports = {
    findAll: function (req, res) {
        db
            .find({})
            .then(function (dbModel) {
                res.json(dbModel);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    findById: function (req, res) {

        console.log(req.params.id)

        db
            .findById(req.params.id)
            .then(function (dbModel) {

                res.json(dbModel)

            })
            .catch(function (err) {
                res.json({ success: false, errMessage: "unable to find user" });
            });
    },


    confirm: function (req, res) {
        db
            .findOneAndUpdate({ activeHash: req.params.id }, { active: true })
            .then(dbModel => res.json({ confirm: true }))
            .catch(err => res.status(422).json({ confirm: false }));
    },

    create: function (req, res) {
        db
            .create(req.body)
            .then(dbModel => {
                res.json(dbModel);
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);

            });
    },
    update: function (req, res) {
        db
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    updatePassword: function (req, res) {
        var userPassword = req.body.password;
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(userPassword, salt, null, function (err, hash) {

                if (err) {
                    return next(err);
                }

                db
                    .findOneAndUpdate({ _id: req.params.id }, { password: hash })
                    .then(dbModel => res.json({ success: true }))
                    .catch(err => res.status(422).json({ success: false }));
            });
        });


    },


    updatePasswordHash: function (req, res) {

        let passwordHash = req.params.hash
        var userPassword = req.body.password;


        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(userPassword, salt, null, function (err, hash) {

                if (err) {
                    return next(err);
                }

                db
                    .findOneAndUpdate({ resetPasswordHash: passwordHash }, { password: hash, resetPasswordHash: '' })
                    .then(dbModel => res.json({ success: true, name: dbModel.firstName }))
                    .catch(err => res.status(422).json({ success: false }));
            });
        });

    },

    verifyHash: function (req, res) {

        db
            .findOne({ resetPasswordHash: req.params.hash })
            .then(function (dbModel) {

                res.json({ success: true, name: dbModel.firstName })

            })
            .catch(function (err) {
                res.json({ success: false, errMessage: "unable to find user" });
            });
    },

    remove: function (req, res) {
        db
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

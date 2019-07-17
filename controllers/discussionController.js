const db = require("../models");

// defining methods for the DiscussionsController
module.exports = {
    findAll: function(req, res) {
        db.Discussion
        // these are functions of Mongoose
            .find(req.query)
            .sort({ date: 1 }) //sorts it ascending
            .then(dbModel => res.json(dbModel)) //sends the json of all Discussions
            .catch(err => res.status(422).json(err));
        },
    findById: function(req, res) {
        db.Discussion
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
    create: function(req, res) {
        db.Discussion
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
    update: function(req, res) {
        db.Discussion
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
    remove: function(req, res) {
        db.Discussion
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
         }
};
const db = require("../models");

// defining methods for the eventsController
module.exports = {
    findAll: function (req, res) {
        var cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - 1);
        db.Event
            .find({ startDate: { $gte: cutoff } })
            .sort({ startDate: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Event
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {

        date = new Date(req.body.startDate)
        console.log("request body for event")
        console.log(date)
        console.log(req.body);

        db.Event
            .create(req.body)
            .then(dbEvent => res.json(dbEvent))
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        db.Event
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Event
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
const db = require("../models");

// defining methods for the marketplaceController
module.exports = {
    findAll: function(req, res) {
        db.Marketplace
            .find(req.query)
            .sort({$natural:-1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
    findById: function(req, res) {
        db.Marketplace
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
    create: function(req, res) {
        db.Marketplace
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
    update: function(req, res) {
        db.Marketplace
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        },
    remove: function(req, res) {
        db.Marketplace
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
         }
};
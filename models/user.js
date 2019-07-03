const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
require('mongoose-type-email');


const userSchema = new Schema({
    email: { required: true, unique: true, type: mongoose.SchemaTypes.Email },
    password: { type: String, required: true }

},
    userSchema.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    },

    userSchema.hook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    })
);


const marketplace = mongoose.model("User", userSchema);

module.exports = marketplace;
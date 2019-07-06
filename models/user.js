const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// require('mongoose-type-email');
const passportLocalMongoose = require('passport-local-mongoose');


const UserSchema = new Schema({
    email: {
        // required: true,
        // unique: true,
        type: mongoose.SchemaTypes.Email
    },
    password: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String }

});

UserSchema.plugin(passportLocalMongoose);

const marketplace = mongoose.model("User", UserSchema);

module.exports = marketplace;
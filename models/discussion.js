

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discussionSchema = new Schema({
    
    username: { type: String },
    // username: { type: mongoose.Schema.ObjectId, ref: 'user' },
    date: { type: Date, default: Date.now },
    title: String,
    body: String,
  
}, { collection: "discussions" });

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;
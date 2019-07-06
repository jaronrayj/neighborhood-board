

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discussionSchema = new Schema({
    
    username: { type: String },
    // username: { type: mongoose.Schema.ObjectId, ref: 'user' },
    date: Date,
    title: String,
    body: String,
  
});

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;
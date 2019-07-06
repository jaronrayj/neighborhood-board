const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discussionSchema = new Schema({
    
    username: { type: String },
    date: Date,
    title: String,
    body: String,
  
});

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;
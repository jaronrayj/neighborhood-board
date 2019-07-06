// const mongoose = require("mongoose");

// const discussionSchema = mongoose.Schema({
//     forum_id: mongoose.Schema.ObjectId,
//     forum: { type: mongoose.Schema.ObjectId, ref: 'forum' },
//     discussion_slug: String,
//     user_id: mongoose.Schema.ObjectId, 
//     username: { type: mongoose.Schema.ObjectId, ref: 'user' },
//     date: Date,
//     title: String,
//     body: Object,
//     tags: Array,
//     pinned: Boolean
// });

// const Event = mongoose.model("Event", eventSchema);


// module.exports = mongoose.model('discussion', discussionSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discussionSchema = new Schema({
    forum_id: mongoose.Schema.ObjectId,
    forum: { type: mongoose.Schema.ObjectId, ref: 'forum' },
    discussion_slug: String,
    user_id: mongoose.Schema.ObjectId,
    username: { type: mongoose.Schema.ObjectId, ref: 'user' },
    date: Date,
    title: String,
    body: String,
    tags: Array,
    pinned: Boolean
});

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;
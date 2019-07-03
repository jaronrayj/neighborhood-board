const mongoose = require("mongoose");

const discussionSchema = mongoose.Schema({
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

module.exports = mongoose.model('discussion', discussionSchema);
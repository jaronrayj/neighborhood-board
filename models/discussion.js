const mongoose = require("mongoose");

const discussionSchema = mongoose.Schema({
    forum_id: mongoose.Schema.ObjectId,
    forum: { type: mongoose.Schema.ObjectId, ref: 'forum' },
    discussion_slug: String,
    user_id: mongoose.Schema.ObjectId, 
    user: { type: mongoose.Schema.ObjectId, ref: 'user' },
    date: Date,
    title: String,
    content: Object,
    tags: Array,
    pinned: Boolean
});

module.exports = mongoose.model('discusion', discussionSchema);
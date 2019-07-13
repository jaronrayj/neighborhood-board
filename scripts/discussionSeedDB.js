const mongoose = require("mongoose");
const db = require("../models");
// const discussionSchema = require("../models/discussion");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/neighborhood-board"
);

const discussionSeed = [
    {
        username: "Albert Einstein",
        date: "1/1/2001",
        title: "Quote",
        body: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."
    },
    {
        username: "Marilyn Monroe",
        date: "1/1/2001",
        title: "Quote",
        body: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring."
    },
    {
        username: "C.S. Lewis",
        date: "1/1/2001",
        title: "Quote",
        body: "You can never get a cup of tea large enough or a book long enough to suit me."
    },
    {
        username: "Maya Angelou",
        date: "1/1/2001",
        title: "Quote",
        body: "What you're supposed to do when you don't like a thing is change it. If you can't change it, change the way you think about it. Don't complain."
    },
    {
        username: "Laurel Thatcher Ulrich",
        date: "1/1/2001",
        title: "Quote",
        body: "Well-behaved women seldom make history."
    }
];

db.Discussion
    .remove({})
    .then(() => db.Discussion.collection.insertMany(discussionSeed))
    .then(data => {
        console.log(data.result.n + " discussion records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
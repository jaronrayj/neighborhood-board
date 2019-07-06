const mongoose = require("mongoose");
const db = require("../models");

// This file will empty the marketplace data and insert new marketplace below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/event"
);

const eventSeed = [
    {
        title: "Fireworks at the Park",
        userId: "johnny8",
        description: "Come join us for Fireworks in the Park.",
        
    },
    {
        title: "Fireworks at the Park",
        userId: "johnny8",
        description: "Come join us for Fireworks in the Park.",
        
    },
    {
        title: "Neighborhood Clean Up",
        userId: "babyG",
        description: "All hands on deck! Come help with a neighborhood service project! We will be cleaning up the streets.",
        
    },
    {
        title: "Back to School Night",
        userId: "martyT",
        description: "Come meet your teachers at Back to School Night!",
       
    },
    {
        title: "Community Theater at the Band Stand",
        userId: "papaJohn",
        description: "Free Community Theater come watch Watcher in the Woods",
        
    }
];

db.Event 
    .remove({})
    .then(() => db.Event.Collection.insertMany(eventSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
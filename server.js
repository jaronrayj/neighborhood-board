const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Require all models
var db = require("./models");

// Define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/neighborhood-board", { useNewUrlParser: true });

// mongoose.connect(MONGODB_URI);
// mongoose.connect(MONGODB_URI,{ useNewUrlParser: true });

// //test mongoose connection
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function() {
// //   //we're connected!
// });


// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

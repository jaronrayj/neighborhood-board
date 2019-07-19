const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
// const PORT = 3001; //change this back to process.env.PORT
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

// Require all models
var db = require("./models");

// Define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('./uploads', express.static('uploads'));

// Serve up static assets (on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect((process.env.MONGODB_URI || "mongodb://user:p12345678@ds351987.mlab.com:51987/heroku_qlf4wr3s"), { useNewUrlParser: true });

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

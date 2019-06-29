var express = require("express");
var router = express.Router();
var path = require("path");

var request = require("request");
// var cheerio = require("cheerio");

var Market = require("../models/marketplace.js");
// var Event = require("../models/event.js");
// var Discussion = require("../models/discussion.js");

router.get("/", function(req, res) {
    res.redirect("/  ?  ")
})


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  userId: { type: String, required: true },
  description: String,
  date: { type: Date, default: Date.now },
  startTime: { type: Date },
  endTime: { type: Date },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
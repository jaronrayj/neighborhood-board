const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String },
  userId: { type: String },
  description: String,
  startDate: { type: Date },
  startTime: { type: String },
  endTime: { type: String },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
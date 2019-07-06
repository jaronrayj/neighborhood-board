const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marketSchema = new Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  price: { type: Number },
  // price: Schema.Types.Decimala128,
  img: { data: Buffer, contentType: String },
  contactPhone: { type: String },
  contactEmail: { type: String }
});

const marketplace = mongoose.model("Market", marketSchema);

module.exports = marketplace;
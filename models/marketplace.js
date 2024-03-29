const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marketSchema = new Schema({
  username: { type: String },
  title: { type: String },
  description: String,
  price: { type: Number },
  // img: { data: Buffer, contentType: String },
  // imageName: { type: String, default: "none", required: true },
  // imageData: { type: String, required: true },
  imgUrl: String,
  contactPhone: { type: String },
  contactEmail: { type: String }
});

const marketplace = mongoose.model("Market", marketSchema);

module.exports = marketplace;


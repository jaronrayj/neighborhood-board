const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const marketSchema = new Schema({
  userId: { type: String },
  title: { type: String },
  description: String,
  price: { type: Number },
  // price: Schema.Types.Decimala128,
  imgUrl: String,
  imageName: { type: String, default: "none", required: true },
  imageData: { type: String, required: true },
  contactPhone: { type: String },
  contactEmail: { type: String }
});

const marketplace = mongoose.model("Market", marketSchema);

module.exports = marketplace;


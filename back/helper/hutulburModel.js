const { model, Schema } = require("mongoose");
const HutulburScheme = new Schema({
  title: String,
  days: Number,
  phone: Number,
  country: String,
  email: String,
  text: String,
  image: String,
  image1: String,
  image2: String,
  // dataslot: String,
});
const HutulburModel = model("Hutulbur", HutulburScheme);
module.exports = HutulburModel;

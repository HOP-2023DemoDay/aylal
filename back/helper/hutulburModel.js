const { model, Schema } = require("mongoose");
const HutulburScheme = new Schema({
  title: String,
  days: Number,
  phone: Number,
  country: String,
  email: String,
  text: String,
  image: String,
  dataslot: String
});
const HutulburModel = model("Hutulbur", HutulburScheme);
module.exports = HutulburModel;

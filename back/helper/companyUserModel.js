const { model, Schema } = require("mongoose");

const CompanyUserSchema = new Schema({
  companyName: String,
  businessEmail: String,
  password: String,
});
const CompanyUserModel = model("companyUser", CompanyUserSchema);
module.exports = CompanyUserModel;

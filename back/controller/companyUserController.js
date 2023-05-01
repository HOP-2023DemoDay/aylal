const CompanyUserModel = require("../helper/companyUserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = "itssecretkey";

module.exports.getCompanyUsers = async (req, res) => {
  try {
    const companyUsers = await CompanyUserModel.find();
    return res.status(200).json({
      message: true,
      data: companyUsers,
    });
  } catch (error) {
    return res.status(400), json({ message: error, data: null });
  }
};

exports.updateCompanyUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { password, businessEmail, companyName } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const post = await CompanyUserModel.findByIdAndUpdate(id, {
      companyName: companyName,
      businessEmail: businessEmail,
      password: hashPassword,
    });
    res.status(200).json({
      message: "user with ${req.params.id} id is updated",
      data: post,
    });
  } catch (error) {
    return res.status(400), json({ message: error, data: null });
  }
};

exports.signupCompany = async (req, res) => {
  try {
    const { password, businessEmail, companyName } = req.body;
    const existingUser = await CompanyUserModel.findOne({
      businessEmail: businessEmail,
    });
    if (existingUser) {
      return res.status(409).json({ message: "burtgeltei acc bainaa" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await CompanyUserModel.create({
      companyName: companyName,
      businessEmail: businessEmail,
      password: hashPassword,
    });
    const token = jwt.sign(
      { businessEmail: result.businessEmail, id: result._id },
      SECRET_KEY
    );
    res.status(201).json({ companyUser: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something wrong" });
  }
};

exports.signinCompany = async (req, res) => {
  try {
    const { businessEmail, password } = req.body;
    const existingUser = await CompanyUserModel.findOne({
      businessEmail: businessEmail,
    });
    if (!existingUser) {
      return res.status(401).json({ message: "email buru bainaa" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(402).json({ message: "nuuts ug buru bainaa" });
    }
    const token = jwt.sign(
      { businessEmail: existingUser.businessEmail, id: existingUser._id },
      SECRET_KEY
    );
    res.status(201).json({ companyUser: existingUser, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something wrong" });
  }
};

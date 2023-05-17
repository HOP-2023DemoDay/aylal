const HutulburModel = require("../helper/hutulburModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = "itssecretkey";

module.exports.getHutulburs = async (req, res) => {
  try {
    const hutulburs = await HutulburModel.find();
    return res.status(200).json({
      message: true,
      data: hutulburs,
    });
  } catch (error) {
    return res.status(400), json({ message: error, data: null });
  }
};

module.exports.editHutulbur = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await HutulburModel.findByIdAndUpdate(id, { ...req.body });
    res.status(200).json({
      message: `user with ${req.params.id} id is updated`,
      data: post,
    });
  } catch (error) {
    return res.status(400), json({ message: error, data: null });
  }
};

module.exports.postHutulbur = async (req, res) => {
  try {
    const { title, days, phone, country, email, text, image, datalost } =
      req.body;
    const result = await HutulburModel.create({
      title: title,
      days: days,
      phone: phone,
      country: country,
      email: email,
      text: text,
      image: image,
      datalost: datalost,
    });
    return res.status(201).json({ data: result });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error, data: null });
  }
};

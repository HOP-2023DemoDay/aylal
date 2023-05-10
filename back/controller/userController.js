const UserModel = require("../helper/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = "itssecretkey";

module.exports.getUsers = async (request, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({
      message: true,
      data: users,
    });
  } catch (error) {
    return res.status(400), json({ message: error, data: null });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { password, email, username } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const post = await UserModel.findByIdAndUpdate(id, {
      email: email,
      password: hashPassword,
      username: username,
    });
    res.status(200).json({
      message: "user with ${req.params.id} id is updated",
      data: post,
    });
  } catch (error) {
    return res.status(400).json({ message: error, data: null });
  }
};

exports.signup = async (req, res) => {
  try {
    const { password, email, username } = req.body;
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: "burtgeltei acc bainaa" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await UserModel.create({
      email: email,
      password: hashPassword,
      username: username,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something wrong" });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await UserModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(401).json({ message: "email buru bainaa" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(402).json({ message: "nuuts ug buru bainaa" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );
    res.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something wrong" });
  }
};

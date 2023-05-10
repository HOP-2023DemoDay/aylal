const express = require("express");
const companyRouter = express.Router();

const {
  getCompanyUsers,
  signinCompany,
  signupCompany,
  updateCompanyUser,
} = require("../controller/companyUserController");

companyRouter
  .post("/signin", signinCompany)
  .post("/signup", signupCompany)
  .get("/", getCompanyUsers)
  .put("/:id", updateCompanyUser);

module.exports = companyRouter;

/** @format */

const Router = require("express").Router();
const {
  loginController,
  addUser
} = require("../Controllers");
const ExpressAdapter = require("../Adapters");
Router.post(
  "/signup",
  ExpressAdapter(addUser)
); //add new user

Router.post(
  "/login",
  ExpressAdapter(loginController)
); //add new user

module.exports = Router;

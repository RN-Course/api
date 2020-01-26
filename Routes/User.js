const Router = require("express").Router();
const { addUser } = require("../Controllers");
Router.post("/", addUser); //add new user

module.exports = Router;

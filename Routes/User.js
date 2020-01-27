const Router = require("express").Router();
const { addUser } = require("../Controllers");
const ExpressAdapter = require("../Adapters");
Router.post("/", ExpressAdapter(addUser)); //add new user

module.exports = Router;

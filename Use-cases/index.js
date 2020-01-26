const database = require("../db/index");
const UserSchema = require("../models/user-model");
const updateUser = require("./update-user");
const addUserFactory = require("./add-user");
const addUser = addUserFactory(UserSchema, database);

const fireUpdateUser = updateUser({ database });

module.exports = {
  fireUpdateUser,
  addUser
};

const addUserFactory = require("./add-user");
const expressAdapter = require("../Adapters");
const addUser = addUserFactory(expressAdapter);

module.exports = {
  addUser
};

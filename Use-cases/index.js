const dbProcess = require(".....");

const updateUser = require("./update-user");

const fireUpdateUser = updateUser({ dbProcess });

module.export = {
  fireUpdateUser
};

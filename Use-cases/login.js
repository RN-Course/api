// const { user } = require("../Entities");

module.exports = function (schema, database) {
  return async function loginUserFactory({ Email }) {

    try {

      let user = database.findOneByEmail(Email, schema, "")
      if (user) {
        return user;
      } else {
        return null
      }
    } catch (err) {
      return err;
    }
  };
};

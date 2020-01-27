const { addUser } = require("../Use-cases");
module.exports = function addUserFactory() {
  return async function addUserController({ httpRequest }) {
    try {
      const createUser = await addUser(httpRequest.body);
      if (createUser) {
        return { status: 200, msg: "user created!" };
      } else {
        return { status: 401, msg: "cannot create user" };
      }
    } catch (err) {
      httpResponse.send("there is an error. check your request");
    }
  };
};

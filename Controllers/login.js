const { loginUser } = require("../Use-cases");
module.exports = function addUserFactory() {
  return async function loginController({
    Email,
    Password
  }) {
    try {
      const user = await loginUser({ Email, Password });
      if (user.Password == Password) {

        return user
      } else {
        return {
          status: 403,
          msg: "passwords don't matches"
        };
      }
    } catch (err) {
      // console.log(err)
      return { err: "there is an error. check your request" }

    }
  };
};

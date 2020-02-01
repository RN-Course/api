/** @format */

module.exports = (createToken, hash) => {
  return {
    signToken: (
      controller, { body }) => {
      return new Promise(async (resolve, reject) => {
        try {
          // TODO: hash the user's password
          let hashedPassword = hash(body.Password);
          // console.log(hashedPassword)
          // TODO: send data with hashed password to the controller
          let user = await controller({ Email: body.Email, Password: hashedPassword });
          // console.log(user)
          if (user._id) {
            // TODO: generate access token for user if exists
            // console.log(user)
            let token = createToken(user);

            // TODO: send the response with the new access token
            resolve(token);
          } else {
            reject(user);
          }
        } catch (err) {
          reject(err);
        }
      }
      );
    },
    protectedRoute: async (
      controller,
      token
    ) => {
      // TODO: implement the verified token for consuming this API data & functions
    }
  };
};

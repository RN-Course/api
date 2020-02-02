/** @format */

module.exports = (verifyToken, createToken, hash) => {
  return {
    signToken: (controller, { body }) => {
      return new Promise(async (resolve, reject) => {
        try {
          // TODO: hash the user's password
          let hashedPassword = hash(body.Password)
          // TODO: send data with hashed password to the controller
          let user = await controller({ Email: body.Email, Password: hashedPassword })
          if (user._id) {
            // TODO: generate access token for user if exists
            let token = createToken(user)

            // TODO: send the response with the new access token
            resolve(token)
          } else {
            reject(user)
          }
        } catch (err) {
          reject(err)
        }
      })
    },
    protectedRoute: async (controller, { headers, ...request }) => {
      return new Promise((resolve, reject) => {
        // TODO: implement the verified token for consuming this API data & functions
        let validation = verifyToken(headers.split(" ")[1])
        validation
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject("invalid token")
          })
      })
    }
  }
}

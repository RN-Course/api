/** @format */

const { loginUser } = require("../Use-cases")
module.exports = function addUserFactory() {
  return function loginController({ Email, Password }) {
    return new Promise(async (resolve, reject) => {
      try {
        // console.log(Email)
        loginUser(Email)
          .then((res) => {
            // console.log(res)
            if (res.Password === Password) {
              resolve(res)
            } else {
              reject({
                status: 200,
                msg: "wrong password, try again!"
              })
            }
          })
          .catch(() => {
            reject({ status: 404, msg: "no user with this email!" })
          })
      } catch (err) {
        reject({ error: "there is an error. check your request!" })
      }
    })
  }
}

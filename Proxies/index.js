/** @format */

const login = require("./loginProxy")
const { JWT_KEY } = require("../config/security")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

function hash(Password) {
  return crypto
    .createHash("md5")
    .update(Password)
    .digest("hex")
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    try {
      let decodedToken = jwt.verify(token, JWT_KEY)
      resolve(decodedToken)
    } catch (err) {
      reject(err)
    }
  })
}

function createToken(data) {
  let token = jwt.sign({ data }, JWT_KEY, {
    expiresIn: "30d"
  })
  return {
    token,
    Email: data.Email,
    _id: data._id,
    Phone: data.Phone,
    expiresIn: "30d",
    iat: Date.now()
  }
}

let loginProxy = login(verifyToken, createToken, hash)

module.exports = {
  loginProxy
}

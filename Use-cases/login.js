/** @format */

module.exports = function(schema, database) {
  return function loginUserFactory(Email) {
    return new Promise(async (resolve, reject) => {
      // console.log(Email)
      try {
        let user = await database.findOneByEmail(Email, schema, "")

        if (user) {
          resolve(user)
        } else {
          reject(null)
        }
      } catch (err) {
        reject(err)
      }
    })
  }
}

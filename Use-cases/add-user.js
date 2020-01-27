const { user } = require("../Entities/");

module.exports = function(schema, database) {
  return async function addUserFactory(data) {
    const createUser = user(data);
    try {
      let newUser = database.insert(
        {
          Name: createUser.getName(),
          Email: createUser.getEmail(),
          Password: createUser.getPassword(),
          Phone: createUser.getPhone(),
          ProfileImage: createUser.getProfileImage(),
          Status: createUser.getStatus()
        },
        schema
      );

      return newUser;
    } catch (err) {
      return err;
    }
  };
};

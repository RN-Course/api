const { user } = require("../Entities");

module.exports = function({ dbProcess }) {
  return function({ userInfo }) {
    // const updateUser = userEntity();
    // const userData = updateUser(userInfo);
    // const exists = await dbProcess.find({ Email: userData.getEmail() });
    // if (!exists) {
    //   throw new Error("no user with this email!");
    // }
    // try {
    //   const updatedUser = await dbProcess.updateById(
    //     { Id: userData.getId() },
    //     {
    //       Name: userData.getName(),
    //       Phone: userData.getPhone(),
    //       Password: userData.getPassword(),
    //       ProfileImage: userData.getProfileImage()
    //     }
    //   );
    //   return updatedUser;
    // } catch (err) {
    //   throw new Error();
    // }
  };
};

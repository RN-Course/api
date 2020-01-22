const userEntity = require("../../Entities/user");

module.export = async function({ userInfo, dbProcess }) {
  const addUser = userEntity();
  const saveUser = addUser(userInfo);

  const exists = await dbProcess.find({ Email: saveUser.getEmail() });

  if (exists) {
    throw new Error("user already exists");
  }

  try {
    const insertQuery = await dbProcess.insert({
      Name: saveUser.getName(),
      Email: saveUser.getEmail(),
      Phone: saveUser.getPhone(),
      ProfileImage: saveUser.getProfileImage(),
      Password: saveUser.getPassword()
    });
    return insertQuery;
  } catch (err) {
    throw new Error();
  }
};

const x = { one: 1, two: [{ one: 1 }, { two: 2 }] };

console.log();

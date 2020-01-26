const { addUser } = require("../Use-cases");
module.exports = function addUserFactory(adapter) {
  return function addUserController(req, res) {
    const { httpRequest, httpResponse } = adapter(req, res);

    const createUser = addUser(httpRequest.body);

    // createUser.then
    // httpResponse.json(httpRequest.body);
    // console.log(httpRequest.body);

    //     httpResponse.send("hello from controller");
  };
};

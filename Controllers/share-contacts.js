const { shareContacts } = require("../Use-cases");
module.exports = function shareContactFactory() {
  return async function shareContactController({ httpRequest }) {
    try {
      const data = {
        SharedTo: httpRequest.body.ShareTo,
        SharedBy: httpRequest.params.userId,
        ShareGroup: httpRequest.body.ShareGroup
      };
      const createShare = await shareContacts(data);
      if (createShare) {
        return { status: 200, msg: "shared successfully!" };
      } else {
        return "cannot share contacts!";
      }
    } catch (err) {
      return { status: 500, msg: "there is an error. check your request" };
    }
  };
};

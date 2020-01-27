const { findContactsByUserId } = require("../Use-cases");
module.exports = function() {
  return async function({ httpRequest }) {
    try {
      const getUserContacts = await findContactsByUserId(httpRequest.params.id);
      return getUserContacts;
    } catch (err) {
      return err;
    }
  };
};

const { addContact } = require("../Use-cases");
module.exports = function addContactFactory() {
  return async function addContactController({ httpRequest }) {
    try {
      const createContact = await addContact(httpRequest.body);
      if (createContact) {
        return { status: 200, msg: "contact created" };
      } else {
        return "cannot create contact!";
      }
    } catch (err) {
      return { status: 500, msg: "there is an error. check your request" };
    }
  };
};

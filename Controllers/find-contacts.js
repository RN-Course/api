const { findAllContacts, findOneContact } = require("../Use-cases");
module.exports = function addContactFactory() {
  return {
    findContactController: async ({ httpRequest }) => {
      try {
        const getContact = await findOneContact(httpRequest.params.id);

        return getContact;
      } catch (err) {
        return err;
      }
    },
    findContactsController: async () => {
      try {
        const getContacts = await findAllContacts();

        return getContacts;
      } catch (err) {
        return err;
      }
    }
  };
};

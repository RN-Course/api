const { contact } = require("../Entities");

module.exports = function(schema, database) {
  return async function addContactFactory(data) {
    // console.log(data);
    const createContact = contact(data);
    try {
      let newContact = database.insert(
        {
          DisplayName: createContact.getDisplayName(),
          Email: createContact.getEmail(),
          User: createContact.getUserId(),
          Phones: createContact.getPhones(),
          Thumbnail: createContact.getThumbnail()
        },
        schema
      );
      return newContact;
    } catch (err) {
      return err;
    }
  };
};

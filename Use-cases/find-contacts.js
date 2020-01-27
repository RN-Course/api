// const { contact } = require("../Entities"); // unused

module.exports = function(schema, database) {
  return {
    findOneContact: async id => {
      const contact = await database.findOne(id, schema, "User");
      if (!contact) throw new Error("cannot create db query!");
      // delete contact.User.Password;
      let newContact = {
        _id: contact._id,
        Phones: contact.Phones,
        DisplayName: contact.DisplayName,
        Thumbnail: contact.Thumbnail,
        User: {
          Name: contact.User.Name,
          Email: contact.User.Email,
          _id: contact.User._id,
          Phone: contact.User.Phone
        }
      };
      return newContact;
    },
    findAllContacts: async () => {
      const contacts = await database.findAll(null, schema, "User");
      if (!contacts) throw new Error("cannot create db query!");

      return contacts.map(contact => {
        return {
          _id: contact._id,
          Phones: contact.Phones,
          DisplayName: contact.DisplayName,
          Thumbnail: contact.Thumbnail,
          User: {
            Name: contact.User.Name,
            Email: contact.User.Email,
            _id: contact.User._id,
            Phone: contact.User.Phone
          }
        };
      });
    },
    findContactsByUserId: async id => {
      const contacts = await database.findAll(id, schema, "User");
      if (!contacts) throw new Error("cannot create db query!");
      return contacts.map(contact => {
        return {
          _id: contact._id,
          Phones: contact.Phones,
          DisplayName: contact.DisplayName,
          Thumbnail: contact.Thumbnail,
          User: {
            Name: contact.User.Name,
            Email: contact.User.Email,
            _id: contact.User._id,
            Phone: contact.User.Phone
          }
        };
      });
    }
  };
};

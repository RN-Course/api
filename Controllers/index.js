const addUserFactory = require("./add-user");
const addContactFactory = require("./add-contact");
const getContacts = require("./find-contacts");
const getContactsByUserId = require("./find-contacts-by-userid");
const addUser = addUserFactory();
const addContact = addContactFactory();
const getContactsByUser = getContactsByUserId();
const { findContactController, findContactsController } = getContacts();

module.exports = {
  addUser,
  addContact,
  findContactController,
  findContactsController,
  getContactsByUser
};

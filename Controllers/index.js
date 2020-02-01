const addUserFactory = require("./add-user");
const addContactFactory = require("./add-contact");
const getContacts = require("./find-contacts");
const getContactsByUserId = require("./find-contacts-by-userid");
const shareContactFactory = require("./share-contacts");
const loginFactory = require("./login");
const addUser = addUserFactory();
const addContact = addContactFactory();
const loginController = loginFactory();
const getContactsByUser = getContactsByUserId();
const shareContacts = shareContactFactory();
const { findContactController, findContactsController } = getContacts();

module.exports = {
  addUser,
  addContact,
  findContactController,
  findContactsController,
  getContactsByUser,
  shareContacts,
  loginController
};

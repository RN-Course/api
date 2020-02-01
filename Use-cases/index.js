const database = require("../db/index");
const UserSchema = require("../models/user.model");
const ContactSchema = require("../models/contact.model");
const { share, group } = require("../models/share.model");
const addContactFactory = require("./add-contact");
const findContactsFactory = require("./find-contacts");
const addUserFactory = require("./add-user");
const shareContactsFactory = require("./share-contact");
const loginUserFactory = require("./login")

const addUser = addUserFactory(UserSchema, database);
const addContact = addContactFactory(ContactSchema, database);
const loginUser = loginUserFactory(UserSchema, database);
const findContacts = findContactsFactory(ContactSchema, database);
const shareContacts = shareContactsFactory({ share, group }, database);
const { findAllContacts, findOneContact, findContactsByUserId } = findContacts;

module.exports = {
  addUser,
  addContact,
  findAllContacts,
  findOneContact,
  findContactsByUserId,
  shareContacts,
  loginUser
};

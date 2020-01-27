const database = require("../db/index");
const UserSchema = require("../models/user.model");
const ContactSchema = require("../models/contact.model");
const addContactFactory = require("./add-contact");
const findContactsFactory = require("./find-contacts");
const addUserFactory = require("./add-user");

const addUser = addUserFactory(UserSchema, database);
const addContact = addContactFactory(ContactSchema, database);
const findContacts = findContactsFactory(ContactSchema, database);
const { findAllContacts, findOneContact, findContactsByUserId } = findContacts;

module.exports = {
  addUser,
  addContact,
  findAllContacts,
  findOneContact,
  findContactsByUserId
};

/** @format */

const Router = require("express").Router()
const ExpressAdapter = require("../Adapters")
const { addContact, findContactController, findContactsController, getContactsByUser, shareContacts } = require("../Controllers")
Router.post("/addContacts/:id", ExpressAdapter(addContact)) //add new contact
Router.get("/", ExpressAdapter(findContactsController)) // get all contacts
Router.get("/:id", ExpressAdapter(findContactController)) // get one contact
Router.get("/getContactsByUserId/:id", ExpressAdapter(getContactsByUser))
Router.post("/shareContact/:userId", ExpressAdapter(shareContacts))
// Router.post("/uploadContacts/:id")
module.exports = Router

const database = require("./database-functions");
const mongoose = require("mongoose");
const { DB_UIR } = require("../config");

const options = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose
  .connect(DB_UIR, options)
  .then(() => {
    console.log("database connected");
  })
  .catch(err => {
    console.error(err);
  });

const execDbFactory = database();

module.exports = execDbFactory;

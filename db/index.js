const dbFactory = require("./db-process");
const mongoose = require("mongoose");
const { DB_UIR } = require("../config");

let connection = await mongoose.connect(DB_UIR);

const execDbFactory = dbFactory({
  connection
});

// const {
//   update,
//   deleteMany,
//   deleteOne,
//   insert,
//   findOne,
//   findMany
// } = execDbFactory;

module.exports = execDbFactory;

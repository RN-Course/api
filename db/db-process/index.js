import { Error } from "mongoose";

module.export = function dbFactory({ connection }) {
  //   if (!connection) throw new Error("cannot connect to the database!!");

  connection.catch(err => {
    throw new Error(
      `cannot connect to the database!! due to this error: ${err}`
    );
  });
  function insert(data, schema) {
    console.log(data);
    //     ...
  }
  function update(id, data, Schema) {
    //     ...
  }
  function deleteOne(id, Schema) {
    //     ...
  }
  function deleteMany([id], Schema) {
    //     ...
  }
  function findOne(id, Schema) {
    //    ...
  }
  function findMany(Schema) {
    //    ...
  }

  return Object.freeze({
    update,
    deleteMany,
    deleteOne,
    insert,
    findOne,
    findMany
  });
};

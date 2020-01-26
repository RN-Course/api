// import { Error } from "mongoose";

module.exports = function() {
  function insert(data, schema) {
    new schema(data).save();
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

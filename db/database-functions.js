/** @format */

// import { Error } from "mongoose";

module.exports = function() {
  async function insert(data, schema) {
    let process = await new schema(data).save()
    //     ...
    if (!process) throw new Error("cannot insert to the database!!")
    return process
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
  function findOneByEmail(Email, Schema, populate) {
    let process = Schema.findOne({ Email }).exec()
    return process
  }

  function findOne(id, Schema, populate) {
    let process = Schema.findById({ _id: id })
      .populate(populate)
      .exec()
    return process
  }
  function findAll(id, Schema, populate) {
    if (id) {
      let process = Schema.find({ User: id })
        .populate(populate)
        .exec()
      return process
    } else {
      let process = Schema.find()
        .populate(populate)
        .exec()
      return process
    }
  }

  return Object.freeze({
    update,
    deleteMany,
    deleteOne,
    insert,
    findOne,
    findAll,
    findOneByEmail
  })
}

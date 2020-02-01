const { Schema, model } = require("mongoose");

const shareSchema = new Schema({
  SharedBy: { type: Schema.Types.ObjectId, ref: "User" },
  SharedTo: { type: Schema.Types.ObjectId, ref: "User" }
});

const groupSchema = new Schema({
  Share: { type: Schema.Types.ObjectId, ref: "Share" },
  Contact: { type: Schema.Types.ObjectId, ref: "Contact" }
});

module.exports = {
  share: model("Share", shareSchema),
  group: model("group", groupSchema)
};

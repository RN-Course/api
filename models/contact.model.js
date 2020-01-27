const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
  User: { type: Schema.Types.ObjectId, ref: "User" },
  DisplayName: { type: String },
  Email: { type: String },
  Phones: { type: Array },
  Thumbnail: { type: String }
});

module.exports = model("Contact", contactSchema);

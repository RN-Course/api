const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  Name: { type: String },
  Email: { type: String },
  Password: { type: String },
  Phone: { type: Number },
  Status: { type: Boolean, default: true },
  ProfileImage: { type: String }
});

module.exports = model("User", UserSchema);

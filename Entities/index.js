const userFactory = require("./user.entity");
const contactFactory = require("./contact.entity");
const shareContactFactory = require("./share.entity");
const crypto = require("crypto");
const contact = contactFactory();
const shareContact = shareContactFactory();
const user = userFactory({ hash });

function hash(password) {
  return crypto
    .createHash("md5")
    .update(password)
    .digest("hex");
}

module.exports = {
  user,
  shareContact,
  contact
};

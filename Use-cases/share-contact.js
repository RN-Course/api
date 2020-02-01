const { shareContact } = require("../Entities");

module.exports = function(schema, database) {
  return async function shareContactFactory(data) {
    const share = shareContact(data);
    try {
      const shareObject = {
        SharedBy: share.getSharedByUser(),
        SharedTo: share.getSharedToUser()
      };
      let createShare = await database.insert(shareObject, schema.share);
      return share.getShareGroup.map(object => {
        return database.insert(
          { Share: createShare._id, Contact: object._id },
          schema.group
        );
      });
    } catch (err) {
      return err;
    }
  };
};

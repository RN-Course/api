module.exports = function() {
  return function({ ShareId, SharedTo, SharedBy, ShareGroup } = {}) {
    if (!SharedBy) throw new Error("the contact require user to share to!!");
    if (!SharedTo) throw new Error("the user that share contact is require");
    if (!ShareGroup) throw new Error("require data to be shared!");
    return Object.freeze({
      getSharedByUser: () => SharedBy,
      getSharedToUser: () => SharedTo,
      getShareId: () => ShareId,
      getShareGroup: () => ShareGroup
    });
  };
};

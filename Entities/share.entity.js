module.exports = function() {
  return function({ SharedTo, SharedBy } = {}) {
    if (!DisplayName) throw new Error("Contact name is required!");
    if (!UserId) throw new Error("Contact should has one user!");
    if (!Email) throw new Error("Contact email is required!");
    if (!Phones) throw new Error("Phone is required!");

    return Object.freeze({
      getId: () => Id,
      getDisplayName: () => DisplayName,
      getUserId: () => UserId,
      getEmail: () => Email,
      getPhones: () => Phones,
      getThumbnail: () => Thumbnail
    });
  };
};

module.exports = function() {
  return function({
    Id,
    Name,
    Email,
    Phone,
    ProfileImage,
    Password,
    Status
  } = {}) {
    // if (!Status)
    //   throw new Error(
    //     "This account has been deleted, Reactivate your account!!"
    //   );
    // console.log(Name);
    if (!Name) throw new Error("User name is required!");
    if (!Email) throw new Error("Email is required!");
    if (!Phone) throw new Error("Phone is required!");
    if (isNaN(Phone)) throw new Error("The phone should be a valid number !");
    if (!Password && Password.length < 8)
      throw new Error("Password should be at least 8 length characters!");

    return Object.freeze({
      getId: () => Id,
      getName: () => Name,
      getEmail: () => Email,
      getPhone: () => Phone,
      getProfileImage: () => ProfileImage,
      getPassword: () => Password,
      getStatus: () => Status,
      deleteAccount: () => (Status = false)
    });
  };
};

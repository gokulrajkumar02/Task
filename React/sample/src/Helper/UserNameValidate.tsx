const checkUpperLowerChar = (userDetails: string) =>
  /[A-Z]/.test(userDetails) && /[a-z]/.test(userDetails);

export const UserNameValidate = (userDetails: string) =>
  userDetails.includes("@") &&
  userDetails.length > 8 &&
  checkUpperLowerChar(userDetails);

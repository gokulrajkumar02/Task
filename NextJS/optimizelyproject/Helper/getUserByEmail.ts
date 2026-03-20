type user = {
  name: string;
  email: string;
  password: string;
};

const getUserByEmail = (users: user[], email: string) =>
  users.find(
    (items: user) => items.email.toLowerCase() === email.toLowerCase(),
  ) ?? "";

export default getUserByEmail;

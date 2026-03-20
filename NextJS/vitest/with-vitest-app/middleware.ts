

const authMiddleware = (handler: Function) => {
  return (user: { isAuthenticated: boolean }) => {
    if (!user.isAuthenticated) {
      throw new Error("Unauthorized");
    }
    return handler(user);
  };
};

export default authMiddleware
export const signUp = (email, password, username) => {
  return new Promise((resolve) => {
    resolve({ email, password, username });
  });
};

export const signIn = () => {
  return new Promise((resolve) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = () => {
  return new Promise((resolve) => {
    resolve({
      user: {
        username: "Test User",
        email: "fake@example.com",
        _id: "fake-id",
      },
    });
  });
};

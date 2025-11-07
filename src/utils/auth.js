import { checkResponse } from "./api";

const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const signUp = (email, password, username) => {
  return new Promise((resolve, reject) => {
    resolve({});
  });
};

export const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      user: { name: "Test User", email: "test@email.com", _id: "test-id" },
    });
  });
};

import { checkResponse } from "./api";

const baseUrl = import.meta.env.PROD
  ? "https://api.newsexplorer.wildsurf.net"
  : "http://localhost:3002";

export const signUp = (email, password, name) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => {
    if (res.ok) return res.json();

    if (res.status === 409) {
      return Promise.reject({ type: "email-exists" });
    }
    return Promise.reject(`Something went wrong: ${res.status}`);
  });
};

export const signIn = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

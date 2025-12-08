import { getToken } from "./token";

const baseUrl = import.meta.env.PROD
  ? "https://api.newsexplorer.wildsurf.net"
  : "http://localhost:3002";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Something went wrong: ${res.status}`);
};

export const getUserInfo = () => {
  const token = getToken();
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export function getArticles() {
  const token = getToken();

  return fetch(`${baseUrl}/articles`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export function saveArticle(article, query) {
  const token = getToken();

  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    body: JSON.stringify({
      keyword: query,
      title: article.title,
      description: article.description,
      date: article.publishedAt,
      source: article.source.name,
      url: article.url,
      image: article.urlToImage,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export function deleteArticle(articleId) {
  const token = getToken();

  return fetch(`${baseUrl}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

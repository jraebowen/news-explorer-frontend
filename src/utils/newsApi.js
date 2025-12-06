import { checkResponse } from "./api";

const newsApiBaseUrl = import.meta.env.PROD
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

export const searchArticles = (query, API_KEY) => {
  // Date functions
  const today = new Date();
  const currentDate = today.toISOString();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  const previousDate = sevenDaysAgo.toISOString();

  //keyword functions
  const encodedQuery = encodeURIComponent(query);
  return fetch(
    `${newsApiBaseUrl}?q=${encodedQuery}&from=${previousDate}&to=${currentDate}&pageSize=100&apiKey=${API_KEY}`
  ).then(checkResponse);
};

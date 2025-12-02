const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.newsexplorer.wildsurf.net"
    : "http://localhost:3002";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Something went wrong: ${res.status}`);
};

export function getItems() {
  return fetch(`${baseUrl}/articles`).then(checkResponse);
}

export function saveArticle(article) {
  return new Promise((resolve) => {
    // Generate a fake ID for the "saved" article
    const savedArticle = {
      _id: "65f7371e7bce9e7d331b11a0", // Fake MongoDB ID
      title: article.title,
      url: article.url,
      urlToImage: article.urlToImage, // Note: NewsAPI uses 'urlToImage'
      description: article.description,
      source: article.source,
      publishedAt: article.publishedAt,
    };
    resolve(savedArticle);
  });
}

export function deleteArticle(articleId) {
  return new Promise((resolve) => {
    resolve({ _id: articleId });
  });
}

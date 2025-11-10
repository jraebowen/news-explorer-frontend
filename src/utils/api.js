const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Something went wrong: ${res.status}`);
};

export function getItems() {
  return new Promise((resolve, reject) => {
    resolve([
      {
        _id: "65f7368dfb74bd6a92114c85",
        title: "Breaking: Scientists Discover New Planet",
        url: "https://example.com/news/new-planet",
        imageUrl: "https://via.placeholder.com/400x200",
        description: "Amazing discovery in space...",
        source: { name: "Space News" },
        publishedAt: "2024-01-15T10:30:00Z",
      },
      {
        _id: "65f7368dfb74bd6a92114c86",
        title: "Tech Innovation Breakthrough",
        url: "https://example.com/news/tech-breakthrough",
        imageUrl: "https://via.placeholder.com/400x200",
        description: "Revolutionary new technology...",
        source: { name: "Tech Today" },
        publishedAt: "2024-01-14T15:45:00Z",
      },
      // Add more fake articles as needed
    ]);
  });
}

export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    // Generate a fake ID for the "saved" article
    const savedArticle = {
      _id: "65f7371e7bce9e7d331b11a0", // Fake MongoDB ID
      title: article.title,
      url: article.url,
      imageUrl: article.urlToImage, // Note: NewsAPI uses 'urlToImage'
      description: article.description,
      source: article.source,
      publishedAt: article.publishedAt,
    };

    resolve(savedArticle);
  });
}

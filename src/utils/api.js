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
        title:
          "Big Tech tax breaks could’ve funded benefits for millions, Senator Warren finds",
        url: "https://www.theverge.com/news/816267/senator-elizabeth-warren-tax-break-microsoft-amazon",
        urlToImage:
          "https://platform.theverge.com/wp-content/uploads/sites/2/2025/11/STK417_banking_money_2.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=1440",
        description:
          "President Donald Trump’s “Big Beautiful Bill” is handing out billions in tax breaks, and a new analysis from Senator Elizabeth Warren’s (D-MA) office is demonstrating just how substantial those sums are. ",
        source: { name: "The Verge" },
        publishedAt: "2025-11-07T10:30:00Z",
        keyword: "snap",
      },
      {
        _id: "65f7368dfb74bd6a92114c86",
        title: "Mamdani's victory speech included a 4-word warning to Trump",
        url: "https://www.businessinsider.com/zohran-mamdani-victory-speech-warning-president-trump-2025-11",
        urlToImage:
          "https://i.insider.com/690b54ed599d46a4ccc1816e?width=1200&format=jpeg",
        description:
          "New York City's newly elected mayor, Zohran Mamdani, took direct aim at President Donald Trump in his acceptance speech on Tuesday.",
        source: { name: "Business Insider" },
        publishedAt: "2025-11-05T15:45:00Z",
        keyword: "Mamdani",
      },
      {
        _id: "65f7368dfb74bd6a92114c88",
        title:
          "More than 1,400 flights cancelled as US air traffic cuts enter second day",
        url: "https://www.bbc.com/news/articles/cj410k00yw8o",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1536/cpsprodpb/6c57/live/ae258c20-bcee-11f0-81cd-cf982342e1e7.jpg.webp",
        description:
          "More than 1,400 flights to, from, or within the US were cancelled on Saturday after airlines were told this week to cut traffic during the federal government shutdown.",
        source: { name: "BBC News" },
        publishedAt: "2025-11-08T10:30:00Z",
        keyword: "TSA",
      },
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
      urlToImage: article.urlToImage, // Note: NewsAPI uses 'urlToImage'
      description: article.description,
      source: article.source,
      publishedAt: article.publishedAt,
    };
    resolve(savedArticle);
  });
}

export function deleteArticle(articleId) {
  return new Promise((resolve, reject) => {
    resolve({ _id: articleId });
  });
}

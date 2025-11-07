import { useLocation } from "react-router-dom";

import "./NewsCardList.css";

import NewsCards from "../NewsCards/NewsCards";

function NewsCardList({
  renderedArticles,
  savedArticles,
  onArticleSave,
  onArticleDelete,
  query,
}) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <section
      className={`news ${isHomePage ? "news__home" : "news__saved-news"}`}
    >
      <ul className="news-card-list">
        {isHomePage &&
          renderedArticles.map((item) => {
            return (
              <NewsCards
                item={item}
                key={item.content}
                onArticleSave={onArticleSave}
                savedArticles={savedArticles}
                query={query}
              ></NewsCards>
            );
          })}
        {!isHomePage &&
          savedArticles.map((item) => {
            return (
              <NewsCards
                item={item}
                key={item.content}
                onArticleDelete={onArticleDelete}
                savedArticles={savedArticles}
                query={query}
              ></NewsCards>
            );
          })}
      </ul>
    </section>
  );
}

export default NewsCardList;

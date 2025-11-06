import { useLocation } from "react-router-dom";

import "./NewsCardList.css";

import NewsCards from "../NewsCards/NewsCards";

function NewsCardList({
  renderedArticles,
  savedArticles,
  onArticleSave,
  onArticleDelete,
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
              ></NewsCards>
            );
          })}
      </ul>
    </section>
  );
}

export default NewsCardList;

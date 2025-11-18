import { useLocation } from "react-router-dom";

import "./NewsCardList.css";

import NewsCards from "../NewsCards/NewsCards";

function NewsCardList({
  renderedArticles,
  savedArticles,
  onArticleSave,
  onArticleDelete,
  query,
  errorMessage,
  hoveredCard,
  handleArticleHover,
}) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <section
      className={`news ${isHomePage ? "news__home" : "news__saved-news"}`}
    >
      <ul className="news-card-list">
        {errorMessage && (
          <p className="news-card-list__error">{errorMessage}</p>
        )}
        {isHomePage && renderedArticles.length === 0 && !errorMessage && (
          <p className="news-card-list__no-match">Nothing Found</p>
        )}
        {!isHomePage && savedArticles.length === 0 && (
          <p className="news-card-list__no-saved">No Saved Articles</p>
        )}

        {isHomePage &&
          renderedArticles.map((item) => {
            return (
              <NewsCards
                item={item}
                key={item.content}
                onArticleSave={onArticleSave}
                savedArticles={savedArticles}
                onArticleDelete={onArticleDelete}
                query={query}
                hoveredCard={hoveredCard}
                handleArticleHover={handleArticleHover}
              ></NewsCards>
            );
          })}
        {!isHomePage &&
          savedArticles.map((item) => {
            return (
              <NewsCards
                item={item}
                key={item._id}
                onArticleDelete={onArticleDelete}
                savedArticles={savedArticles}
                onArticleSave={onArticleSave}
                hoveredCard={hoveredCard}
                handleArticleHover={handleArticleHover}
                query={query}
              ></NewsCards>
            );
          })}
      </ul>
    </section>
  );
}

export default NewsCardList;

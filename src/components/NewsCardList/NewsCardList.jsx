import { useLocation } from "react-router-dom";

import "./NewsCardList.css";

import NewsCards from "../NewsCards/NewsCards";
import NotFound from "../../assets/not-found-image.svg?url";

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
          <div className="news-card-list__no-match">
            <img
              src={NotFound}
              alt="No Results"
              className="news-card-list__no-match_image"
            />
            <p className="news-card-list__no-match_title">Nothing Found</p>
            <p className="news-card-list__no-match_text">
              Sorry, but nothing matched your search terms.
            </p>
          </div>
        )}
        {!isHomePage && savedArticles.length === 0 && (
          <p className="news-card-list__no-saved">No Saved Articles</p>
        )}

        {isHomePage &&
          renderedArticles.map((item) => {
            return (
              <NewsCards
                item={item}
                key={item.url}
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

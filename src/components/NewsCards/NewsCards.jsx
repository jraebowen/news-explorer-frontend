import { useContext } from "react";
import { useLocation } from "react-router-dom";

import "./NewsCards.css";

import LoggedInContext from "../../contexts/LoggedInContext";

function NewsCards({
  item,
  onArticleSave,
  onArticleDelete,
  savedArticles,
  query,
}) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { isLoggedIn } = useContext(LoggedInContext);

  const isSaved = savedArticles.some((a) => a.url === item.url);

  console.log(item);
  const date = item.publishedAt;
  const dateObject = new Date(date);
  const updatedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const capitalSrc = item.source.name.toUpperCase();

  const articleUrl = item.url;

  return (
    <li className="news-card">
      <a
        href={articleUrl}
        target="_blank"
        className="news-card__link"
        rel="noopener noreferrer"
      >
        <div className="news-card__contents">
          <img
            src={item.urlToImage}
            alt={item.title}
            className="news-card__image"
          />
          <div className="news-card__image-content">
            {!isHomePage && (
              <p className="news-card__image-keyword">{item.keyword}</p>
            )}

            {!isHomePage && isLoggedIn && (
              <p className="news-card__save-text">Remove from saved</p>
            )}

            {isHomePage && !isLoggedIn && (
              <p className="news-card__save-text news-card__save-text_sign-in">
                Sign in to save articles
              </p>
            )}
            <button
              className={`news-card__btn ${
                !isLoggedIn
                  ? "news-card__btn-save"
                  : isHomePage
                  ? isSaved
                    ? "news-card__btn-saved"
                    : "news-card__btn-save"
                  : "news-card__btn-delete"
              }`}
              onClick={(e) => {
                e.preventDefault();
                if (!isLoggedIn) return;
                if (isSaved) {
                  onArticleDelete(item);
                } else {
                  onArticleSave(item, query);
                }
              }}
            ></button>
          </div>
          <div className="news-card__text">
            <p className="news-card__text-date">{updatedDate}</p>
            <p className="news-card__text-title">{item.title}</p>
            <div className="news-card__positioning-container">
              <p className="news-card__text-description">{item.description}</p>
              <p className="news-card__text-source">{capitalSrc}</p>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}

export default NewsCards;

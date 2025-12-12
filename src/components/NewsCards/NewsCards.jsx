import { useContext } from "react";
import { useLocation } from "react-router-dom";

import "./NewsCards.css";

import LoggedInContext from "../../contexts/LoggedInContext";
import NewsCardSaveIconHover from "../../assets/save-icon-hover.svg?react";
import NewsCardSaveIcon from "../../assets/save-icon.svg?react";
import NewsCardSavedIcon from "../../assets/save-icon-saved.svg?react";
import NewsCardDeleteIcon from "../../assets/delete-icon.svg?react";
import NewsCardDeleteIconHover from "../../assets/delete-icon-hover.svg?react";
import { capitalize } from "../../utils/helpers";

function NewsCards({
  item,
  onArticleSave,
  onArticleDelete,
  savedArticles,
  query,
  hoveredCard,
  handleArticleHover,
  requestLoginModal,
}) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { isLoggedIn } = useContext(LoggedInContext);

  const isSaved = savedArticles.some((a) => a.url === item.url);

  const date = item.publishedAt || item.date;
  const dateObject = new Date(date);
  const updatedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const capitalSrc = (item.source?.name || item.source || "").toUpperCase();
  const articleUrl = item.url || item.link;
  const articleImage = item.urlToImage || item.image;

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
            src={articleImage}
            alt={item.title}
            className="news-card__image"
          />
          <div className="news-card__image-content">
            {!isHomePage && (
              <p className="news-card__image-keyword">
                {capitalize(item.keyword)}
              </p>
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
              className="news-card__btn"
              onClick={(e) => {
                e.preventDefault();
                if (!isLoggedIn) {
                  return requestLoginModal();
                }
                if (isSaved) {
                  const savedArticle = savedArticles.find(
                    (a) => a.url === item.url
                  );
                  if (savedArticle) onArticleDelete(savedArticle);
                } else onArticleSave(item, query);
              }}
              onMouseEnter={() => handleArticleHover(item.url, true)}
              onMouseLeave={() => handleArticleHover(item.url, false)}
            >
              {!isLoggedIn ? (
                <NewsCardSaveIcon />
              ) : isHomePage && isSaved ? (
                <NewsCardSavedIcon />
              ) : isHomePage && !isSaved ? (
                hoveredCard?.[item.url] ? (
                  <NewsCardSaveIconHover />
                ) : (
                  <NewsCardSaveIcon />
                )
              ) : hoveredCard?.[item.url] ? (
                <NewsCardDeleteIconHover />
              ) : (
                <NewsCardDeleteIcon />
              )}
            </button>
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

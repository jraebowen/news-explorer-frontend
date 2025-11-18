import { useContext } from "react";
import { useLocation } from "react-router-dom";

import "./NewsCards.css";

import LoggedInContext from "../../contexts/LoggedInContext";
import newsCardSaveIconHover from "../../assets/save-icon-hover.svg";
import newsCardSaveIcon from "../../assets/save-icon.svg";
import newsCardSavedIcon from "../../assets/save-icon-saved.svg";
import newsCardDeleteIcon from "../../assets/delete-icon.svg";
import newsCardDeleteIconHover from "../../assets/delete-icon-hover.svg";

function NewsCards({
  item,
  onArticleSave,
  onArticleDelete,
  savedArticles,
  query,
  hoveredCard,
  handleArticleHover,
}) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { isLoggedIn } = useContext(LoggedInContext);

  const isSaved = savedArticles.some((a) => a.url === item.url);

  const date = item.publishedAt;
  const dateObject = new Date(date);
  const updatedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const capitalSrc = item.source.name.toUpperCase();

  const articleUrl = item.url;

  // let buttonImage;
  // if (!isLoggedIn) {
  //   buttonImage = onHover ? newsCardSaveIconHover : newsCardSaveIcon;
  // } else if (isHomePage) {
  //   buttonImage = isSaved
  //     ? onHover
  //       ? newsCardSavedIcon
  //       : newsCardSavedIcon
  //     : onHover
  //     ? newsCardSaveIconHover
  //     : newsCardSaveIcon;
  // } else {
  //   buttonImage = onHover ? newsCardDeleteIconHover : newsCardDeleteIcon;
  // }

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
              className="news-card__btn"
              style={{
                backgroundImage: `url(${
                  !isLoggedIn
                    ? hoveredCard?.[item.url]
                      ? newsCardSaveIconHover
                      : newsCardSaveIcon
                    : isHomePage
                    ? isSaved
                      ? newsCardSavedIcon
                      : hoveredCard?.[item.url]
                      ? newsCardSaveIconHover
                      : newsCardSaveIcon
                    : hoveredCard?.[item.url]
                    ? newsCardDeleteIconHover
                    : newsCardDeleteIcon
                })`,
              }}
              onClick={(e) => {
                e.preventDefault();
                if (!isLoggedIn) return;
                if (isSaved) onArticleDelete(item._id);
                else onArticleSave(item, query);
              }}
              onMouseEnter={() => handleArticleHover(item.url, true)}
              onMouseLeave={() => handleArticleHover(item.url, false)}
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

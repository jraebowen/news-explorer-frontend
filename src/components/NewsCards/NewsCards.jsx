import { useContext } from "react";
import { useLocation } from "react-router-dom";

import "./NewsCards.css";

import LoggedInContext from "../../contexts/LoggedInContext";

function NewsCards({ item }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { isLoggedIn } = useContext(LoggedInContext);

  const date = item.publishedAt;
  const dateObject = new Date(date);
  const updatedDate = dateObject.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const capitalSrc = item.source.toUpperCase();

  return (
    <li className="news-card">
      <div className="news-card__contents">
        <img
          src={item.urlToImage}
          alt={item.title}
          className="news-card__image"
        />
        <div className="news-card__image-content">
          {!isHomePage && (
            <p className="news-card__image-keyword">placeholder</p>
          )}

          {!isHomePage && isLoggedIn && (
            <p className="news-card__save-text">Remove from saved</p>
          )}

          {isHomePage && !isLoggedIn && (
            <p className="news-card__save-text">Sign in to save articles</p>
          )}
          <button
            className={`news-card__btn ${
              isHomePage ? "news-card__btn-save" : "news-card__btn-delete"
            }`}
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
    </li>
  );
}

export default NewsCards;

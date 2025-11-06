import { useContext } from "react";

import "./SavedNewsHeader.css";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function SavedNewsHeader({ savedArticles }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__content">
        <p className="saved-news__title">Saved articles</p>
        <p className="saved-news__details">
          {currentUser.name}, you have {savedArticles.length} saved articles
        </p>
        <p className="saved-news__keywords">By keywords: X, X, and X others</p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;

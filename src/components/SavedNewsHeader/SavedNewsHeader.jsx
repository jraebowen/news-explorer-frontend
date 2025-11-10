import { useContext } from "react";

import "./SavedNewsHeader.css";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function SavedNewsHeader({ savedArticles }) {
  const { currentUser } = useContext(CurrentUserContext);

  const keywords = [...new Set(savedArticles.map((a) => a.keyword))];

  const keywordCount = keywords.length;

  let keywordDisplay = "";

  if (keywordCount === 1) {
    keywordDisplay = keywords[0];
  } else if (keywordCount === 2) {
    keywordDisplay = `${keywords[0]} and ${keywords[1]}`;
  } else if (keywordCount === 3) {
    keywordDisplay = `${keywords[0]}, ${keywords[1]}, and ${
      keywordCount - 2
    } others`;
  }

  const articleText =
    savedArticles.length === 1 ? "saved article" : "saved articles";

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__content">
        <p className="saved-news__title">Saved articles</p>
        <p className="saved-news__details">
          {keywordCount === 1
            ? `${currentUser.username}, you have ${savedArticles.length} ${articleText}`
            : `${currentUser.username}, you
          have ${savedArticles.length} ${articleText}}`}
        </p>
        <p className="saved-news__keywords">By keywords: {keywordDisplay}</p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;

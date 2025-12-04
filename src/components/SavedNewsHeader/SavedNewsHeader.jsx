import { useContext } from "react";

import "./SavedNewsHeader.css";

import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import { capitalize } from "../../utils/helpers.js";

function SavedNewsHeader({ savedArticles }) {
  const { currentUser } = useContext(CurrentUserContext);

  const keywords = [...new Set(savedArticles.map((a) => a.keyword))].sort(
    (a, b) =>
      savedArticles.filter((x) => x.keyword === b).length -
      savedArticles.filter((x) => x.keyword === a).length
  );

  const keywordCount = keywords.length;

  let keywordDisplay = "";

  if (keywordCount === 1) {
    keywordDisplay = keywords[0];
  } else if (keywordCount === 2) {
    keywordDisplay = `${capitalize(keywords[0])} and ${capitalize(
      keywords[1]
    )}`;
  } else if (keywordCount === 3) {
    keywordDisplay = `${capitalize(keywords[0])}, ${capitalize(
      keywords[1]
    )}, and ${capitalize(keywords[2])}`;
  } else if (keywordCount === 4) {
    keywordDisplay = `${capitalize(keywords[0])}, ${capitalize(
      keywords[1]
    )}, and ${keywordCount - 2} others`;
  }

  const articleText =
    savedArticles.length === 1 ? "saved article" : "saved articles";

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__content">
        <p className="saved-news__title">Saved articles</p>
        <p className="saved-news__details">
          {keywordCount === 1
            ? `${currentUser.name}, you have ${savedArticles.length} ${articleText}`
            : `${currentUser.name}, you
          have ${savedArticles.length} ${articleText}`}
        </p>
        <p className="saved-news__keywords">By keywords: {keywordDisplay}</p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;

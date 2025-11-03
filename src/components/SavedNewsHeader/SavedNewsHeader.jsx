import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <div className="saved-news-header__content">
        <p className="saved-news__title">Saved articles</p>
        <p className="saved-news__details">
          Placeholder, you have X saved articles
        </p>
        <p className="saved-news__keywords">By keywords: X, X, and X others</p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;

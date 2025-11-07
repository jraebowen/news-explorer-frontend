import "./Main.css";

import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";

function Main({
  articles,
  visibleArticles,
  setVisibleArticles,
  onLoad,
  savedArticles,
  onArticleDelete,
  onArticleSave,
  query,
  errorMessage,
}) {
  const renderedArticles = articles.slice(0, visibleArticles);

  const handleShowMore = () => {
    setVisibleArticles((prev) => prev + 3);
  };

  const totalArticles = articles.length;

  return (
    <main className="main">
      <div className="main__content">
        {onLoad ? (
          <Preloader />
        ) : (
          <>
            <p className="main__title">Search Results</p>
            <NewsCardList
              renderedArticles={renderedArticles}
              savedArticles={savedArticles}
              onArticleSave={onArticleSave}
              onArticleDelete={onArticleDelete}
              query={query}
              errorMessage={errorMessage}
            ></NewsCardList>
            {renderedArticles.length < totalArticles && (
              <button className="main__btn-show-more" onClick={handleShowMore}>
                Show more
              </button>
            )}
          </>
        )}
      </div>
    </main>
  );
}

export default Main;

import "./Main.css";

import NewsCardList from "../NewsCardList/NewsCardList";

function Main({ articles, visibleArticles, setVisibleArticles }) {
  const renderedArticles = articles.slice(0, visibleArticles);

  const handleShowMore = () => {
    setVisibleArticles((prev) => prev + 3);
  };

  const totalArticles = articles.length;

  return (
    <main className="main">
      <div className="main__content">
        <p className="main__title">Search Results</p>
        <NewsCardList renderedArticles={renderedArticles}></NewsCardList>
        {renderedArticles.length < totalArticles && (
          <button className="main__btn-show-more" onClick={handleShowMore}>
            Show more
          </button>
        )}
      </div>
    </main>
  );
}

export default Main;

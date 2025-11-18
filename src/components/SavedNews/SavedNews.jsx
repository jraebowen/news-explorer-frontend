import "./SavedNews.css";

import Navigation from "../Navigation/Navigation";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({
  onLogout,
  toggleMobileMenu,
  isMobileMenuOpened,
  savedArticles,
  onArticleSave,
  onArticleDelete,
  query,
  hoveredCard,
  handleArticleHover,
}) {
  return (
    <section className="saved-news">
      <Navigation
        onLogout={onLogout}
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpened={isMobileMenuOpened}
      ></Navigation>
      <SavedNewsHeader savedArticles={savedArticles}></SavedNewsHeader>
      <NewsCardList
        savedArticles={savedArticles}
        onArticleSave={onArticleSave}
        onArticleDelete={onArticleDelete}
        hoveredCard={hoveredCard}
        handleArticleHover={handleArticleHover}
        query={query}
      ></NewsCardList>
    </section>
  );
}

export default SavedNews;

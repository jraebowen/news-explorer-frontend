import "./SavedNews.css";

import Navigation from "../Navigation/Navigation";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ onLogout, toggleMobileMenu, isMobileMenuOpened }) {
  return (
    <section className="saved-news">
      <Navigation
        onLogout={onLogout}
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpened={isMobileMenuOpened}
      ></Navigation>
      <SavedNewsHeader></SavedNewsHeader>
      <NewsCardList></NewsCardList>
    </section>
  );
}

export default SavedNews;

import "./SavedNews.css";

import Navigation from "../Navigation/Navigation";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews() {
  return (
    <section className="saved-news">
      <Navigation></Navigation>
      <SavedNewsHeader></SavedNewsHeader>
      <NewsCardList></NewsCardList>
    </section>
  );
}

export default SavedNews;

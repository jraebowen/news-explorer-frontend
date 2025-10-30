import "./Main.css";

import NewsCardList from "../NewsCardList/NewsCardList";

function Main() {
  return (
    <main className="main">
      <p className="main__title">Search Results</p>
      <NewsCardList></NewsCardList>
      <button className="main__btn-show-more">Show more</button>
    </main>
  );
}

export default Main;

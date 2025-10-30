import "./NewsCardList.css";

import NewsCards from "../NewsCards/NewsCards";

function NewsCardList() {
  return (
    <section className="news">
      <ul className="news-card-list">
        <NewsCards></NewsCards>
      </ul>
    </section>
  );
}

export default NewsCardList;

import { useLocation } from "react-router-dom";

import "./NewsCardList.css";

import NewsCards from "../NewsCards/NewsCards";

function NewsCardList({ renderedArticles }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <section
      className={`news ${isHomePage ? "news__home" : "news__saved-news"}`}
    >
      <ul className="news-card-list">
        {renderedArticles.map((item) => {
          return <NewsCards item={item} key={item.content}></NewsCards>;
        })}
      </ul>
    </section>
  );
}

export default NewsCardList;

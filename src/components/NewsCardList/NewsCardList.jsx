import { useLocation } from "react-router-dom";

import "./NewsCardList.css";

import NewsCards from "../NewsCards/NewsCards";

function NewsCardList({ articles }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  console.log("articles", articles);

  return (
    <section
      className={`news ${isHomePage ? "news__home" : "news__saved-news"}`}
    >
      <ul className="news-card-list">
        {articles.map((item) => {
          return <NewsCards item={item}></NewsCards>;
        })}
      </ul>
    </section>
  );
}

export default NewsCardList;

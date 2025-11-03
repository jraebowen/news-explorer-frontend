import { useLocation } from "react-router-dom";

import "./NewsCardList.css";

import NewsCards from "../NewsCards/NewsCards";
import { searchResults } from "../../utils/constants";

function NewsCardList() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <section
      className={`news ${isHomePage ? "news__home" : "news__saved-news"}`}
    >
      <ul className="news-card-list">
        {searchResults.map((item) => {
          return <NewsCards item={item}></NewsCards>;
        })}
      </ul>
    </section>
  );
}

export default NewsCardList;

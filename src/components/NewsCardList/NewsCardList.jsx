import "./NewsCardList.css";

import NewsCards from "../NewsCards/NewsCards";
import { searchResults } from "../../utils/constants";

function NewsCardList() {
  return (
    <section className="news">
      <ul className="news-card-list">
        {searchResults.map((item) => {
          return <NewsCards item={item}></NewsCards>;
        })}
      </ul>
    </section>
  );
}

export default NewsCardList;

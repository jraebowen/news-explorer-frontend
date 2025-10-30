import "./NewsCards.css";

import placeholder from "../../assets/placeholder.jpg";

function NewsCards() {
  return (
    <li className="news-card">
      <div className="news-card__contents">
        <img src={placeholder} alt="" className="news-card__image" />
        <div className="news-card__text">
          <p className="news-card__text-date">November 4, 2020</p>
          <p className="news-card__text-title">
            Everyone Needs a Special 'Sit Spot' in Nature
          </p>
          <p className="news-card__text-description">
            Ever since I read Richard Louv's influential book, "Last Child in
            the Woods," the idea of having a special "sit spot" has stuck with
            me. This advice, which Louv attributes to nature educator Jon Young,
            is for both adults and children to find...
          </p>
          <p className="news-card__text-source">TREEHUGGER</p>
        </div>
      </div>
    </li>
  );
}

export default NewsCards;

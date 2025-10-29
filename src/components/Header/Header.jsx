import "./Header.css";

import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <section className="header">
      <Navigation></Navigation>
      <div className="header__search">
        <h1 className="header__search_title">What's going on in the world?</h1>
        <p className="header__search_description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
    </section>
  );
}

export default Header;

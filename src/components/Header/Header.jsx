import "./Header.css";

import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ onLogin, onLogout, toggleMobileMenu, isMobileMenuOpened }) {
  return (
    <header className="header">
      <Navigation
        onLogin={onLogin}
        onLogout={onLogout}
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpened={isMobileMenuOpened}
      ></Navigation>
      <div className="header__content">
        <div className="header__search">
          <h1 className="header__search_title">
            What's going on in the world?
          </h1>
          <p className="header__search_description">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm></SearchForm>
        </div>
      </div>
    </header>
  );
}

export default Header;

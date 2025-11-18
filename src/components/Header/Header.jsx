import "./Header.css";

import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import mainImage from "../../assets/main-image.jpg";

function Header({
  onLogin,
  onLogout,
  toggleMobileMenu,
  isMobileMenuOpened,
  activeModal,
  query,
  setQuery,
  onSearch,
  errorMessage,
}) {
  return (
    <header
      className="header"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${mainImage})`,
        backgroundPosition: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navigation
        onLogin={onLogin}
        onLogout={onLogout}
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpened={isMobileMenuOpened}
        activeModal={activeModal}
      ></Navigation>
      <div className="header__content">
        <div className="header__search">
          <h1 className="header__search_title">
            What&apos;s going on in the world?
          </h1>
          <p className="header__search_description">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm
            query={query}
            setQuery={setQuery}
            onSearch={onSearch}
            errorMessage={errorMessage}
          ></SearchForm>
        </div>
      </div>
    </header>
  );
}

export default Header;

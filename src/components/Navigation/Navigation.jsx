import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navigation.css";

import logouthome from "../../assets/logout-home.png";
import logoutnews from "../../assets/logout-saved-news.png";
import LoggedInContext from "../../contexts/LoggedInContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function Navigation({
  onLogin,
  onLogout,
  toggleMobileMenu,
  isMobileMenuOpened,
  activeModal,
}) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const { isLoggedIn } = useContext(LoggedInContext);
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <nav className="nav">
      <div className="nav__content nav__content_desktop">
        <Link to="/">
          <button
            type="button"
            className={`nav__content-logo nav__content-logo_desktop ${
              isHomePage ? "" : "nav__content-logo_saved-news"
            }`}
          >
            NewsExplorer
          </button>
        </Link>
        <ul className="nav__links nav__links_desktop">
          <li className="nav__item">
            <Link to="/">
              <button
                type="button"
                className={`nav__links-home ${
                  isHomePage ? "" : "nav__links-home_saved-news"
                }`}
              >
                Home
              </button>
            </Link>
          </li>

          {isLoggedIn ? (
            <>
              <Link to="saved-news">
                <li className="nav__item">
                  <button
                    type="button"
                    className={`nav__links-profile ${
                      isHomePage ? "" : "nav__links-profile_saved-news"
                    }`}
                  >
                    Saved Articles
                  </button>
                </li>
              </Link>
              <li className="nav__item">
                <button
                  type="button"
                  className={`nav__links-logout ${
                    isHomePage ? "" : "nav__links-logout_saved-news"
                  }`}
                  onClick={onLogout}
                >
                  {currentUser.name}
                  <img
                    src={isHomePage ? logouthome : logoutnews}
                    alt="logout icon"
                    className="logout-icon"
                  />
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav__item">
                <button
                  type="button"
                  className="nav__links-login"
                  onClick={onLogin}
                >
                  Sign in
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
      {!isMobileMenuOpened && !activeModal && (
        <button
          type="button"
          className={`nav__links_mobile-btn ${
            isHomePage
              ? "nav__links_mobile-btn_home"
              : "nav__links_mobile-btn_news"
          }`}
          onClick={toggleMobileMenu}
        />
      )}
      <>
        <div
          className={`nav__overlay ${
            isMobileMenuOpened ? "nav__overlay--open" : "nav__overlay--closed"
          }`}
          onClick={toggleMobileMenu}
        ></div>

        <div
          className={`nav__content_mobile-modal ${
            isLoggedIn ? "nav__content_mobile-modal_logged-in" : ""
          } ${
            isMobileMenuOpened
              ? "nav__content_mobile-modal--open"
              : "nav__content_mobile-modal--closed"
          }`}
        >
          <div className="nav__header-mobile">
            <Link to="/">
              <button
                type="button"
                className="nav__content-logo nav__content-logo_mobile"
              >
                NewsExplorer
              </button>
            </Link>
            <button
              type="button"
              className="nav__mobile-menu_modal-close-btn"
              onClick={toggleMobileMenu}
            />
          </div>

          <ul className="nav__links nav__links_mobile">
            <li className="nav__item nav__item_home">
              <Link to="/">
                <button
                  type="button"
                  className="nav__links-home nav__links-home_mobile"
                  onClick={toggleMobileMenu}
                >
                  Home
                </button>
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <Link to="/saved-news">
                  <li className="nav__item nav__item_profile">
                    <button
                      type="button"
                      className="nav__links-profile nav__links-profile_mobile"
                      onClick={toggleMobileMenu}
                    >
                      Saved Articles
                    </button>
                  </li>
                </Link>
                <li className="nav__item nav__item_logout">
                  <button
                    type="button"
                    className="nav__links-logout"
                    onClick={onLogout}
                  >
                    {currentUser.name}
                    <img
                      src={logouthome}
                      alt="logout icon"
                      className="logout-icon"
                    />
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav__item">
                  <button
                    type="button"
                    className="nav__links-login"
                    onClick={() => {
                      onLogin();
                      toggleMobileMenu();
                    }}
                  >
                    Sign in
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </>
    </nav>
  );
}

export default Navigation;

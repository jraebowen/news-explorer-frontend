import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

import logout from "../../assets/logout.png";
import LoggedInContext from "../../contexts/LoggedInContext";

function Navigation({ onLogout, toggleMobileMenu, isMobileMenuOpened }) {
  const { isLoggedIn } = useContext(LoggedInContext);

  return (
    <nav className="nav">
      <div className="nav__content nav__content_desktop">
        <Link to="/">
          <button
            type="button"
            className="nav__content-logo nav__content-logo_desktop"
          >
            NewsExplorer
          </button>
        </Link>
        <ul className="nav__links nav__links_desktop">
          <li className="nav__item">
            <Link to="/">
              <button type="button" className="nav__links-home">
                Home
              </button>
            </Link>
          </li>

          {isLoggedIn ? (
            <>
              <li className="nav__item">
                <button type="button" className="nav__links-profile">
                  Saved Articles
                </button>
              </li>
              <li className="nav__item">
                <button
                  type="button"
                  className="nav__links_logout"
                  onClick={onLogout}
                >
                  placeholder
                  <img src={logout} alt="logout icon" className="logout-icon" />
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav__item">
                <button type="button" className="nav__links-login">
                  Sign in
                </button>
              </li>
            </>
          )}
        </ul>

        {!isMobileMenuOpened && (
          <button
            type="button"
            className="nav__links_mobile-btn"
            onClick={toggleMobileMenu}
          />
        )}
        {isMobileMenuOpened && (
          <>
            <div className="nav__overlay" onClick={toggleMobileMenu}></div>
            <div
              className={`nav__content nav__content_mobile-modal ${
                isLoggedIn ? "nav__content_mobile-modal_logged-in" : ""
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
                    <li className="nav__item nav__item_profile">
                      <button
                        type="button"
                        className="nav__links-profile nav__links-profile_mobile"
                      >
                        Saved Articles
                      </button>
                    </li>
                    <li className="nav__item nav__item_logout">
                      <button
                        type="button"
                        className="nav__links_logout"
                        onClick={onLogout}
                      >
                        placeholder
                        <img
                          src={logout}
                          alt="logout icon"
                          className="logout-icon"
                        />
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav__item">
                      <button type="button" className="nav__links-login">
                        Sign in
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;

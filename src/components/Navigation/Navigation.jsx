import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

import logout from "../../assets/logout.png";
import LoggedInContext from "../../contexts/LoggedInContext";

function Navigation({ onLogout }) {
  const { isLoggedIn } = useContext(LoggedInContext);

  return (
    <nav className="nav">
      <div className="nav__content">
        <Link to="/">
          <button type="button" className="nav__content_logo">
            NewsExplorer
          </button>
        </Link>
        <ul className="nav__links">
          <li className="nav__item">
            <Link to="/">
              <button type="button" className="nav__links_home">
                Home
              </button>
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className="nav__item">
                <button type="button" className="nav__links_profile">
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
                <button type="button" className="nav__links_login">
                  Sign in
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

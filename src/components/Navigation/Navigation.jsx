import { Link } from "react-router-dom";

import "./Navigation.css";

function Navigation() {
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
          <li className="nav__item">
            <button type="button" className="nav__links_login">
              Sign in
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__content">
        <p className="nav__content_title">NewsExplorer</p>
        <ul className="nav__links">
          <li className="nav__item">
            <button type="button" className="nav__links_home">
              Home
            </button>
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

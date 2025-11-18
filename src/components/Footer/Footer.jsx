import { Link } from "react-router-dom";

import "./Footer.css";

import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          &copy; 2025 Supersite, Powered by News API{" "}
        </p>
        <ul className="footer__links">
          <div className="footer__links_text-links">
            <li className="footer__link">
              <Link to="/">
                <button className="footer__link-home">Home</button>
              </Link>
            </li>
            <li className="footer__link">
              <a
                href="https://tripleten.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link-tripleten"
              >
                TripleTen
              </a>
            </li>
          </div>
          <li className="footer__link">
            <a
              href="https://github.com/jraebowen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" className="footer__link-github" />
            </a>
          </li>
          <li className="footer__link">
            <a
              href="https://www.linkedin.com/in/jaimiebowen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="footer__link-linkedin"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

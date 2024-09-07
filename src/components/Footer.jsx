import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__links">
          <Link to="#" className="footer__link">
            About
          </Link>
          <Link to="#" className="footer__link">
            Store Locator
          </Link>
          <Link to="#" className="footer__link">
            FAQ's
          </Link>
          <Link to="#" className="footer__link">
            News
          </Link>
          <Link to="#" className="footer__link">
            Careers
          </Link>
          <a href="mailto:contact@example.com" className="footer__link">
            Contact us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

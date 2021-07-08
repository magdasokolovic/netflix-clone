import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="/" className="footer-links">
            Audio and Subtitles
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            Help Center
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            Gift Cards
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            Media Center
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/" className="footer-links">
            Terms of Use
          </Link>
        </li>
      </ul>

      <div className="copyright">
        &copy; 2021,&nbsp;
        <a
          href="https://github.com/KhanhChiTran"
          target="_blank"
          rel="noreferrer"
        >
          Chi
        </a>
        <a href="https://github.com/juliasckr" target="_blank" rel="noreferrer">
          Julia
        </a>
        <a
          href="https://github.com/magdasokolovic"
          target="_blank"
          rel="noreferrer"
        >
          Magda
        </a>
        <a
          href="https://github.com/nathcolombo"
          target="_blank"
          rel="noreferrer"
        >
          Nathaly
        </a>
      </div>
    </div>
  );
};

export default Footer;

import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../images/movie-bay-logo.png";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <header className={navbar ? "nav-active" : ""}>
        <Link to="/" onClick={closeMobileMenu}>
          <img src={logo} alt="logo" className="site-logo" />
        </Link>
        <nav className="main-nav">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav__list active" : "nav__list"}>
            <li className="nav__list-item">
              <Link to="/" className="nav__link" onClick={closeMobileMenu}>
  Home
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                TV Shows
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                Movies
              </Link>
            </li>
            <li className="nav__list-item">
              <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                New & Popular
              </Link>
            </li>
            {/* <li className="nav__list-item">
              <Link to="/" className="nav__link" onClick={closeMobileMenu}>
                My List
              </Link>
            </li> */}

            <li className="nav__list-item">
              {/* still need to add function onSubmit */}
              <form>
                <input
  type = "text"
  name = "search"
  placeholder = "search"
                  className="nav__link nav__link--input"
                />
              </form>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

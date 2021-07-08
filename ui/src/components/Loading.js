import React from "react";
// import "../sass/components/_loading.scss"
import logo from "../images/movie-bay-logo.png";
export default function Loading() {
  return (
    <div className="overlay">
      <div className="loader"></div>
      <img src={logo} alt="logo" className="site-logo__loading" />
    </div>
  );
}

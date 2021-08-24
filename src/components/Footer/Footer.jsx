import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      Powered by&nbsp;
      <a
        href="https://www.themoviedb.org/documentation/api"
        target="_blank"
        rel="noreferrer"
      >
        TMDb API
      </a>
    </div>
  );
};

export default Footer;

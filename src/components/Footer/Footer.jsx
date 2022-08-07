import React from "react";

import "./Footer.css";

import Link from "../Link/Link"; 

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__info">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__main">
        <p className="footer__year">© {new Date().getFullYear()}</p>
        <div className="footer__links">
          <Link className="footer__link">GitHub</Link>
          <Link className="footer__link">Instagram</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
          <Link className="footer__link" href="https://github.com/thebarbakov" target="_blank" >GitHub</Link>
          <Link className="footer__link" gref="https://instagram.com/thebarbakov" target="_blank">Instagram</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

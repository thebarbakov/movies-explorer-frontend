import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__info">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__main">
        <p className="footer__year">© {new Date().getFullYear()}</p>
        <div className="footer__links">
        <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/thebarbakov"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="footer__link"
            href="https://instagram.com/thebarbakov"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

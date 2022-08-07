import React from "react";

import "./Portfolio.css";

import Section from "../../Section/Section";

export default function Portfolio() {
  return (
    <Section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <a className="portfolio__link" href="/#">
            Статичный сайт<span className="portfolio__icon">↗</span>
          </a>
        </li>
        <li className="portfolio__element">
          <a className="portfolio__link" href="/#">
            Адаптивный сайт<span className="portfolio__icon">↗</span>
          </a>
        </li>
        <li className="portfolio__element">
          <a className="portfolio__link" href="/#">
            Одностраничное приложение<span className="portfolio__icon">↗</span>
          </a>
        </li>
      </ul>
    </Section>
  );
}

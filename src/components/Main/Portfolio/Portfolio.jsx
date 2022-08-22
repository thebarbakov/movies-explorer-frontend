import React from "react";

import "./Portfolio.css";

import Section from "../../Section/Section";

export default function Portfolio() {
  return (
    <Section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <a className="portfolio__link" href="https://thebarbakov.github.io/how-to-learn/" targer="_blank">
            Статичный сайт<span className="portfolio__icon">↗</span>
          </a>
        </li>
        <li className="portfolio__element">
          <a className="portfolio__link" href="https://thebarbakov.github.io/russian-travel/index.html" targer="_blank">
            Адаптивный сайт<span className="portfolio__icon">↗</span>
          </a>
        </li>
        <li className="portfolio__element">
          <a className="portfolio__link" href="/#" targer="_blank">
            Одностраничное приложение<span className="portfolio__icon">↗</span>
          </a>
        </li>
      </ul>
    </Section>
  );
}

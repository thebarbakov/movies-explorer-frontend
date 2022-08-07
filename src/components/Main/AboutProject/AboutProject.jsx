import React from "react";

import './AboutProject.css'

import Subtitle from "../../Subtitle/Subtitle";
import Section from "../../Section/Section";

export default function AboutProject() {
  return (
    <Section className="about-project">
      <Subtitle className="about-project__title">О проекте</Subtitle>
      <div className="about-project__info">
        <div className="about-project__block">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__block">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__timeline">
        <div className="timeline__backend">1 неделя<p className="timeline__note">Back-end</p></div>
        <div className="timeline__frontend">4 недели<p className="timeline__note">Front-end</p></div>
      </div>
    </Section>
  );
}

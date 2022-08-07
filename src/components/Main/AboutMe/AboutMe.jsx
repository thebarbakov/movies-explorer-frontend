import React from "react";

import "./AboutMe.css";
import avatar from "../../../images/profile.png";

import Subtitle from "../../Subtitle/Subtitle";
import Section from "../../Section/Section";

import Link from "../../Link/Link";

export default function AboutMe() {
  return (
    <Section className="about-me">
      <Subtitle className="about-me__title">Студент</Subtitle>
      <div className="about-me__profile">
        <div className="about-me__column about-me__column_profile">
          <h3 className="about-me__name">Ярослав</h3>
          <p className="about-me__job">Веб-разработчик, 19 лет</p>
          <p className="about-me__bio">
            Таким образом постоянное информационно-пропагандистское обеспечение
            нашей деятельности играет важную роль в формировании соответствующий
            условий активизации. Равным образом постоянный количественный рост и
            сфера нашей активности в значительной степени обуславливает создание
            модели развития. Таким образом консультация с широким активом
            представляет собой интересный эксперимент проверки модели развития.
          </p>
          <div className="about-me__links">
            <Link className="about-me__link">
              GitHub
            </Link>
            <Link className="about-me__link">
              Instagram
            </Link>
          </div>
        </div>
        <div className="about-me__column about-me__column_avatar">
          <img className="about-me__avatar" src={avatar} alt="Ярослав" />
        </div>
      </div>
    </Section>
  );
}

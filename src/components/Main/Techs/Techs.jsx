import React from "react";

import "./Techs.css";

import Subtitle from "../../Subtitle/Subtitle";
import Section from "../../Section/Section";

export default function Techs() {
  return (
    <Section className="techs">
      <Subtitle className="techs__title">Технологии</Subtitle>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__list">
        <div className="techs__item">HTML</div>
        <div className="techs__item">CSS</div>
        <div className="techs__item">JS</div>
        <div className="techs__item">React</div>
        <div className="techs__item">Git</div>
        <div className="techs__item">Express.js</div>
        <div className="techs__item">mongoDB</div>
      </div>
    </Section>
  );
}

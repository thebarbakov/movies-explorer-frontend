import React from "react";

import "./Promo.css"

import zigzag from "../../../images/zigzag.svg"
import Section from "../../Section/Section";

export default function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className="promo__image" alt="Зигзаги" src={zigzag}/>
    </section>
  );
}

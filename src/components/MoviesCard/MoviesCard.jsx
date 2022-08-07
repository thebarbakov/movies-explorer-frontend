import React from "react";

import "./MoviesCard.css";

import check from "../../images/check.svg";

export default function MoviesCard({ film }) {

  const generateDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours > 0 ? hours + "ч " : ""}${minutes}м`;
  };
  
  return (
    <div className="movies-card">
      <div
        className="movies-card__image"
        style={{
          backgroundImage: `url(https://api.nomoreparties.co${film.image.url})`,
        }}
      >
        <button className="movies-card__button movies-card__button_save">Сохрнаить</button>
        <button className="movies-card__button movies-card__button_delete" />
      </div>
      <div className="movies-card__info">
        <p className="movies-card__name">{film.nameRU}</p>
        <p className="movies-card__duration">{generateDuration(film.duration)}</p>
      </div>
    </div>
  );
}

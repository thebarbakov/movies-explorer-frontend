import React from "react";

import "./MoviesCard.css";

export default function MoviesCard({
  film,
  isSaved,
  addSavedMovie,
  unsaveMovie,
  isSavedMovie,
}) {
  const generateDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours > 0 ? hours + "ч " : ""}${minutes}м`;
  };

  const saveMovie = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addSavedMovie(film);
  };

  const deleteMovie = (e) => {
    e.preventDefault();
    e.stopPropagation();
    unsaveMovie(isSavedMovie ? film._id : film.id);
  };

  return (
    <div className="movies-card">
      <a href={film.trailerLink} target="_blank" rel="noreferrer">
        <div
          className="movies-card__image"
          style={{
            backgroundImage: isSavedMovie
              ? `url(${film.image})`
              : `url(https://api.nomoreparties.co${film.image.url})`,
          }}
        >
          {isSaved ? (
            <button
              className="movies-card__button movies-card__button_delete"
              type="button"
              onClick={deleteMovie}
            />
          ) : (
            <button
              className="movies-card__button movies-card__button_save"
              type="button"
              onClick={saveMovie}
            >
              Сохранить
            </button>
          )}
        </div>
      </a>
      <div className="movies-card__info">
        <p className="movies-card__name">{film.nameRU}</p>
        <p className="movies-card__duration">
          {generateDuration(film.duration)}
        </p>
      </div>
    </div>
  );
}

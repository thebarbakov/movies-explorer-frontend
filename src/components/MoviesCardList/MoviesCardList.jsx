import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

const MoviesCardList = ({ films }) => {
  return (
    <section className="movies-list">
      <div className="movies-list__list">
        {films !== null
          ? films.map((film) => <MoviesCard key={film.id} film={film} />)
          : ""}
      </div>
      <div className="movies-list__block">
        <button className="movies-list__button" type="button">Ещё</button>
      </div>
    </section>
  );
};

export default MoviesCardList;

import React, { useState, useEffect } from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

const MoviesCardList = ({
  films,
  savedMovies,
  addSavedMovie,
  deleteSavedMovie,
  isSaved,
}) => {
  const [count, setCount] = useState(0);
  const [countOfMore, setCountOfMore] = useState(0);

  const unsaveMovie = (id) => {
    if (isSaved) deleteSavedMovie(id);
    else deleteSavedMovie(savedMovies.find((el) => el.movieId === id)._id);
  };

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setCount(12);
        setCountOfMore(3);
      } else if (width >= 768) {
        setCount(8);
        setCountOfMore(2);
      } else {
        setCount(5);
        setCountOfMore(2);
      }
    };

    updateCount();

    window.addEventListener("resize", updateCount);

    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const showMore = (e) => {
    setCount(count + countOfMore);
  };

  return (
    <section className="movies-list">
      <div className="movies-list__list">
        {films.map((film, index) =>
          index + 1 <= count ? (
            <MoviesCard
              key={isSaved ? films._id : film.id}
              film={film}
              isSaved={
                isSaved
                  ? true
                  : savedMovies &&
                    savedMovies.some((el) => el.movieId === film.id)
              }
              addSavedMovie={addSavedMovie}
              unsaveMovie={unsaveMovie}
              isSavedMovie={isSaved}
            />
          ) : (
            ""
          )
        )}
      </div>
      <div className="movies-list__block">
        {films.length < count ? (
          ""
        ) : (
          <button
            className="movies-list__button"
            type="button"
            onClick={showMore}
          >
            Ещё
          </button>
        )}
      </div>
    </section>
  );
};

export default MoviesCardList;

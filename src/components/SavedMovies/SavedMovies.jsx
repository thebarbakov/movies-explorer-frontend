import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./SavedMovies.css";

export default function SavedMovies({
  savedMovies,
  addSavedMovie,
  deleteSavedMovie,
}) {
  const [films, setFilms] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSearchQuerry = (querry) => {
    setFilms(null);
    setMessage(null);
    const querryResult = savedMovies
      .filter((element) =>
        element.nameRU.toLowerCase().includes(querry.search.toLowerCase())
      )
      .filter((element) => element.duration > (querry.isShort ? 0 : 40));
    if (querryResult.length === 0) setMessage("Ничего не найдено(");
    else setFilms(querryResult);
  };

  useEffect(() => {
    setFilms(null);
    setMessage(null);
    if (savedMovies.length === 0)
      setMessage("У вас еще нет сохраненных фильмов(");
    else setFilms(savedMovies);
  }, [savedMovies]);

  return (
    <>
      <Header className="movies-saved__header" />
      <main>
        <SearchForm
          handleSearchQuerry={handleSearchQuerry}
          isNotFirst={(message !== null) || (films !== null)}
        />
        {message ? <p className="movies__message">{message}</p> : ""}
        {films ? (
          <MoviesCardList
            films={films}
            addSavedMovie={addSavedMovie}
            deleteSavedMovie={deleteSavedMovie}
            isSaved={true}
          />
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
}

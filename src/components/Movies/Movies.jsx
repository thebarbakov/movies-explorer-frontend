import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import moviesApi from "../../utils/MoviesApi";

import Preloader from "../Preloader/Preloader";

import "./Movies.css";

export default function Movies({
  savedMovies,
  addSavedMovie,
  deleteSavedMovie,
}) {
  const [querryResult, setQuerryResult] = useState(null);
  const [films, setFilms] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchQuerry = async (querry) => {
    setQuerryResult(null);
    setMessage(null);
    let filmsQuerry = films;
    if (!filmsQuerry) {
      setIsLoading(true);
      try {
        filmsQuerry = await moviesApi.getMovies();
        setFilms(filmsQuerry);
        setIsLoading(false);
      } catch (e) {
        setMessage(`Во время запроса произошла ошибка. 
      Возможно, проблема с соединением или сервер недоступен. 
      Подождите немного и попробуйте ещё раз`);
      }
    }
    const querryResult = filmsQuerry
      .filter((element) =>
        element.nameRU.toLowerCase().includes(querry.search.toLowerCase())
      )
      .filter((element) => element.duration > (querry.isShort ? 0 : 40));
    if (querryResult.length === 0) setMessage("Ничего не найдено(");
    else {
      setQuerryResult(querryResult);
      setMessage(null);
    }
    if (JSON.parse(localStorage.getItem("savedQuerry"))) {
      localStorage.removeItem("savedQuerry");
    }
    localStorage.setItem(
      "savedQuerry",
      JSON.stringify({
        querry,
        querryResult,
      })
    );
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem("savedQuerry")) &&
      setQuerryResult(
        JSON.parse(localStorage.getItem("savedQuerry")).querryResult
      );
  }, []);

  return (
    <>
      <Header className="movies__header" />
      <main>
        <SearchForm
          isNotFirst={message !== null || querryResult !== null}
          handleSearchQuerry={handleSearchQuerry}
          savedQuerry={
            JSON.parse(localStorage.getItem("savedQuerry"))
              ? JSON.parse(localStorage.getItem("savedQuerry")).querry
              : null
          }
        />
        {message ? <p className="movies__message">{message}</p> : ""}
        {isLoading ? <Preloader isLocal={true} /> : ""}
        {querryResult ? (
          <MoviesCardList
            films={querryResult}
            savedMovies={savedMovies}
            addSavedMovie={addSavedMovie}
            deleteSavedMovie={deleteSavedMovie}
            isSaved={false}
          />
        ) : (
          ""
        )}
      </main>
      <Footer />
    </>
  );
}

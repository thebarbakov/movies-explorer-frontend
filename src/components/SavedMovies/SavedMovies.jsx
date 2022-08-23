import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import moviesApi from "../../utils/MoviesApi";

import "./SavedMovies.css";

export default function SavedMovies() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    moviesApi.getMovies().then((data) => {
      setFilms(data.filter((film, index) => index < 3));
    });
  }, []);
    //^^ Чтобы что-то было
  return (
    <>
      <Header className="movies-saved__header"/>
      <main>
      <SearchForm />
      <MoviesCardList films={films} />
      <Footer />
      </main>
    </>
  );
}

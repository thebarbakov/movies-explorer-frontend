import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import moviesApi from "../../utils/MoviesApi";

import "./Movies.css";

export default function Movies() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    moviesApi.getMovies().then((data) => {
      setFilms(data.filter((film, index) => index < 9));
    });
  }, []);
  //^^ Чтобы что-то было

  return (
    <>
      <Header className="movies__header"/>
      <main>
        <SearchForm />
        <MoviesCardList films={films} />
      </main>
      <Footer />
    </>
  );
}

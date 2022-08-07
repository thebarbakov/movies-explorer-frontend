import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";

export default function Header(props) {
  return (
    <header className={`header${props.className ? " " + props.className : ""}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <div className="header__profile">
        {/* <>
          <Link to="/signup" className="header__button-signup">
            Регистрация
          </Link>
          <Link to="/signin" className="header__button-signin">
            Войти
          </Link>
        </> */}
        <>
          <Link to="/movies" className="header__button">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__button">
            Сохранённые фильмы
          </Link>
          <Link to="/profile" className="header__button-profile">
            <img className="header__icon" src={profile} alt="Профиль" />
            Аккаунт
          </Link>
        </>
      </div>
    </header>
  );
}

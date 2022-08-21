import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import menu from "../../images/menu.svg";
import Navigation from "../Navigation/Navigation";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`header${props.className ? " " + props.className : ""}`}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="Логотип" />
      </Link>
      <div className="header__mobile-icon" onClick={() => setIsOpen(true)}>
        <img src={menu} alt="Меню" />
      </div>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="header__list">
        {/* <>
          <Link to="/signup" className="header__button-signup">
            Регистрация
          </Link>
          <Link to="/signin" className="header__button-signin">
            Войти
          </Link>
        </> */}
        <>
          <NavLink to="/movies" className="header__button">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="header__button">
            Сохранённые фильмы
          </NavLink>
          <Link to="/profile" className="header__button-profile">
            <img className="header__icon" src={profile} alt="Профиль" />
            Аккаунт
          </Link>
        </>
      </div>
    </header>
  );
}

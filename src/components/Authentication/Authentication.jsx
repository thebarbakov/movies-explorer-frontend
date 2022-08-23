import React, { useState } from "react";
import logo from "../../images/logo.svg";

import { Link } from "react-router-dom";

import "./Authentication.css";

export default function SignIn({ isRegister }) {
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <main>
      <form className="authentication__form">
        <img className="authentication__logo" src={logo} alt="logo" />
        <h1 className="authentication__title">
          {isRegister ? "Добро пожаловать!" : "Рады видеть!"}
        </h1>
        <div className="authentication__input-container">
          {isRegister ? (
            <div className="authentication__input-group">
              <label className="authentication__label" htmlFor="name">
                Имя
              </label>
              <input
                className="authentication__input"
                required
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={form.name}
              />
            </div>
          ) : (
            ""
          )}
          <div className="authentication__input-group">
            <label className="authentication__label" htmlFor="email">
              E-Mail
            </label>
            <input
              className="authentication__input"
              required
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className="authentication__input-group">
            <label className="authentication__label" htmlFor="password">
              Пароль
            </label>
            <input
              className="authentication__input"
              required
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={form.password}
            />
          </div>
          {error ? <p className="authentication__error">{error}</p> : ""}
        </div>
        <button
          type="submit"
          className={`authentication__button ${
            isRegister
              ? "authentication__button_margin-top_l"
              : "authentication__button_margin-top_xl"
          }`}
        >
          {isRegister ? "Зарегистрироваться" : "Войти"}
        </button>
        {isRegister ? (
          <p className="authentication__text">
            Уже зарегистрированы?{" "}
            <Link className="authentication__link" to="/signin">
              Войти
            </Link>
          </p>
        ) : (
          <p className="authentication__text">
            Ещё не зарегистрированы?{" "}
            <Link className="authentication__link" to="/signup">
              Регистрация
            </Link>
          </p>
        )}
      </form>
    </main>
  );
}

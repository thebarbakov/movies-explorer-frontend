import React, { useState, useEffect } from "react";
import logo from "../../images/logo.svg";
import { ToolsContext } from "../../utils/сontext/ToolsContext";

import { Link, useNavigate } from "react-router-dom";

import mainApi from "../../utils/MainApi";

import "./Authentication.css";

export default function SignIn({ isRegister }) {
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [valid, setValid] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setValid({
      ...valid,
      [e.target.name]: {
        isValid: e.target.validity.valid,
        message: !e.target.validity.valid ? e.target.validationMessage : "",
      },
    });
  };
  const navigator = useNavigate();
  const toolsContext = React.useContext(ToolsContext);

  useEffect(() => {
    isRegister
      ? setValid({
          name: { isValid: false, message: "Не заполнено имя" },
          email: { isValid: false, message: "Не заполнен E-Mail" },
          password: { isValid: false, message: "Не заполнен пароль" },
        })
      : setValid({
          email: { isValid: false, message: "Не заполнен E-Mail" },
          password: { isValid: false, message: "Не заполнен пароль" },
        });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = Object.keys(valid);
    let validationErrors = null;
    inputs.forEach((input, index) => {
      if (!valid[input].isValid) {
        if (validationErrors === null) validationErrors = valid[input].message;
        else validationErrors += `, ${valid[input].message}`;
      }
    });
    if (validationErrors) {
      setError(validationErrors);
      return;
    }
    toolsContext.setIsLoading(true);
    if (isRegister) {
      mainApi
        .signUp({ name: form.name, email: form.email, password: form.password })
        .then(() => {
          navigator("/signin");
        })
        .catch((err) => {
          err.json().then((err) => setError(err.message));
        })
        .finally(() => {
          toolsContext.setIsLoading(false);
        });
    } else {
      mainApi
        .signIn({ email: form.email, password: form.password })
        .then((data) => {
          toolsContext.setCurrentUser(data);
          navigator("/movies");
        })
        .catch((err) => {
          err.json().then((err) => setError(err.message));
        })
        .finally(() => {
          toolsContext.setIsLoading(false);
        });
    }
  };
  return (
    <main>
      <form className="authentication__form" onSubmit={handleSubmit} noValidate>
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
                maxLength="30"
                minLength="2"
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

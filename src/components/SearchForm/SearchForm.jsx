import React, { useState } from "react";

import "./SearchForm.css";

export default function SearchForm() {
  const [form, setForm] = useState({
    search: "",
    isShort: true,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSwitch = () => {
    setForm({
      ...form,
      isShort: !form.isShort,
    });
  };

  return (
    <section className="search-form">
      <form className="search-form__form">
        <div className="search-form__group">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            name="search"
            onChange={handleChange}
            value={form.input}
          />
          <button type="submit" className="search-form__button">
            Поиск
          </button>
        </div>
        <div className="search-form__is-short">
          <button
            className={`search-form__switcher switcher${
              form.isShort ? " switcher_active" : ""
            }`}
            type="button"
            onClick={handleSwitch}
          >
            <div className="switcher__circle" />
          </button>
          <p className="search-form__label">Короткометражки</p>
        </div>
      </form>
      <div className="search-form__line" />
    </section>
  );
}

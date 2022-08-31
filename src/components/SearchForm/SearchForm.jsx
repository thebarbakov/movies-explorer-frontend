import React, { useState, useEffect } from "react";

import "./SearchForm.css";

export default function SearchForm({
  handleSearchQuerry,
  savedQuerry,
  isNotFirst,
}) {
  const [form, setForm] = useState({
    search: "",
    isShort: true,
  });

  useEffect(() => {
    if (savedQuerry) {
      const keys = Object.keys(form);
      keys.forEach((key) => {
        savedQuerry[key] !== form[key] &&
          setForm({ ...form, [key]: savedQuerry[key] });
      });
    }
  }, [savedQuerry]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSwitch = (e) => {
    e.stopPropagation();
    setForm({
      ...form,
      isShort: !form.isShort,
    });
    isNotFirst && handleSearchQuerry({...form, isShort: !form.isShort,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchQuerry(form);
  };

  return (
    <section className="search-form" onSubmit={handleSubmit}>
      <form className="search-form__form">
        <div className="search-form__group">
          <input
            className="search-form__input"
            type="text"
            required
            placeholder="Фильм"
            name="search"
            onChange={handleChange}
            value={form.search}
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

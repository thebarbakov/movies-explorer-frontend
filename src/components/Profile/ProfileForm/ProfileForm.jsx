import React, { useState } from "react";

import "./ProfileForm.css";

export default function ProfileForm() {
  const [error, setError] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Ярослав!</h1>
      <form className="profile__form">
        <div className="profile__input-group">
          <label className="profile__label">Имя</label>
          <input
            required
            type="text"
            name="name"
            value="Ярослав"
            className="profile__input"
          />
        </div>
        <div className="profile__input-group">
          <label className="profile__label">E-Mail</label>
          <input
            type="email"
            name="name"
            value="test@test.ru"
            className="profile__input"
          />
        </div>
        {error ? <p className="authentication__error">{error}</p> : ''}
        <div className="profile__buttons">
          <button
            type="submit"
            className={`profile__button profile__button_save${!isEdit ? ' profile__button_inactive' : ''}`}
          >
            Сохранить
          </button>
          <button
            type="button"
            className={`profile__button profile__button_edit${isEdit ? ' profile__button_inactive' : ''}`}
            onClick={() => setIsEdit(true)}
          >
            Редактировать
          </button>
          <button
            type="button"
            className={`profile__button profile__button_exit${isEdit ? ' profile__button_inactive' : ''}`}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </div>
  );
}

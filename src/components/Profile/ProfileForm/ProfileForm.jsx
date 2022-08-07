import React, { useState } from "react";

import "./ProfileForm.css";

export default function ProfileForm() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Ярослав!</h1>
      <form className="profile__form">
        <div className="profile__input-group">
          <label className="profile__label">Имя</label>
          <input
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
        <div className="profile__buttons">
          {isEdit ? (
            <button
              type="submit"
              className="profile__button profile__button_save"
            >
              Сохранить
            </button>
          ) : (
            <>
              <button
                type="button"
                className="profile__button profile__button_edit"
              >
                Редактировать
              </button>
              <button
                type="button"
                className="profile__button profile__button_exit"
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}

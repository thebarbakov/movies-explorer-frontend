import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ToolsContext } from "../../../utils/сontext/ToolsContext";

import mainApi from "../../../utils/MainApi";

import "./ProfileForm.css";

export default function ProfileForm({ setCurrentUser }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const toolsContext = React.useContext(ToolsContext);
  const navigator = useNavigate();

  const [valid, setValid] = useState({
    name: { isValid: true, message: "" },
    email: { isValid: true, message: "" },
  });

  const handleSignOut = (e) => {
    toolsContext.setCurrentUser({});
    navigator("/");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setValid({
      ...valid,
      [e.target.name]: {
        isValid: e.target.validity.valid,
        message: !e.target.validity.valid ? e.target.validationMessage : null,
      },
    });
  };

  useEffect(() => {
    toolsContext.setIsLoading(true);
    mainApi
      .getInfoMe()
      .then(({ name, email }) => {
        setForm({ name, email });
      })
      .catch((err) => {
        toolsContext.setIsError(true);
      })
      .finally(() => {
        toolsContext.setIsLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = Object.keys(valid);
    let validationErrors = null;
    inputs.forEach((input, index) => {
      if (!valid[input].isValid) {
        if (index === 0) validationErrors = valid[input].message;
        else validationErrors += `, ${valid[input].message}`;
      }
    });
    if (validationErrors) {
      setError(validationErrors);
      return;
    }
    toolsContext.setIsLoading(true);
    mainApi
      .editInfoMe(form)
      .then(({ name, email }) => {
        setForm({ name, email });
        setIsEdit(false);
      })
      .catch((err) => {
        err.json().then((err) => setError(err.message));
      })
      .finally(() => {
        toolsContext.setIsLoading(false);
      });
  };
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, {form.name}!</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__input-group">
          <label className="profile__label">Имя</label>
          <input
            required
            type="text"
            name="name"
            value={form.name}
            className="profile__input"
            disabled={!isEdit}
            onChange={handleChange}
            maxLength="30"
            minLength="2"
          />
        </div>
        <div className="profile__input-group">
          <label className="profile__label">E-Mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            className="profile__input"
            disabled={!isEdit}
            onChange={handleChange}
          />
        </div>
        {error ? (
          <p className="authentication__error">{error.toString()}</p>
        ) : (
          ""
        )}
        <div className="profile__buttons">
          <button
            type="submit"
            className={`profile__button profile__button_save${
              !isEdit ? " profile__button_inactive" : ""
            }`}
          >
            Сохранить
          </button>
          <button
            type="button"
            className={`profile__button profile__button_edit${
              isEdit ? " profile__button_inactive" : ""
            }`}
            onClick={() => setIsEdit(true)}
          >
            Редактировать
          </button>
          <button
            type="button"
            className={`profile__button profile__button_exit${
              isEdit ? " profile__button_inactive" : ""
            }`}
            onClick={handleSignOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </div>
  );
}

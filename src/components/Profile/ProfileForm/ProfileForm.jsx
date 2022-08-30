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
  const [success, setSuccess] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const toolsContext = React.useContext(ToolsContext);
  const navigator = useNavigate();

  const [valid, setValid] = useState({
    name: { isValid: true, message: "" },
    email: { isValid: true, message: "" },
  });

  const [initForm, setInitForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [hasChanged, setHasChanged] = useState(false);

  const handleSignOut = (e) => {
    toolsContext.setCurrentUser({});
    navigator("/");
  };

  const changeToEditMode = (status) => {
    setError(null);
    setIsEdit(status);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      const isValid = e.target.value.match(
        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      );
      setValid({
        ...valid,
        email: {
          isValid: isValid,
          message: !isValid
            ? `Введите корректный адрес электронной почты.`
            : null,
        },
      });
    } else {
      setValid({
        ...valid,
        [e.target.name]: {
          isValid: e.target.validity.valid,
          message: !e.target.validity.valid ? e.target.validationMessage : null,
        },
      });
    }
  };

  useEffect(() => {
    const initFormKeys = Object.keys(initForm);
    let hasChanged = false;
    initFormKeys.forEach((element) => {
      if (initForm[element] !== form[element]) {
        hasChanged = true;
      }
    });
    setHasChanged(hasChanged);
  }, [form]);

  useEffect(() => {
    toolsContext.setIsLoading(true);
    mainApi
      .getInfoMe()
      .then(({ name, email }) => {
        setForm({ name, email });
        setInitForm({ name, email });
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
        if (validationErrors === null) validationErrors = valid[input].message;
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
        setInitForm({ name, email });
        changeToEditMode(false);
        setSuccess(true);
      })
      .catch((err) => {
        err.json().then((err) => setError(err.message));
      })
      .finally(() => {
        toolsContext.setIsLoading(false);
      });
  };

  useEffect(() => {
    if (success) setTimeout(() => setSuccess(false), 3000);
  }, [success]);
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
        {success ? (
          <p className="authentication__success">Информация изменена!</p>
        ) : (
          ""
        )}
        <div className="profile__buttons">
          {isEdit ? (
            <>
              {hasChanged ? (
                <button
                  type="submit"
                  className="profile__button profile__button_save"
                >
                  Сохранить
                </button>
              ) : (
                <button
                  type="button"
                  className="profile__button profile__button_edit"
                  onClick={() => changeToEditMode(false)}
                >
                  Отменить
                </button>
              )}
            </>
          ) : (
            <>
              <button
                type="button"
                className="profile__button profile__button_edit"
                onClick={() => changeToEditMode(true)}
              >
                Редактировать
              </button>
              <button
                type="button"
                className="profile__button profile__button_exit"
                onClick={handleSignOut}
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

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './Error.css'

export default function Error() {
  const [code, setCode] = React.useState(404);
  const navigate = useNavigate();

  const generateErrorText = (code) => {
    switch (code) {
      case 404:
        return "Страница по указанному маршруту не найдена";
      case 500:
        return "На сервере произошла ошибка";
      default:
        return "Что-то пошло не так";
    }
  }; 

  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
        navigate(-1);
    } else {
        navigate('/', { replace: true });
    }
  }

  return (
    <div className="error">
      <h1 className="error__code">{code}</h1>
      <p className="error__text">{generateErrorText(code)}</p>
      <p className="error__link" onClick={goBack}>Назад</p>
    </div>
  );
}

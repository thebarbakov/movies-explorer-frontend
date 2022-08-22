import { NavLink, Link } from "react-router-dom";

import "./Navigation.css";

export default function Navigation({ setIsOpen, isOpen}) {
  return (
      <div className={`navigation${isOpen ? " navigation_openend" : ""}`}>
        <div className="navigation__container">
          <button className="navigation__close-button" onClick={() => setIsOpen(false)} type="button"/>
          <ul className="navigation__list">
            <li className="navigation__element">
              <NavLink className="navigation__link" to="/">Главная</NavLink>
            </li>
            <li className="navigation__element">
              <NavLink className="navigation__link" to="/movies">Фильмы</NavLink>
            </li>
            <li className="navigation__element">
              <NavLink className="navigation__link" to="/saved-movies">Сохраненные фильмы</NavLink>
            </li>
            <li className="navigation__element navigation__element_profile">
              <Link className="navigation__link" to="/profile">Аккаунт</Link>
            </li>
          </ul>
        </div>
        <div className="navigation__background" onClick={() => setIsOpen(false)} />
      </div>
  );
}

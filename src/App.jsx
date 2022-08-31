import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CurrentUser } from "./utils/сontext/CurrentUser";
import { ToolsContext } from "./utils/сontext/ToolsContext";

import mainApi from "./utils/MainApi";

import "./vendor/InterWeb/inter.css";
import "./App.css";

import Main from "./components/Main/Main";
import Movies from "./components/Movies/Movies";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import Profile from "./components/Profile/Profile";
import Authentication from "./components/Authentication/Authentication";
import Error from "./components/Error/Error";
import Preloader from "./components/Preloader/Preloader";
import { Redirect } from "./components/Redirect";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [savedMovies, setSavedMovies] = useState(null);

  useEffect(() => {
    if (currentUser) {
      if (!currentUser.token) {
        localStorage.removeItem("currentUser");
        setCurrentUser(null);
        localStorage.removeItem("savedQuerry");
      } else localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      if (JSON.parse(localStorage.getItem("currentUser")))
        setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
      else setCurrentUser(null);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      if (currentUser.token)
        mainApi
          .getSavedMovies()
          .then((data) => {
            setSavedMovies(data);
          })
          .catch(() => setIsError(true));
    }
  }, [currentUser]);

  const deleteSavedMovie = (id) => {
    mainApi
      .deleteSavedMovie(id)
      .then((data) => {
        setSavedMovies(savedMovies.filter((el) => el._id !== id));
      })
      .catch(() => setIsError(true));
  };

  const addSavedMovie = (data) => {
    mainApi
      .saveMovie(data)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
      })
      .catch(() => setIsError(true));
  };

  return (
    <CurrentUser.Provider value={currentUser}>
      <ToolsContext.Provider
        value={{
          setIsError: (status) => setIsError(status),
          setIsLoading: (status) => setIsLoading(status),
          setCurrentUser: (user) => setCurrentUser(user),
        }}
      >
        <div className="main">
          <Routes>
            {isError ? (
              <Error code={500} />
            ) : (
              <>
                <Route path="*" element={<Error code={404} />} />
                <Route path="/" element={<Main />} />
                <Route
                  path="/movies"
                  element={
                    currentUser ? (
                      <Movies
                        savedMovies={savedMovies}
                        deleteSavedMovie={deleteSavedMovie}
                        addSavedMovie={addSavedMovie}
                      />
                    ) : (
                      <Redirect to="/" />
                    )
                  }
                />
                <Route
                  path="/saved-movies"
                  element={
                    currentUser ? (
                      <SavedMovies
                        savedMovies={savedMovies}
                        deleteSavedMovie={deleteSavedMovie}
                        addSavedMovie={addSavedMovie}
                      />
                    ) : (
                      <Redirect to="/" />
                    )
                  }
                />
                <Route
                  path="/profile"
                  element={currentUser ? <Profile /> : <Redirect to="/" />}
                />
                <Route
                  path="/signin"
                  element={!currentUser ? <Authentication isRegister={false} /> : <Redirect to="/" />}
                />
                <Route
                  path="/signup"
                  element={!currentUser ? <Authentication isRegister={true} /> : <Redirect to="/" />}
                />
              </>
            )}
          </Routes>
        </div>
        {isLoading ? <Preloader isLocal={false} /> : ""}
      </ToolsContext.Provider>
    </CurrentUser.Provider>
  );
}

export default App;

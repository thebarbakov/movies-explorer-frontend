import { Routes, Route } from "react-router-dom";

import "./vendor/InterWeb/inter.css";
import "./App.css";

import Main from "./components/Main/Main";
import Movies from "./components/Movies/Movies";
import SavedMovies from "./components/SavedMovies/SavedMovies";
import Profile from "./components/Profile/Profile";
import Authentication from "./components/Authentication/Authentication";
import Error from "./components/Error/Error";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="*" element={<Error code={404} />} />
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Authentication isRegister={false} />} />
        <Route path="/signup" element={<Authentication isRegister={true} />} />
      </Routes>
    </div>
  );
}

export default App;

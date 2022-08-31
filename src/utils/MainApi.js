class MainApi {
  constructor({ url }) {
    this._url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  signIn(data) {
    return fetch(this._url + "/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => this._checkResponse(res));
  }

  signUp(data) {
    return fetch(this._url + "/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => this._checkResponse(res));
  }

  getInfoMe(data) {
    return fetch(this._url + "/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("currentUser")).token ||
          "",
      },
    }).then((res) => this._checkResponse(res));
  }

  editInfoMe(data) {
    return fetch(this._url + "/api/users/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("currentUser")).token ||
          "",
      },
      body: JSON.stringify(data),
    }).then((res) => this._checkResponse(res));
  }

  getSavedMovies(data) {
    return fetch(this._url + "/api/movies/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("currentUser")).token ||
          "",
      },
    }).then((res) => this._checkResponse(res));
  }

  saveMovie(data) {
    const film = {
      country: data.country ? data.country : undefined,
      director: data.director ? data.country : undefined,
      duration: data.duration ? data.duration : undefined,
      year: data.year ? data.year : undefined,
      description: data.description ? data.description : undefined,
      image: `https://api.nomoreparties.co${data.image.url}`,
      trailerLink: data.trailerLink,
      thumbnail: `https://api.nomoreparties.co${data.image.url}`,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
    };
    return fetch(this._url + "/api/movies/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("currentUser")).token ||
          "",
      },
      body: JSON.stringify(film),
    }).then((res) => this._checkResponse(res));
  }

  deleteSavedMovie(id) {
    return fetch(this._url + "/api/movies/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("currentUser")).token ||
          "",
      },
    }).then((res) => this._checkResponse(res));
  }
}

const mainApi = new MainApi({
  url: "https://api.movies.thebarbakov.ru",
});

export default mainApi;

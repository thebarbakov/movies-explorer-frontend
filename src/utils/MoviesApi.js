class MoviesApi {
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  getMovies(){
    return fetch("https://api.nomoreparties.co/beatfilm-movies", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => this._checkResponse(res));
  }
}

const moviesApi = new MoviesApi();

export default moviesApi;

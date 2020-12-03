let searchQuery = 'batman';
const API_KEY = 'a654161e199343dbc8c98647ade74dfc';

const getMovies = () => {
  const MOVIE_ENDPOINT = 'https://api.themoviedb.org';
  const MOVIE_URL = `${MOVIE_ENDPOINT}/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;

  return fetch(MOVIE_URL)
    .then((res) => res.json())
    .then((data) => {
      const movies = [];
      data.results.forEach((movie) => {
        let imgPath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        let obj = {
          title: movie.title,
          image: imgPath,
        };
        movies.push(obj);
      });
      return movies;
    });
};

const render = (movies) => {
  let markup = '';
  movies.forEach((movie) => {
    markup += `
        <div class="movies__item">
          <img src="${movie.image}" alt="" class="movies__image">
          <p class="movies__title">${movie.title}</p>
        </div>
        `;
  });
  document.querySelector('.movies').innerHTML = markup;
};

getMovies().then((data) => {
  render(data);
});

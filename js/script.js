const filmsWatched = +prompt('Сколько фильмов вы уже посмотрели?', '0');

console.log(filmsWatched);


const personalMovieDb = {
  count: filmsWatched,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

console.log(personalMovieDb)

const firstMovie = prompt('Один из последних просмотренных фильмов?', '');
const firstRating = prompt('На сколько оцените его?', '');
const secondMovie = prompt('Один из последних просмотренных фильмов?', '');
const secondRating = prompt('Насколько оцените его?', '');

let movies = {};

movies[firstMovie] = firstRating;
movies[secondMovie] = secondRating;

console.log(movies);

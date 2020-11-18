const watchedFilmsCount = +prompt('Сколько фильмов вы уже посмотрели?', '0');

console.log(watchedFilmsCount);


const personalMovieDb = {
  count: watchedFilmsCount,
  movies: {},
  actors: {},
  genres: [],
  isPrivat: false
}

console.log(personalMovieDb)

const firstMovie = prompt('Один из последних просмотренных фильмов?', ''),
      firstRating = prompt('На сколько оцените его?', ''),
      secondMovie = prompt('Один из последних просмотренных фильмов?', ''),
      secondRating = prompt('Насколько оцените его?', '');


personalMovieDb.movies[firstMovie] = firstRating;
personalMovieDb.movies[secondMovie] = secondRating;

console.log(movies);

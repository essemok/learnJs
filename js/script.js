"use strict"

let watchedFilmsCount;

function start() {
  watchedFilmsCount = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (watchedFilmsCount == '' || watchedFilmsCount == null || isNaN(watchedFilmsCount)) {
    watchedFilmsCount = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDb = {
  count: watchedFilmsCount,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const movie = prompt('Один из последних просмотренных фильмов?', ''),
          rating = prompt('Один из последних просмотренных фильмов?', '');

    if (null != movie && null != rating && '' !== movie && '' !== rating && movie.length < 50 && rating.length < 50) {
      personalMovieDb.movies[movie] = rating;
    } else {
      i--;
      alert('Incorrect data. Result cant be empty string or string longer than 50 symbols. Please answer one more time.')
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  switch (true) {
    case (personalMovieDb.count < 10):
      console.log('Просмотрено довольно мало фильмов');
      break;
    case (personalMovieDb.count > 10 && personalMovieDb.count < 30):
      console.log('Вы классический зритель');
      break;
    case (personalMovieDb.count > 30):
      console.log('Вы киноман');
      break;
    default:
      console.log('Произошла ошибка');
      break;
  }
}

detectPersonalLevel();

function showMyDB(isPrivate) {
  if (!isPrivate) {
    console.log(personalMovieDb);
  }
}

showMyDB(personalMovieDb.privat);

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр №${i}`, '');
  }
}

writeYourGenres();

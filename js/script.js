"use strict"

const personalMovieDb = {
  watchedFilmsCount: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,

  start: function() {
    this.watchedFilmsCount = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (this.watchedFilmsCount == '' || this.watchedFilmsCount == null || isNaN(this.watchedFilmsCount)) {
      this.watchedFilmsCount = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const movie = prompt('Один из последних просмотренных фильмов?', ''),
        rating = prompt('Один из последних просмотренных фильмов?', '');

      if (null != movie && null != rating && '' !== movie && '' !== rating && movie.length < 50 && rating.length < 50) {
        this.movies[movie] = rating;
      } else {
        i--;
        alert('Incorrect data. Result cant be empty string or string longer than 50 symbols. Please answer one more time.')
      }
    }
  },

  detectPersonalLevel: function() {
    switch (true) {
      case (this.watchedFilmsCount < 10):
        console.log('Просмотрено довольно мало фильмов');
        break;
      case (this.watchedFilmsCount > 10 && this.watchedFilmsCount < 30):
        console.log('Вы классический зритель');
        break;
      case (this.watchedFilmsCount > 30):
        console.log('Вы киноман');
        break;
      default:
        console.log('Произошла ошибка');
        break;
    }
  },

  showMyDB: function() {
    if (!this.private) {
      console.log(this);
    }
  },

  writeYourGenres: function() {
    for (let i = 1; i < 4; i++) {
      this.genres[i - 1] = prompt(`Ваш любимый жанр №${i}`, '');

      if (null === this.genres[i - 1] || '' === this.genres[i - 1]) {
        alert('ВВЕДИТЕ КОРРЕКТНЫЕ ДАННЫЕ, ПОЖАЛУЙСТА!');
        i--;
      }
    }

    this.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  },

  toggleVisibleMyDb: function () {
    this.private = !this.private;
  }
}
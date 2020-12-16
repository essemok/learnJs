/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

function removeAdvBlock() {
    const adv = document.querySelectorAll('.promo__adv img');

    adv.forEach(item => {
       item.remove();
    });
}

function changePromoFilmGenre(genre) {
    document.querySelector('.promo__genre').textContent = genre;
}

function changePromoFilmBackground(backgroundPath) {
    document.querySelector('.promo__bg').style.backgroundImage = backgroundPath;
}

function replacedWatchedFilmsList(moviesList) {
    const pageMovieList = document.querySelector('.promo__interactive-list');

    pageMovieList.innerHTML = '';
    moviesList.sort();

    moviesList.forEach((film, i) => {
        pageMovieList.innerHTML += `
             <li class="promo__interactive-item">${i+1}: ${film}
                 <div class="delete"></div>
            </li>
        `;
    });
}

removeAdvBlock();
changePromoFilmGenre('драма');
changePromoFilmBackground('url("img/bg.jpg")');
replacedWatchedFilmsList(movieDB.movies);





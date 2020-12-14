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
    document.getElementsByClassName('promo__adv')[0].remove();
}

function changePromoFilmGenre(genre) {
    document.querySelector('.promo__genre').textContent = genre;
}

function changePromoFilmBackground(backgroundPath) {
    document.querySelector('.promo__bg').style.backgroundImage = backgroundPath;
}

function replacedWatchedFilmsList(newFilmList) {
    const oldList = document.querySelectorAll('.promo__interactive-item');

    oldList.forEach((item, i) => {
        item.textContent = (i+1) + ': ' + newFilmList.movies[i];
    });
}

console.dir(document.querySelector('.promo__bg'));
removeAdvBlock();
changePromoFilmGenre('драма');
changePromoFilmBackground('../img/bg.jpg');
replacedWatchedFilmsList(movieDB);





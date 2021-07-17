"use strict";

const myUl = document.getElementById('myUl');
const apiKey = '7bbcabd7451880efd46ec7f3f3b268c2';
let whichSortingNow = 'popularity.desc';
let whichPageNow = 1;
const maxPage = 15;
let indexFilm = 0;

const sortingPopularityDecrease = 'popularity.desc';
const sortingPopularityIncrease = 'popularity.asc';
const sortingRatingDecrease = 'vote_average.desc';
const sortingRatingIncrease = 'vote_average.asc';
const sortingReleaseDecrease = 'release_date.desk';
const sortingReleaseIncrease = 'release_date.asc';

getResponse();

// Функция, которая достаёт данные фильмов из API сайта https://www.themoviedb.org/
async function getResponse() {
  myUl.innerHTML = '';
  const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=ru-RU&sort_by=' + whichSortingNow + '&include_adult=false&include_video=false&page=' + whichPageNow);
  const content = await response.json();
  localStorage.setItem('localContent', JSON.stringify(content.results));
  createCards(content);
}

// Функция, которая создаёт карточки фильмов
function createCards(content) {
  for (let i = 0; i < content.results.length; i++) {

    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const pRating = document.createElement('p');
    const pRelease = document.createElement('p');

    let nodeReleaseYear = '';
    if (content.results[i].release_date !== '') nodeReleaseYear = ' (' + content.results[i].release_date.slice(0, 4) + ')';
    const nodeTitle = document.createTextNode(content.results[i].title + nodeReleaseYear);

    let nodeAttributeSrc = 'https://image.tmdb.org/t/p/w300' + content.results[i].poster_path;
    if (content.results[i].poster_path === null) nodeAttributeSrc = './images/content/notFoundImage.jpg';

    const nodeRating = document.createTextNode('Рейтинг: ' + content.results[i].vote_average);
    const nodeRelease = document.createTextNode('Дата релиза: ' + content.results[i].release_date);

    h2.appendChild(nodeTitle);
    pRating.appendChild(nodeRating);
    pRelease.appendChild(nodeRelease);

    li.appendChild(img);
    li.appendChild(pRating);
    li.appendChild(pRelease);
    li.appendChild(h2);

    li.classList.add('all-cards__card');
    h2.classList.add('all-cards-card__title');
    img.classList.add('all-cards-card__img');
    img.setAttribute('src', nodeAttributeSrc);
    pRating.classList.add('all-cards-card__rating');
    pRelease.classList.add('all-cards-card__release');

    myUl.appendChild(li);
  }
}

// Функция, которая узнает как отсортировать (по популярности, рейтингу, дате релиза)
document.getElementById('SelectSorting').onchange = function() {
  search.value = '';
  myUl.innerHTML = '';

  switch (this.options[this.selectedIndex].value) {
    case 'popularity-decrease':
      whichSortingNow = sortingPopularityDecrease;
      break;

    case 'popularity-increase':
      whichSortingNow = sortingPopularityIncrease;
      break;

    case 'rating-decrease':
      whichSortingNow = sortingRatingDecrease;
      break;

    case 'rating-increase':
      whichSortingNow = sortingRatingIncrease;
      break;

    case 'release-decrease':
      whichSortingNow = sortingReleaseDecrease;
      break;

    case 'release-increase':
      whichSortingNow = sortingReleaseIncrease;
      break;

    default:
      console.log('Error with sorting');
      break;
  }
  getResponse(whichSortingNow);
}

// Функция, которая узнает цифру на кликнутую кнопку
const numberedNavigation = document.querySelector('.nav__numbered-navigation');
numberedNavigation.addEventListener('click', findOutNumberButton);

function findOutNumberButton(e) {
  if (numberedNavigation === e.target) return;

  whichPageNow = Number(e.target.childNodes[0].nodeValue);
  redrawButtons();
}

// Функция, которая перерисовывает цифры на кнопках
function redrawButtons() {
  search.value = '';

  if (whichPageNow <= 3) {
    numberedNavigation.children[0].textContent = 1;
    numberedNavigation.children[1].textContent = 2;
    numberedNavigation.children[2].textContent = 3;
    numberedNavigation.children[3].textContent = 4;
    numberedNavigation.children[4].textContent = 5;
  }
  if (whichPageNow > 3 && whichPageNow <= maxPage - 3) {
    numberedNavigation.children[0].textContent = whichPageNow - 2;
    numberedNavigation.children[1].textContent = whichPageNow - 1;
    numberedNavigation.children[2].textContent = whichPageNow;
    numberedNavigation.children[3].textContent = whichPageNow + 1;
    numberedNavigation.children[4].textContent = whichPageNow + 2;
  }
  if (whichPageNow > maxPage - 3) {
    numberedNavigation.children[0].textContent = maxPage - 4;
    numberedNavigation.children[1].textContent = maxPage - 3;
    numberedNavigation.children[2].textContent = maxPage - 2;
    numberedNavigation.children[3].textContent = maxPage - 1;
    numberedNavigation.children[4].textContent = maxPage;
  }
  // Добавляется класс нажатой кнопке
  for (let i = 0; i < 5; i++) {
    if (numberedNavigation.children[i].classList.contains('nav-numbered-navigation__button') === true) {
      numberedNavigation.children[i].classList.remove('nav-numbered-navigation__button');
    }
    if (Number(numberedNavigation.children[i].textContent) === whichPageNow) {
      numberedNavigation.children[i].classList.add('nav-numbered-navigation__button');
    }
  }
  getResponse(whichSortingNow, whichPageNow);
}

// Фунция, которая перелистывает в начало
document.getElementById('buttonFirstPage').addEventListener('click', browseFirstPage);
function browseFirstPage() {
  if (whichPageNow !== 1) {
    whichPageNow = 1;
    myUl.innerHTML = '';
    getResponse(whichSortingNow, whichPageNow);
    redrawButtons();
  }
}

// Фунция, которая перелистывает в конец
document.getElementById('buttonLastPage').addEventListener('click', browseLastPage);
function browseLastPage() {
  if (whichPageNow !== maxPage) {
    whichPageNow = maxPage;
    myUl.innerHTML = '';
    getResponse(whichSortingNow, whichPageNow);
    redrawButtons();
  }
}

// Фунция, которая перелистывает 1 страницу назад
document.getElementById('buttonPreviousPage').addEventListener('click', browsePreviousPage);
function browsePreviousPage() {
  if (whichPageNow > 1) {
    whichPageNow -= 1;
    myUl.innerHTML = '';
    getResponse(whichSortingNow, whichPageNow);
    redrawButtons();
  }
}

// Фунция, которая перелистывает 1 страницу вперед
document.getElementById('buttonNextPage').addEventListener('click', browseNextPage);
function browseNextPage() {
  if (whichPageNow < maxPage) {
    whichPageNow += 1;
    myUl.innerHTML = '';
    getResponse(whichSortingNow, whichPageNow);
    redrawButtons();
  }
}

// Поиск по фильмом
const search = document.getElementById('inputSearch');
search.addEventListener('keyup', SearchMovie);

async function SearchMovie() {
  let searchContent = await fetch('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=ru-RU&query=' + search.value + '&page=1&include_adult=false');
  searchContent = await searchContent.json();
  myUl.innerHTML = '';

  if (search.value === '') {
    getResponse(whichSortingNow, whichPageNow);
  } else {
    createCards(searchContent);
    localStorage.setItem('localContent', JSON.stringify(searchContent.results));
  }
}

// функция, которая открывает новую вкладку(aboutfilm.html) с описанием фильма
myUl.addEventListener('click', openPageAboutFilmHTML);
function openPageAboutFilmHTML(e) {
  if (e.target === myUl) return;
  if (e.target.classList.contains('all-cards__card')) return;

  indexFilm = [...myUl.children].indexOf(e.target.parentNode);
  localStorage.setItem('localIndexFilm', indexFilm);
  window.open('aboutfilm.html');
}

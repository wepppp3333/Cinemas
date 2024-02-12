const listFilmBg = document.querySelector(".movies__slider_bg");
const listFilms = document.querySelector(".new_movies__card");
const btn_continuation = document.querySelector(".container__btn_continuation");
const filter = document.querySelector(".filter");
const COUNT_SHOW_CARDS_FILM = 7;
let showCards = COUNT_SHOW_CARDS_FILM;
let countClickBtnShowCards = 1;
let filmData = [];
let a = [];
let c = 1;

getFilms();

btn_continuation.addEventListener("click", addClickCards);

// получаем Json файл и парсим его в массив
async function getFilms() {
  try {
    if (!filmData.length) {
      // Проверка есть ли объекты в массиве равняется 0 = true
      const res = await fetch("/Json_Movies/json_movies.json"); // Получаем промис
      if (!res.ok) {
        // Если false кидаем ошибку
        throw new Error(res.statusText);
      }
      filmData = await res.json();
    }
    if (
      filmData.length > COUNT_SHOW_CARDS_FILM &&
      btn_continuation.classList.contains("none")
    ) {
      btn_continuation.classList.remove("none");
    }
    renderStartPage(filmData);
  } catch (err) {
    console.log(err);
  }
}

// Функция которая делит масив на столько элементов сколько указано в нашей перемененой и рендерит первую страницу
function renderStartPage(data) {
  if (!data || !data.length) {
    // если пришел false выдаем ошибку
    show.Eror.Mesage("Не пришли данные с сервера или пришел пустой массив");
    return;
  }
  const arrCardsFilms = data
    .slice(0, COUNT_SHOW_CARDS_FILM)
    .map(createFilterCards)
    .join("");
  listFilms.innerHTML = arrCardsFilms;
}

// Создание карточки
function createCardsFilms(data) {
  data.forEach((card) => {
    const { id, bacgroundImage, title } = card;
    const cardFilmsItem = `
    <div class="card_rectangle_2 card_rectangle movies__container_card_hover" style="background-image: url('${bacgroundImage}');">
    <div class="btn_play_cinemas" href="/index.html">
      <a href="/Movie_pages/movies_cards/card_film.html?id=${id}">
        <img src="/Movie_pages/Image/play_twitter_video_icon_127120.svg" alt="" class="btn_play_cinemas_img">
      </a>
    </div>
  </div>
    `;
    listFilms.insertAdjacentHTML("beforeend", cardFilmsItem);
  });
}

// Создание карточки поиска
function createFilterCards(data) {
  const { bacgroundImage, id } = data;
  return `
  <div class="card_rectangle_2 card_rectangle movies__container_card_hover" style="background-image: url('${bacgroundImage}');">
  <div class="btn_play_cinemas" href="/index.html">
    <a href="/Movie_pages/movies_cards/card_film.html?id=${id}">
      <img src="/Movie_pages/Image/play_twitter_video_icon_127120.svg" alt="" class="btn_play_cinemas_img">
    </a>
  </div>
</div>
  `;
}

filter.addEventListener("input", (event) => {
  countClickBtnShowCards = 1;
  showCards = COUNT_SHOW_CARDS_FILM;

  const value = event.target.value.toLowerCase();
  if (value.length === 0) {
    btn_continuation.classList.remove("none");
  }

  const filterdFilms = filmData.filter((film) => {
    return film.title.toLowerCase().includes(value);
  });

  const arrFilter = filterdFilms.slice(0, COUNT_SHOW_CARDS_FILM);
  a = filterdFilms;
  console.log("Сгенерированный масив после филтрации ", filterdFilms);

  if (a.length >= COUNT_SHOW_CARDS_FILM) {
    btn_continuation.classList.remove("none");
  } else {
    btn_continuation.classList.add("none");
  }

  const arrFilter2 = arrFilter.map(createFilterCards).join("");
  listFilms.innerHTML = arrFilter2;
});

function addClickCards() {
  // if (showCards >= a.length) {
  //   return;
  // }
  // countClickBtnShowCards++;

  // const countShowCards = COUNT_SHOW_CARDS_FILM * countClickBtnShowCards;
  // const arrayCards = a.slice(showCards, countShowCards);

  // createCardsFilms(arrayCards);

  // showCards = listFilms.children.length;

  // if (showCards >= a.length || a.length <= COUNT_SHOW_CARDS_FILM) {
  //   btn_continuation.classList.add("none");
  // }
    click(filmData);
    
    click(a);
}

function click(array) {
  if (showCards >= array.length) {
    return;
  }
  countClickBtnShowCards++;

  const countShowCards = COUNT_SHOW_CARDS_FILM * countClickBtnShowCards;
  const arrayCards = array.slice(showCards, countShowCards);

  createCardsFilms(arrayCards);

  showCards = listFilms.children.length;

  if (showCards >= array.length || array.length <= COUNT_SHOW_CARDS_FILM) {
    btn_continuation.classList.add("none");
  }
}

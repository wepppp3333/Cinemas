const listFilmBg = document.querySelector(".movies__slider_bg");
const listFilm = document.querySelector(".movies__slider");
const videoPlayer = document.querySelector(".new_movies__card");

let filmData = [];

getFilms();
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
    loadInfoFilms(filmData);
  } catch (err) {
    console.log(err);
  }
}

// Получаем параметр из адресной строки
function getParametrHtmlUrl(parametr) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(parametr);
}

function loadInfoFilms(data) {
  const productId = Number(getParametrHtmlUrl("id"));
  if (!productId) {
    console.log("Такой товар не найден");
    return;
  }
  const findFilms = data.find((card) => card.id === productId);
  renderFilmProduct(findFilms);
}

function renderFilmProduct(data) {
  const { id, title, video, image } = data;
  const cardFilmsItem = `
    <div class="movies__slider_information">
    <h1 class="movies__slider_title">${title}
    </h1>
    <p class="movies__slider_info">Sci-Fi  Thriller  2010   |    Channel 34</p>
    <p class="movies__slider_text">Cobb steals information from his targets <br> by entering their dreams. Saito offers to <br> wipe clean Cobb's criminal history as <br> payment for performing an inception on <br> his sick competitor's son.</p>
    <a href="#iacor">
    <button class="movies__slider_information_btn" >Watch Now</button>
    </a>
  `;
  const videoHtml = `
  <video src="${video}" class="video_movies" controls id="iacor" poster="${image}"></video>
  `;
  listFilmBg.style.backgroundImage = `url(${image})`;
  listFilm.insertAdjacentHTML("beforeend", cardFilmsItem);
  videoPlayer.insertAdjacentHTML("beforeend", videoHtml);
}

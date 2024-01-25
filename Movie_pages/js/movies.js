const listFilms = document.querySelector(".new_movies__card");
const btn_continuation = document.querySelector(".container__btn_continuation");
const COUNT_SHOW_CARDS_FILM = 10;

let filmData = [];

getFilms();

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

function renderStartPage(data) {
  if (!data || !data.length) {
    // если пришел false выдаем ошибку
    show.Eror.Mesage("Не пришли данные с сервера или пришел пустой массив");
    return;
  }
  const arrCardsFilms = data.slice(0, COUNT_SHOW_CARDS_FILM);
  createCardsFilms(arrCardsFilms);
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

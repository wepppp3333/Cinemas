

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
  } catch (err) {
    console.log(err);
  }
}
// Получаем параметр из адресной строки
function getParametrHtmlUrl (parametr) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(parametr)
}

function loadInfoFilms (data) {
  const productId = Number(getParametrHtmlUrl('id'))

  if (!productId) {
    console.log('Такой товар не найден');
    return
  }
}

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

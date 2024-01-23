import movies from "../../Json_Movies/json_movies.js";
console.log(movies);

const list = document.querySelector("#list_films");

function render() {
  list.innerHTML = toHTML();
}

render();

function toHTML() {
  return `
  <div class="card_rectangle_1 card_rectangle">
  </div>
  `;
}

let filmData = [];

getFilms();

async function getFilms() {
  try {
    if (!filmData.length) {
      // Проверка есть ли объекты в массиве равняется 0 = true
      const res = await fetch("/Jdson_Movies/json_movies.json"); // Получаем промис
      console.log(res.ok);
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

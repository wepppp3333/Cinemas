// const car = {
//   model: "Tesla",
//   year: 2023,
// };

// const json = JSON.stringify(car)
// const parsed = JSON.parse(json)
// console.log(json);
// console.log(parsed);

const list = document.querySelector("#list");
const filter = document.querySelector("#filter");
let USERS = [];
sdsad

filter.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  const filteredUsers = USERS.filter((user) => {
    return user.name.toLowerCase().includes(value);
  });
  render(filteredUsers);
});

async function start() {
  list.innerHTML = "Loadding...";
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(resp);
    const data = await resp.json();
    console.log(data);
    setTimeout(() => {
      USERS = data;
      render(data);
    }, 2000);
  } catch (err) {
    list.style.color = "red";
    list.innerHTML = err.message;
  }
}

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = "No matched users!";
  } else {
    const html = users.map(toHTML).join("");
    list.innerHTML = html;
  }
}

function toHTML(user) {
  return `
  <table>
    <tr>
      <td><li class="list-group-item">${user.name}</li>
      </td>
      <td><li class="list-group-item">${user.email}</li></td>
    </tr>
  </table>
  `;
}
start();

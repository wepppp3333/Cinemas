const listObject = document.getElementById('list_object')
const createBtnArray1 = document.getElementById('create_array_1')
const createBtnArray2 = document.getElementById('create_array_2')
const createBtnArray3 = document.getElementById('create_array_3')
const createBtnArray4 = document.getElementById('create_array_4')
const btnSeasonClick = document.getElementById('container__series__header')


const arraySeries1 = [{
    title: 'Season 1  | Ep. 1',
    backgroundImage: 'https://storage.yandexcloud.net/englika/collections/Q29sbGVjdGlvbjo2Mg-8211-1024' 
  },
  {
    title: 'Season 1  | Ep. 2',
    backgroundImage: 'https://i.ytimg.com/vi/HMh5Y9qw3YM/maxresdefault.jpg'
  },
  {
    title: 'Season 1  | Ep. 3',
    backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-1-sezon-3-seriya-300x170.jpg'
  },
  {
    title: 'Season 1  | Ep. 4',
    backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-1-sezon-4-seriya-300x170.jpg'
  },
  {
    title: 'Season 1  | Ep. 5',
    backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-1-sezon-5-seriya-300x170.jpg'
  },
  {
    title: 'Season 1  | Ep. 6',
    backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-1-sezon-6-seriya-e1658773993961-300x170.jpg'
  },
  {
    title: 'Season 1  | Ep. 7',
    backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-1-sezon-7-seriya-300x170.jpg'
  },
  {
    title: 'Season 1  | Ep. 8',
    backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-1-sezon-8-seriya-300x170.jpg'
  },
]
const arraySeries2 = [{
  title: 'Season 2  | Ep. 1',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-2-sezon-1-seriya-300x170.jpg' 
},
{
  title: 'Season 2  | Ep. 2',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-2-sezon-2-seriya-300x170.jpg' 
},
{
  title: 'Season 2  | Ep. 3',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-2-sezon-3-seriya-300x170.jpg'
},
{
  title: 'Season 2  | Ep. 4',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-2-sezon-4-seriya-300x170.jpg'
},
{
  title: 'Season 2  | Ep. 5',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-2-sezon-5-seriya-300x170.jpg'
},
{
  title: 'Season 2  | Ep. 6',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-2-sezon-6-seriya-300x170.jpg'
},
{
  title: 'Season 2  | Ep. 7',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-2-sezon-7-seriya-300x170.jpg'
},
{
  title: 'Season 2  | Ep. 8',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-2-sezon-8-seriya-300x170.jpg'
},]
const arraySeries3 = [{
  title: 'Season 3  | Ep. 1',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-3-sezon-1-seriya-300x170.jpg' 
},
{
  title: 'Season 3  | Ep. 2',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-3-sezon-2-seriya-300x170.jpg' 
},
{
  title: 'Season 3  | Ep. 3',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-3-sezon-3-seriya-300x170.jpg'
},
{
  title: 'Season 3  | Ep. 4',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-3-sezon-4-seriya-300x170.jpg'
},
{
  title: 'Season 3  | Ep. 5',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-3-sezon-5-seriya-300x170.jpg'
},
{
  title: 'Season 3  | Ep. 6',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-3-sezon-6-seriya-300x170.jpg'
},
{
  title: 'Season 3  | Ep. 7',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-3-sezon-7-seriya-300x170.jpg'
},
{
  title: 'Season 3  | Ep. 8',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-3-sezon-8-seriya-300x170.jpg'
},]
const arraySeries4 = [{
  title: 'Season 4  | Ep. 1',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-4-sezon-1-seriya-300x170.jpg' 
},
{
  title: 'Season 4  | Ep. 2',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-4-sezon-2-seriya-300x170.jpg' 
},
{
  title: 'Season 4  | Ep. 3',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-4-sezon-3-seriya-300x170.jpg'
},
{
  title: 'Season 4  | Ep. 4',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-4-sezon-4-seriya-300x170.jpg'
},
{
  title: 'Season 4  | Ep. 5',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-4-sezon-5-seriya-300x170.jpg'
},
{
  title: 'Season 4  | Ep. 6',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/1997/11/%D0%94%D1%80%D1%83%D0%B7%D1%8C%D1%8F-4-%D1%81%D0%B5%D0%B7%D0%BE%D0%BD-6-%D1%81%D0%B5%D1%80%D0%B8%D1%8F-300x170.jpg'
},
{
  title: 'Season 4  | Ep. 7',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-4-sezon-7-seriya-300x170.jpg'
},
{
  title: 'Season 4  | Ep. 8',
  backgroundImage: 'https://serialfriends.online/wp-content/uploads/2021/09/druzya-4-sezon-8-seriya-300x170.jpg'
},]


function render() {
  for (let i = 0; i < arraySeries1.length; i++) {
    listObject.insertAdjacentHTML(
      'beforeend',
      getListTemplate(arraySeries1[i],i)
      )
  }
  
}
function newRender(array) {
  for (let i = 0; i < array.length; i++) {
    listObject.insertAdjacentHTML(
      'beforeend',
      getListTemplate(array[i],i)
      )
  }
}

render()


// createBtnArray1.onclick = function () {
//   listObject.innerHTML = ''
//   listObject.insertAdjacentElement(`beforeend`,
//   render())
  
// }


// createBtnArray2.onclick = function () {
//   listObject.innerHTML = ''
//   listObject.insertAdjacentHTML(`beforeend`,
//   render2())
// }

function newClick(a) {
  listObject.innerHTML = ''
  listObject.insertAdjacentHTML(`beforeend`,
  newRender(a))
}

btnSeasonClick.onclick = function(event){
  if (event.target.dataset.index){
    const index = parseInt(event.target.dataset.index)
    if (index === 1) {
      newClick(arraySeries1)
    } else if (index === 2) {
      newClick(arraySeries2)
    } else if (index === 3) {
      newClick(arraySeries3)
    } else if (index === 4) {
      newClick(arraySeries4)
    }
  }
}

function getListTemplate(index,i){
  return `
    <div class="series__card__ep_1"style="background-image: url(${index.backgroundImage});" data-index="${i}">
    <div class="series__card__title">${index.title}
    </div>
    </div>`
}

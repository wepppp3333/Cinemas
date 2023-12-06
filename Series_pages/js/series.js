const listObject = document.getElementById('list_object')
const createBtnArray1 = document.getElementById('create_array_1')
const createBtnArray2 = document.getElementById('create_array_2')
const a = 'Season 1  | Ep. 1'





const arraySeries1 = [{
  title: 'Season 1  | Ep. 1',
  backgroundImage: 'https://storage.yandexcloud.net/englika/collections/Q29sbGVjdGlvbjo2Mg-8211-1024' 
  },
  {
  title: 'Season 2  | Ep. 2',
  backgroundImage: 'https://i.ytimg.com/vi/HMh5Y9qw3YM/maxresdefault.jpg'
},
]
const arraySeries2 = ['Season 2  | Ep. 1','Season 2  | Ep. 2','Season 2  | Ep. 3','Season 4  | Ep. 4','Season 5  | Ep. 5','Season 6  | Ep. 6','Season 7  | Ep. 7','Season 2  | Ep. 8']
function render() {
  for (let i = 0; i < arraySeries1.length; i++) {
    listObject.insertAdjacentHTML(
      'beforeend',
      getListTemplate(arraySeries1[i])
      )
  }
  
}
function render2() {
  for (let i = 0; i < arraySeries2.length; i++) {
    listObject.insertAdjacentHTML(
      'beforeend',
      getListTemplate(arraySeries2[i])
     )
  }
}
render()

createBtnArray1.onclick = function () {
  listObject.innerHTML = ''
  listObject.insertAdjacentElement(`beforeend`,
  render())
  
}

createBtnArray2.onclick = function () {
  listObject.innerHTML = ''
  listObject.insertAdjacentElement(`beforeend`,
  render2())
}

function getListTemplate(title){
  return `
    <div class="series__card__ep_1"style="background-image: url(https://storage.yandexcloud.net/englika/collections/Q29sbGVjdGlvbjo2Mg-8211-1024);">
    <div class="series__card__title">${title}
    </div>
    </div>`
}

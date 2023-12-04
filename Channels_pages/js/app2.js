/*Theory
// array
// const array = [1, 2, 3, 4, 5, 146]
// const arrayStrings = ['a', 'b', 'c', 'd']
// const arrayTipeof = ['a', 'b', 'c', 'd', null,12,true]
// const array = new Array(1,2,3,4,5,6)
// console.log(array.length);
// console.log(array[0]);
// console.log(array[3]);
// console.log(array[10]);
// console.log(array[array.length - 1]);// array [6-1]
// array[0] = 'Privet!'
// console.log(array[0]);
// array[array.length] = 'becon'
// console.log(array);
*/

const inputElement = document.getElementById('title') 
const createBtn = document.getElementById('create') 
const listElement = document.getElementById('list') 

// console.log(inputElement.value);

const notes = ['записать блок про массивы', 'рассказать теорию объектов']

function render () {
  for (let i = 0; i < notes.length; i++) {
    console.log(i);
  }
  listElement.insertAdjacentHTML('beforeend',
    getNoteTemplate(notes[0]) 
  )
  listElement.insertAdjacentHTML('beforeend',
    getNoteTemplate(notes[1])
  )
}

render()

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return //undefaind
  }
  // listElement.innerHTML = 
  listElement.insertAdjacentHTML('beforeend',
    getNoteTemplate(inputElement.value)
  
  )
  inputElement.value = ''

}


function getNoteTemplate(title) {
  return`
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
  >
      <span>${title}</span>
      <span>
      <span class="btn btn-small btn-success">&check;</span>
      <span class="btn btn-small btn-danger">&times;</span>
      </span>
    </li>
  `
}
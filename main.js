const checkboxSlider1 = document.getElementById('slider_checkbox_1')
const checkboxSlider2 = document.getElementById('slider_checkbox_2')
const checkboxSlider3 = document.getElementById('slider_checkbox_3')
const checkboxSlider4 = document.getElementById('slider_checkbox_4')


// checkboxSlider1.onclick = function() {
//   const a = '1'
//   printBtn(a)
// }
// checkboxSlider2.onclick = function() {
//   const a = '2'
//   printBtn(a)
// }
// checkboxSlider3.onclick = function() {
//   const a = '3'
//   printBtn(a)
// }
// checkboxSlider4.onclick = function() {
//   const a = '4'
//   printBtn(a)

// }

// function printBtn (ab) {
//   if (ab == '1') {
//     checkboxSlider1.style.backgroundColor = 'white'
//     checkboxSlider1.style.opacity = 100
//     checkboxSlider2.style.backgroundColor = '#D9D9D9'
//     checkboxSlider2.style.opacity = 0.3
//     checkboxSlider3.style.backgroundColor = '#D9D9D9'
//     checkboxSlider3.style.opacity = 0.3
//     checkboxSlider4.style.backgroundColor = '#D9D9D9'
//     checkboxSlider4.style.opacity = 0.3

//   }else if (ab == '2'){
//     checkboxSlider2.style.backgroundColor = 'white'
//     checkboxSlider2.style.opacity = 100
//     checkboxSlider1.style.backgroundColor = '#D9D9D9'
//     checkboxSlider1.style.opacity = 0.3
//     checkboxSlider3.style.backgroundColor = '#D9D9D9'
//     checkboxSlider3.style.opacity = 0.3
//     checkboxSlider4.style.backgroundColor = '#D9D9D9'
//     checkboxSlider4.style.opacity = 0.3
//   }else if (ab == '3') {
//     checkboxSlider3.style.backgroundColor = 'white'
//     checkboxSlider3.style.opacity = 100
//     checkboxSlider1.style.backgroundColor = '#D9D9D9'
//     checkboxSlider1.style.opacity = 0.3
//     checkboxSlider2.style.backgroundColor = '#D9D9D9'
//     checkboxSlider2.style.opacity = 0.3
//     checkboxSlider4.style.backgroundColor = '#D9D9D9'
//     checkboxSlider4.style.opacity = 0.3
//   }else if (ab == '4') {
//     checkboxSlider4.style.backgroundColor = 'white'
//     checkboxSlider4.style.opacity = 100
//     checkboxSlider1.style.backgroundColor = '#D9D9D9'
//     checkboxSlider1.style.opacity = 0.3
//     checkboxSlider2.style.backgroundColor = '#D9D9D9'
//     checkboxSlider2.style.opacity = 0.3
//     checkboxSlider3.style.backgroundColor = '#D9D9D9'
//     checkboxSlider3.style.opacity = 0.3
//   }
// }

// Рабочий вариант 

// Новый вариант_________

// const slider = document.getElementById('slider')
// let selectedButton;



// function printChekox(button) {
//   if (selectedButton) {
//     selectedButton.style.backgroundColor = '#D9D9D9'
//     selectedButton.style.opacity = 0.3
//   }  
//   selectedButton = button
//   selectedButton.style.backgroundColor = '#FFF'
//   selectedButton.style.opacity = 100
// }

// slider.onclick = function (event) {
//   let target = event.target
//   console.log(target.tagName);
//   if (target.tagName != 'BUTTON') {
//     return
//   }
//   printChekox(target)
  
// }

// Новый вариант


const checkboxSlider = document.querySelector('.slider_checkbox_1')
console.log(checkboxSlider.className);
const slider = document.getElementById('slider')
let selectedButton



function printChekox(button) {
  if (selectedButton) {
    selectedButton.style.backgroundColor = '#D9D9D9'
    selectedButton.style.opacity = 0.3
  }  
  selectedButton = button
  selectedButton.style.backgroundColor = '#FFF'
  selectedButton.style.opacity = 100
}

slider.onclick = function (event) {
  let target = event.target
  console.log(target.tagName);
  if (target.tagName != 'BUTTON') {
    return
  }
  printChekox(target)
  
}










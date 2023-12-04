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
  if (selectedButton.id == 'slider_checkbox_1'){
    slider.style.backgroundImage = "url('/Img/slider_bacground.svg')"
  } else if (selectedButton.id == 'slider_checkbox_2'){
    slider.style.backgroundImage = "url('/Img/slider_bacground_2.jpg')"
  } else if (selectedButton.id == 'slider_checkbox_3'){
    slider.style.backgroundImage = "url('/Img/slider_bacground_3.jpg')"
  } else if (selectedButton.id == 'slider_checkbox_4'){
    slider.style.backgroundImage = "url('/Img/slider_bacground_4.jpg')"
  }
}

slider.onclick = function (event) {
  let target = event.target
  if (target.id == 'slider_checkbox_1'|| target.id == 'slider_checkbox_2' || target.id == 'slider_checkbox_3' || target.id == 'slider_checkbox_4') {
  printChekox(target)
  } 

}











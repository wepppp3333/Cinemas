const resultElement = document.getElementById('result')

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusSubmit = document.getElementById('plus')
const minusSubmit = document.getElementById('minus')
let action = '+'

plusSubmit.onclick = function () {
  action = '+'
}

minusSubmit.onclick = function () {
  action = '-'
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = 'red'
  } else {
    resultElement.style.color = 'green'
  } 
  resultElement.textContent = result
}

function computNumbersWithAction(inp1,inp2,actionSymbol){
  const num1 = Number(inp1.value)
  const num2 = Number(inp2.value)
  // if (actionSymbol == '+') {
  //   return num1 + num2
  // } else {
  //   return num1 - num2
  // }
  return actionSymbol == '+' ? num1 + num2 : num1 - num2 

}

submitBtn.onclick = function () {
  const result = computNumbersWithAction(input1,input2,action)
  printResult(result) 
  // if (action == '+') {
  //   const sum = Number(input1.value) + Number(input2.value)
  //   printResult(sum)
  // } else {
  //   const sum = Number(input1.value) - Number(input2.value)
  //   printResult(sum)
  // }
}




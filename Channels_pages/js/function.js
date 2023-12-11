// function declaration 
// function greet(name) {
//   console.log('Hello -', name);
// }

//Function expresiion
// const greet2 = function (name) {
//   console.log('2Hello -', name);
// }


// greet('Vladilen')
// greet2('Vladilen')

// console.dir(greet);

// setTimeout(function() {
//   greet('Vladilen2')
// }, 1500)

// let counter = 0
// const interval = setInterval(function () {
//   if (counter ===5) {
//     clearInterval(interval)
//   } else {
//     console.log(++counter)
//   }
// },1000)


// Arrow Function


function greet(name) {
  console.log('Hello -', name);
}


const arrow = (name, age) => {
  console.log('Hello -', name, age);
}

const arrow2 = (name) => console.log('Hello -', name);

function pow(num, exp) {
  return Math.pow(num,exp)
}

const pow2 = (num,exp) => Math.pow(num, exp)

// arrow('df', 23)
// arrow2('Ilya')
// console.log(pow(2,3));
// console.log(pow2(2,3));

// Default Parameters

const sum = (a = 40,b = a / 2) => a + b

// console.log(sum(40,2));
// console.log(sum());

function sumAll(...numbers) {
  // let result = 0
  // for (let num of numbers) {
  //   result += num
  // }
  // return result

  return numbers.reduce((acc, cur) => (acc += cur),0)
}

// console.log(sumAll(1, 2, 3, 4, 5));

// Closures

function createPerson(name) {
  return function (lastname) {
    console.log(name + ' ' + lastname);
  }
}

const addLastName = createPerson('Vladilen')
addLastName('Minin')
addLastName('Petrov')
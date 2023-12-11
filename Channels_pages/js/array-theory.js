const names = ['Владилен', 'Елена', 'Игорь', 'Ксения']
// names.push('Алена')
// names.unshift('Алена')

// names.shift()
// const firstName = names.shift()
// const name = names.pop()


// console.log(names.reverse());
// console.log(names.toReversed());
// const letters = ['e', 'c', 'd', 'b', 'a']
// console.log(letters.sort());
// console.log(letters.toSorted());
// console.log(letters);

// console.log(names.sort());

// console.log(names.splice(0,2));
// console.log(names.toSpliced(0,2));
// console.log(names);



// const greateWoman = 'Елена'
// const index = names.indexOf(greateWoman)
// console.log(index);
// names[index] = 'Елена Великая'
// console.log(names[index]);
// console.log(names);

// const greateWoman = 'Елена'
// const index = names.indexOf(greateWoman)
// console.log(index);
// const newNames = names.with(index, 'Елена Великая')
// console.log(names);
// console.log(newNames);

// const greateWoman = 'Елена'
// const index = names.indexOf(greateWoman)
// const newNames = names.with(index, 'Елена Великая')


// const capitalNames = names.map(function(name)  {
//   // return undefined Функция всегда ставит return если мы этого не пишем 
//   return name.toLowerCase()
// })

// console.log(names.includes('Игорь'));
// console.log(names.indexOf('Игорь!') != -1);
// console.log(capitalNames);


// const people = [
//   {
//     name: 'Vladilen',
//     budget: 4200,
//   },
//   {
//     name: 'Елена',
//     budget: 15100,
//   },
//   {
//     name: 'Игорь',
//     budget: 300,
//   },
//   {
//     name: 'Ксения',
//     budget: 7520,
//   }
// ]

// let findedPerson

// for (let person of people) {
//    if (person.budget === 7520) {
//       findedPerson = person
//    }
// }

// const findedPerson = people.find(function (person){
//   return person.budget === 7520
// })

// const findedPerson = people.findIndex(function (person){
//   return person.budget === 7520
//   return person
// })
// const finded = people.find((p) => p.budget === 7520)

// let sumBudget = 0
// const filtered = people.filter(function (p) {
//   return p.budget > 5000
// })
// console.log(filtered)
// filtered.forEach(function (p) {
//   sumBudget += p.budget
// })
// console.log(sumBudget);

// const byBudget = (p) => p.budget > 5000
// const pickBudget = (p) => p.budget

// const sumBudget = people.filter(byBudget).map(pickBudget).reduce((acc, p) => acc + p, 0)
// console.log(sumBudget);


// const sumBudget = people

// const string = 'Привет, как дела?'
// const reversed = string.split('').toReversed().join('!').split('').filter((c) => c != '!').join('')

// console.log(reversed);
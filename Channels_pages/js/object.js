const person = {
  name: "Vladilen",
  age: 29,
  isYoytuber: true,
  languages: ["ru", "en"],
  address: {
    city: "Saint-Petersburg",
    street: "Nesvky",
  },
  "complex key": "complex value",
  [1 + 2]: "computed value",
  greet() {
    console.log("Greet from person");
  },
  arrow: () => {
    console.log("person arrow");
  },
  info() {
    console.log(this);
    console.log("Person name " + this.name);
  },
};

// console.log(person);
// person.greet();
// person.arrow();
// person.info()

// destructoring
// const age = person.age;
// const name = person.name;
// const languages = person.languages;
// console.log(languages, age, name);

// const name = 'Petr'
// const {age,name: firstName = 'Test',languages} = person

// console.log(person);
// console.log(languages, age, firstName);

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {// проверка прототипа
//     console.log(person[key]);
//   }
// }

// современный метод получения ключей

// Object.keys(person).forEach(key => {
//   console.log(person[key]);
// })

const logger = {
  keys() {
    console.log("Object keys", Object.keys(this));
  },

  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log("Key", key);
      console.log("Value", this[key]);
    });
  },
};

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)
// logger.keys.apply(person)
class Human {
  isHuman = true

  humanGreet() {
    console.log('greet from human');
  }
}

class Person extends Human{
  constructor(name,age) { // этот метод создается автоматом у класса просто не пишется
    super()
    this.name = name ?? 'Undifened name'
    this.age = age ?? 'Indefined age'
  }

  sayHello() {
    console.log('Hello from', this.name);
  }
}

const person1 = new Person('Vladilen')
const person2 = new Person('Elena', 21)
// newPerson.sayHello()
// Person2.sayHello()
// console.log(newPerson.humanGreet());

console.log(person1);
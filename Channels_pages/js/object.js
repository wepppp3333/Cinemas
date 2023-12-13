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

// const name = "Pert";
// const { age, name:firstName = 'Test', languages } = person;
// console.log(age,firstName,languages);

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(person[key]);
//   }
// }

// Современый метод получать ключи

// Object.keys(person).forEach((key) => {
//   console.log(person[key]);
// });
// console.log(keys);

const logger = {
  keys () {
    console.log('Object keys', Object.keys(this));
  },
  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log('Value', person[key]);
      console.log('Value', this[key]);
    });
  }
}
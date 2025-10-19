function formatPerson(person) {
  const { name, age } = person;
  return `${name} is ${age} years old`;
}

const person = { name: "John", age: 25 };
console.log(formatPerson(person));

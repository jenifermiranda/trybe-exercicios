//Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const peopleAge = people.sort((a, b) => {
  return a.age - b.age;
})

// console.log(people);

const peopleOld = people.sort((a, b) => {
  return b.age - a.age;
})

// 

const numbers = [50, 85, -30, 3, 15];

const Getbigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = number.reduce(Getbigger);

console.log(bigger);
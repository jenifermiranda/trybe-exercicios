//Faça uma função que some todos os números pares do array numbers. Tente criar duas funções, uma usando reduce e filter, e outra apenas usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const ePar = numbers.filter((number) => number % 2 === 0);

const sumNumbers =  (acc, curr) => acc + curr;

const total = ePar.reduce(sumNumbers, 0);

console.log(total);

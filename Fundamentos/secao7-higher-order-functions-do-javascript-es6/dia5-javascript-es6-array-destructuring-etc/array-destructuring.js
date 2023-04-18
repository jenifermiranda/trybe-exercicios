const primeNumbers = [17, 23, 37]
const [firstNumber, secoundNumber, thirdNumber] = primeNumbers;

const sum = (a, b) => {
  console.log(a + b);
}

// sum(firstNumber, thirdNumber);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

// console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,,,,, ...numerosPares] = numerosPares
console.log(numerosPares);


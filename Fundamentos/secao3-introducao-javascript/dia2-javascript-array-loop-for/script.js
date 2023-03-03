// ** Exercícios **

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// Some todos os valores contidos no array e imprima o resultado.
// let sum = 0
// for (let index = 0; index < numbers.length; index +=1 ) {
//     sum += numbers[index];
    
// } console.log(sum);

// Calcule e imprima a média aritmética dos valores contidos no array.
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// let sum = 0
//     for (let index = 0; index < numbers.length; index +=1 ) {
//         sum += numbers[index];
    
// } console.log(sum / numbers.length);

// Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
// let sum = 0
// let media;
//     for (let index = 0; index < numbers.length; index +=1 ) {
//         sum += numbers[index];
//     } media = sum / numbers.length;

//     if (media > 20) {
//         console.log('Valor maior que 20');
//     } else {
//         console.log('Valor menor ou igual a 20');
//     }

// Utilizando for, descubra o maior valor contido no array e imprima-o.
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let maior = 0
// for ( let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maior) {
//         maior = numbers[index];
//     }
// } console.log(maior);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
// let impar = []
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         impar.push(numbers[index]);
//     }
// } console.log(impar);


// Utilizando for, descubra o menor valor contido no array e imprima-o.

// let menor = numbers[0];
// for ( let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < menor) {
//         menor = numbers[index];
//     }
// } console.log(menor);

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
// let numeros = [];

// for (let index = 1; index < 26; index += 1) {
//     numeros.push(index);
// } console.log(numeros);

// // Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
// for (let index = 0; index < numeros.length; index += 1) {
//     console.log(numeros[index] / 2);
// }

// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

// let fatoral = 1;

// for (let index = 10; index > 0; index -= 1) {
//     fatoral *= index;
// } console.log(fatoral);

//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'bomdia';
// let letra = '';

// for (let index = 0; index < word.length; index += 1) {
//     letra += word[word.length - 1 - index];
// } 
// console.log(letra);

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maisLetra = array[0];
let menosLetra = array[0];

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > maisLetra.length) {
        maisLetra = array[index];
    } 
} 

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length < menosLetra.length) {
        menosLetra = array[index];
    }
}
console.log(maisLetra);
console.log(menosLetra);
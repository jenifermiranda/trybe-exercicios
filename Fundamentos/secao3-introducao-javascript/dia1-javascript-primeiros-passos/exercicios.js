// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

// let num1 = 12
// let num2 = 2

// if (num1 > num2) {
//     console.log(num1);
// } else if (num1 < num2) {
//     console.log(num2);
// } else {
//     console.log('empate técnico');
// }

// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

// let A = 2;
// let B = 50;
// let C = 12;

// if (A > B && A > C){
//     console.log(A);
// } else if (B > A && B > C) {
//     console.log(B);
// } else {
//     console.log(C);
// }

// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

// let valor = -10;

// if (valor > 0) {
//     console.log('positive');
// } else if (valor < 0) {
//     console.log('negative');
// } else {
//     console.log('zero');
// }

// 🚀 Utilize if/else para escrever um código que defina três variaveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// - Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// - Um ângulo será considerado inválido se não tiver um valor positivo.

// let sen = 90;
// let cos = 90;
// let tan = 0;

// if ((sen + cos + tan) === 180 && sen > 0 && cos > 0 && tan > 0) {
//     console.log('true');
// } else if (sen == 0 || cos == 0 || tan == 0){
//     console.log('erro');
// } else {
//     console.log('false');
// }

// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// - Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).
// - Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)


// let peca = 'Rei'.toLowerCase()

// switch (peca) {
//     case 'torre':
//         console.log('quantas casas forem possível na vertical ou horizontal')
//         break;
//     case 'bispo':
//         console.log('quantas casas forem possível na diagonal')
//         break;
//     case 'cavalo':
//         console.log('em L')
//         break;
//     case 'rainha':
//         console.log('quantas casas forem possível para qualquer direção')
//         break;
//     case 'rei':
//         console.log('uma casa para qualquer direção')
//         break;
//     case 'peão':
//         console.log('uma ou duas casas para frente')
//         break;
//     default:
//         console.log('essa peça é inválida')
// }

// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

// let nota = 5;

// if (nota >= 90 && nota < 100) {
//     nota = 'A';
// } else if (nota >= 80 && nota < 90) { 
//     nota = 'B';
// } else if (nota >= 70 && nota < 80){
//     nota = 'C';
// } else if (nota >= 60 && nota < 70){
//     nota = 'D';
// } else if (nota >= 50 && nota < 60){
//     nota = 'E';
// } else if (nota < 49 && nota > 0){
//     nota = 'F';
// } else {
//     nota = 'Erro no valor da nota';
// } console.log(nota);

// Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.
// Bônus: use somente um if.

// let A = 1;
// let B = 2;
// let C = 3;

// if ( (A % 2 == 0) || (B % 2 == 0) || (C % 2 == 0)) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.
// Bônus: use somente um if.

// let A = 4;
// let B = 2;
// let C = 6;

// if ( (A % 2 !== 0) || (B % 2 !== 0) || (C % 2 !== 0)) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.
// - Atente para o fato de que um imposto de 20% incide sobre o custo do produto.
// - Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.
// - O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.
//     - valorCustoTotal = valorCusto + impostoSobreOCusto;
//     - lucro = valorVenda - valorCustoTotal (lucro de um produto);

// let custoProduto = 100;
// let valorVenda = 200;

// if (custoProduto > 0 && valorVenda > 0) { 
//     lucro = valorVenda - (custoProduto + (custoProduto * 0.2))
// } else {
//     console.log(Erro);
// }
// console.log(lucro * 1000);

Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.

let salariobruto = 35000.00
let aliqINSS;
let aliqIR;
let saliq;

if (salariobruto <= 1556.94) {
    aliqINSS = salariobruto * 0.08;
} else if (salariobruto >= 1556.95 && salariobruto <= 2594.92) {
    aliqINSS = salariobruto * 0.09;
} else if (salariobruto >= 2594.93 && salariobruto <= 5189.82) {
    aliqINSS = salariobruto * 0.11 ;
} else {
    aliqINSS = 570.88;
}

let salarioBase = salariobruto - aliqINSS;

if (salarioBase <= 1903.98) {
    aliqIR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliqIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliqIR = (salarioBase * 0.15) - 354.80;
} else if ( salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliqIR = (salarioBase * 0.225) - 636.13;
} else {
    aliqIR = (salarioBase * 0.275) - 869.36;
}

saliq = salarioBase - aliqIR

console.log(saliq);

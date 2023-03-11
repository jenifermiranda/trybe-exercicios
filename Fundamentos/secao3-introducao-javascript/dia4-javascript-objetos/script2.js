const compareTrue = (vall, vall2) => {
    if (vall && vall2 === true){
        return true;
    } 
    return false;
}
||
const compareTrue = (vall, vall2) => {
    return vall && vall2 === true ? true : false;
}
||
const compareTrue = (vall, vall2) => vall && vall2 === true ? true : false;

//desenvolva uma funcao que soma todos os valores de um array

const simpleArraySum = (array) => {
    let sum = 0;
    for(let index = 0; index < array.length; index += 1) {
      acc += array[index];
    }
    return acc;
}
console.log(simpleArraySum([10, 3, 4]));

//laer e boston celtics estao disputando o titulo da nba. desenvolva uma funcao que ira receber um array de cada time contendo a pontuacao das partidas. esta funcao deve retornar qual time ganhou mais partidas e sagrou-se campeao

function nbaChampion (lakers, celtics) {} // function normal, em baixo é arrow function
const nbaChampion = (lakers, celtics) => {
    let countLakers = 0;
    let countCeltics = 0;

    for(let index = 0; index < lakers.length; index += 1) {
        if (lakers[index] > celtics[index]) {
            countLakers += 1;
        } else {
        countCeltics += 1;
        }
    }
    return [countLakers, countCeltics];
}

console.log(nbaChampion([106, 89, 100], [105], [88] [99]));

//desenvolva um algoritmo que recebe todas as suas contas d mes, faca a soma dos valores e diminua do seu salario. como saida mostre se sobrou dinheiro, se gastou tudo ou se estorou o orcamento

let salario = 5000;

let expensesPessoa1 = {
    'Aluguel' : 800,
    'Luz' : 80,
    'Agua' : 30,
    'Internet' : 90,
    'Cartao de credito' : 5001,
    'Mercado' : 1000,
};

let expensesPesso2 = {
    'Aluguel' : 800,
    'Luz' : 80,
    'Agua' : 30,
    'Internet' : 90,
    'Cartao de credito' : 2000,
    'Mercado' : 1000,
};

const expenses = (gastos) => {
    let sum = 0;
    for (const key in expensesPessoa1){
        sum += gastos[key];
    }
    return sum;
}
console.log(expenses(expensesPessoa1));
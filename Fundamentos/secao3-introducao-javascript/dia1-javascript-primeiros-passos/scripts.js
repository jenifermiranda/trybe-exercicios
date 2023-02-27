// let myName = 'Jenifer';

// let birthCity = 'Jacareí';

// let birthYear = 1994;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// let base = 5;
// let heigth = 8;
// let area = base * heigth;

// console.log(area);

// let perimeter = 2 * base + 2 * heigth;

// console.log(perimeter);

// let nota = 67;

// if (nota >= 80) {
//     console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!');
// } else if (nota < 80 && nota >=60) {
//     console.log('Você está na nossa lista de espera.')
// } else {
//     console.log('Infelizmente, você reprovou.')
// }

// let currentHour = 16;

 let message = '';
if (typeof(message) !== 'numero') {
    message = 'Favor digitar um status';
} else if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir'
// } else if (currentHour >= 18 && currentHour < 22) {
//     message = 'Rango da noite, vamos jantar :D'
// } else if (currentHour >= 14 && currentHour < 18) {
//     message = 'Vamos fazer um bolo pro café da tarde?'
// } else if (currentHour >= 11 && currentHour < 14) {
//     message = 'Hora do almoço!!!'
// } else {
//     message = 'Hmmm, cheiro de café recém-passado'
// }

// console.log(message)

// let weekDay = 'feira';

// if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
//     console.log('Oba, hoje é' + ' ' + weekDay + ' ' +  'mais um dia de aprendizado na Trybe >:D');
// } else {
//     console.log('FINALMENTE, descanso merecido! UwU!')
}

let status = 'lista';

switch (status) {
    case 'aprovada':
        console.log('Parabéns, você está no grupo de pessoas aprovadas!');
        break;
    case 'lista':
        console.log('Você está na nossa lista de espera.');
        break;
    case 'reprovada':
        console.log('Infelizmente, você reprovou.');
        break;
    default:
        console.log('Informação incorreta.')
}



// let player = {
//     name: 'Marta',
//     lastname: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//     }
// }
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

// player['fullname'] = player.name + ' ' + player.lastname;

// console.log('A jogadora ' + player.fullname + ' tem ' + player.age + ' anos de idade');

// console.log('A jogadora ' + player.fullname + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes' )

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');    

// Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let key in names){
//   console.log(`Olá, ${names[key]}`);
// }

// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

// let customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// let lastName = 'Ferreira';

// function addProperty(object, key, value) {
//   object[key] = value;
// };

// addProperty(customer, 'lastName', 'Ferreira');
// console.log(customer);

// Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

// let student = {};

// student.firstName = '';

// function addProperty(object, key, value){
//   object[key] = value;
// }

// addProperty(student, 'firstName', 'Jenifer')

// addProperty(student, 'lastName', 'Miranda')

// addProperty(student, 'email', 'jnf.asm@gmail.com')

// addProperty(student, 'contato', '+55 11 948646258')
// console.log(student);

// let coolestTvShow = {
//   name: 'BoJack Horseman',
//   genre: 'adult animation',
//   createdBy: 'Raphael Bob-Waksberg',
//   favoriteCharacter: 'Princess Carolyn',
//   quote: 'Princess Carolyn always lands on her feet.',
//   seasons: 6,
// };

// // for(let key in coolestTvShow) {
// //   console.log(coolestTvShow[key]);
// // }

// console.log(Object.keys(coolestTvShow));

// let student1 = {
//   html: 'Muito Bom',
//   css: 'Bom',
//   javascript: 'Ótimo',
//   softskills: 'Ótimo',
// };

// let student2 = {
//   html: 'Bom',
//   css: 'Ótimo',
//   javascript: 'Ruim',
//   softskills: 'Ótimo',
//   git: 'Bom', // chave adicionada
// };

// // Tente criar uma função que exiba as habilidades do objeto student. Nesse caso, cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”.

// function listSkills(student) {
//   let arrayOfSkills = Object.keys(student);
//  for( let index in arrayOfSkills) {
//   console.log(arrayOfSkills[index] + ' - nível: ' + student[arrayOfSkills[index]]);
// }
// }

// console.log('Estudante 1');
// console.log(listSkills(student1));

// console.log('Estudante 2');
// listSkills(student2);

// let student = {
//   html: 'Muito Bom',
//   css: 'Bom',
//   javascript: 'Ótimo',
//   softskill: 'Ótimo',
// };

// function listSkillsValuesWithFor(student) {
//   let skills = [];
// //   for(skill in student) {
// //     skills.push(student[skill]);
// //   }

// //   return skills;
// // };

// function listSkillsValuesWithValues(student) {
//   return Object.values(student);
// }

// // // Sem Object.values
// // console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));

// console.log(Object.entries(student));

// let countries = {
//   franca: 'Paris',
//   brasil: 'Brasília',
//   espanha: 'Madrid',
//   portugal: 'Lisboa',
// };
// let pairKeyValue = Object.entries(countries);

// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

// let person = {
//   name:'Roberto',
// };

// let lastName = {
//   lastName: 'Silva',
// };

// let newPerson = Object.assign({},person,lastName);
// newPerson.name = 'Gilberto';
// console.log(newPerson);
// console.log(person);

// let object = { a: 1, b: 2, c: 3 };

// for (let property in object) {
//   object.a = 8
//   console.log(property + ' = ' + object[property]);
// }

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

//Imprima no console uma mensagem de boas-vindas para a personagem acima, na qual tenha o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:
// console.log(`bem-vinda, ${info.personagem}`);

//Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:
// info['recorrente'] = 'Sim';

// console.log(info);

//Faça um for/in que mostre todas as chaves do objeto. 

// for (let key in info){
  // console.log(key);
// }

//Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. 

// for (let key in info){
  // console.log(info[key]);
// }

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. 

// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// };

// for(let key in info){
//   if (
//     key === 'recorrente' &&
//     info[key] === 'Sim' &&
//     info2[key] === 'Sim'
//   ) {
//     console.log('Ambos recorrentes');
//   } else {
//     console.log(info[key] + ' e ' + info2[key]);
//   }
// }

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };

// Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
// let livroTitulo = leitor.livrosFavoritos[0].titulo;

// console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${livroTitulo}'`);

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:

// leitor.livrosFavoritos.push(
// {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editora: 'Rocco',
// }
// )
// console.log(leitor);

// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, em que “<quantidade>” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.

  // console.log(leitor.livrosFavoritos.length);

  let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    deliveryName = order['order']['delivery'].deliveryPerson;
    customerName = order['name'];
    customerTel = order['phoneNumber'];
    addressStreet = order['address'].street;
    addressNumber = order['address'].number;
    addressApto = order['address'].apartment;

    // console.log(`Olá, ${deliveryName}, entrega para: ${customerName}, Telefone: ${customerTel}, R. ${addressStreet}, Nº: ${addressNumber}, AP: ${addressApto}`);
  }

  customerInfo(order);

  function orderModifier(order) {
    customerName = order.name = 'Luiz Silva';
    customerPizza1 = Object.keys(order.order.pizza);
    customerDrink = order.order.drinks.coke.type;
    paymentOrder = order.payment = 50;


    console.log(`Olá, ${customerName}, o valor total de seu pedido de ${customerPizza1} e ${customerDrink} é R$ ${paymentOrder},00`);
  }
  
  orderModifier(order);
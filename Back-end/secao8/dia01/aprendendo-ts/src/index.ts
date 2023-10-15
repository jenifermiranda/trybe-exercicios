import * as Functions from './myFunctions';
import users from './data';

console.log(`Lista de pessoa usuárias do Github: ${Functions.getUserNames(users)}`);

console.log(
    `Pessoa com pelo menos 20 repositórios: ${Functions.getUserRepoQuantity(users, 20)}`
);

console.log(`Essa é a conta mais ativa na lista? ${Functions.isMostActiveUser('João Paulo Aramuni', users)}`);

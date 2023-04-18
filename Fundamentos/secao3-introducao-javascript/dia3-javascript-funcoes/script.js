// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function adicionaCliente(cliente) {
//     if (typeof cliente === 'string') {
//         clientesTrybeBank.push(cliente);
//         return 'Cliente adicionado'
//     } else {
//         return 'O parâmetro não é do tipo string'
//     }
// } console.log(adicionaCliente('Caio'));
// console.log(clientesTrybeBank);

// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function removeClientes(cliente) {
//     if (typeof cliente === 'string' && clientesTrybeBank.includes(cliente)) {
//         clientesTrybeBank.pop(cliente);
//         return 'Cliente removido.'
//     }else {
//         return 'Cliente não cadastrado e/ou parâmetro não é do tipo string.'
//     }
// }

// console.log(removeClientes('Gus'));
// console.log(clientesTrybeBank);

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function verificaCliente(cliente) {
    if (typeof cliente === 'string') {
        return true
    } else {
        return 'O parâmetro passado deve ser do tipo "string"!';
    }
}

function encontraCliente () {
    let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (cliente === clientesTrybeBank[index]) {

}

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function validaString(cliente) {
  if (typeof cliente !== 'string') {
    return 'O parâmetro passado deve ser do tipo "string"!';
} else {
  return true;
}
}

function clienteIndex(cliente) {
  for (let index = 0; index < clientesTrybeBank.length; index += 1) {
    if (cliente === clientesTrybeBank[index]) {
    return index;
}
  }
  return false;
}

function removeCliente(cliente) {
  let validacao = validaCliente(cliente);
  if (validacao !== true) {
    return validacao;
  }

  let index = clienteIndex(cliente);
  if (index === false) {
    return 'Cliente não encontrada(o).'
  }

  clientesTrybeBank.splice(index, 1);
  return 'Cliente excluída(o) com sucesso.';
}
import validator from 'validator';

const input = document.querySelector('#campo-valor');
const btn = document.querySelector('#button');
const seletor = document.querySelector('#option');
const retorno = document.querySelector('#retorno');



btn.addEventListener('click', (event) => {
  event.preventDefault();

  const campos = {
    nome:validator.isAlpha(input.value, 'pt-BR'),
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    email: validator.isEmail(input.value),
    celular: validator.isMobilePhone(input.value,'pt-BR')
  }

  let validade = '';
  if (campos[seletor.value] === true) {
    validade = 'válido';
  } else {
    validade = 'inválido';
  }

  retorno.innerHTML = `A validação retornou ${validade}`;
});
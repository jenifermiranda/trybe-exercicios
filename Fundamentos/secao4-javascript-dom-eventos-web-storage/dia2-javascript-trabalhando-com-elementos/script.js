// Crie um irmão para `elementoOndeVoceEsta`.
const pai = document.getElementById('pai');
const irmaoDoElementoOndeVoceEsta = document.createElement('section');
irmaoDoElementoOndeVoceEsta.id = 'irmaoDoElementoOndeVoceEsta';
pai.appendChild(irmaoDoElementoOndeVoceEsta);

// Crie um filho para `elementoOndeVoceEsta`.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoDoElementoOndeVoceEsta = document.createElement('section');
filhoDoElementoOndeVoceEsta.id = 'filhoDoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta);

// Crie um filho para `primeiroFilhoDoFilho`.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhodoFilho');
const filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse `terceiroFilho`.
const terceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling

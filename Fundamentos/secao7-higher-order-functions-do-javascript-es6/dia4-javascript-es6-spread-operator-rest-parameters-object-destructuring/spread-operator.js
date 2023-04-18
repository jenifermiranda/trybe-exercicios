// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'melancia', 'banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite', 'leite em po', 'granola'];

const fruitsSalad = [...specialFruit, ...additionalItens];

console.log(fruitsSalad);

const fruitSalad = (fruit, additional) => {
  const fruitPlusAdditional = [...fruit, ...additional];
  return fruitPlusAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));

const moedas = {
  motd: {
    msg: 'If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.',
    url: 'https://exchangerate.host/#/donate',
  },
  success: true,
  base: 'BRL',
  date: '2023-01-12',
  rates: {
    AED: 0.711817,
    AFN: 17.376908,
    ALL: 20.974748,
    AMD: 76.29545,
    ANG: 0.348689,
    AOA: 97.619645,
    ARS: 35.010255,
    AUD: 0.279934,
    AWG: 0.348859,
    AZN: 0.329521,
    BAM: 0.3521,
  },
};

// Dado o objeto acima, escreva uma função que quando executada exiba no console o seguinte texto para cada moeda na chave rates: `Hoje a moeda XXX está valendo R$$YYYY.ZZ`

const { rates } = moedas;

Object.entries(rates).forEach((rate) => {
  console.log(`Hoje a moeda ${rate[0]}, está valendo R$${rate[1]}`);
})
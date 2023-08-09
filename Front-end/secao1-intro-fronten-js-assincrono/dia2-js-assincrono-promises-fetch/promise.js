// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });

  const randomPromisse = () => {
    new Promisse((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = generateRandomNumber();
        if (randomNumber % 2 === 0) {
          resolve(randomNumber);
        } else {
          reject(
            new Error(
              `O número ${randomNumber} não é válido, somente números pares são válidos.`
            )
          );
        }
      }, 1000);
    });
  }

// resolvedPromise().then((response) => {
//   console.log(`O número gerado é ${response}`);
// });

// rejectedPromise()
// .then((response) => {
//   console.log(`Rejeitado: O número gerado é ${response}`);
// })
// .catch((error) => {
//   console.log(`RejectedPromisse: ${error.message}`);
// });

randomPromisse()
.then((response) => {
  console.log(`Promisse resolvida. O número gerado é ${response}`);
})
.catch(error => {
  console.log(`Promisse rejeitada: ${error.message}`);
})
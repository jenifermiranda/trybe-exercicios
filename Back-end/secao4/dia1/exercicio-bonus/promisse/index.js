const readline = require('readline-sync');

function math(a, b, c) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
            return reject(new Error('Informe apenas números'));
        }
        const result = (a + b) * c;

        if (result < 50) {
            return reject(new Error('Valor muito baixo'));
        }

        resolve(result);
        console.log(result);
    });
};

function main() {
    const a = readline.questionInt('Enter a number for A: ');
    const b = readline.questionInt('Enter a number for B: ');
    const c = readline.questionInt('Enter a number for C: ');

    math(a, b, c);
}

main();
const readline = require('readline-sync');

function fibonacci(qtd) {
    let a = 1;
    let b = 1;

    for(let n = qtd; n >= 0; n -= 1) {
        if (b) console.log(b);
        const temp = a;

        a += b;

        b = temp;
    }
console.log(b);
return b;
};

function main() {
    const n = readline.questionInt(`Enter 'n' value: `);

    if (n <= 0) {
        console.log(`Enter a number greater then '0'`);
        return;
    };

    console.log(`n: ${n}`);
    fibonacci(n - 2);
};

main();
const fs = require('fs').promises;

async function main() {
    try {
        const data = fs.readFile('./meu-arquivo.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(`Erro ao ler o arquivo: ${err.message}`);
    }
}

main()
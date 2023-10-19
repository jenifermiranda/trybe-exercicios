const fs = require('fs').promises;
const path = require('path');
const { stringify } = require('querystring');

async function main() {
    const getCharacter = await nelsonMaggie();
    console.log(getCharacter);
}

async function character() {
    try {
        const data = await fs.readFile('./simpsons.json', 'utf-8');
        const char = JSON.parse(data)
        const strings = char.map(({id, name}) => `${id} - ${name}`)
        console.log(strings);
    } catch (err) {
        console.error('Erro ao ler o arquivo: ${err.message}')
    }
}

async function getCharById(id) {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const char = JSON.parse(data)
    const result = char.find((char) => Number(char.id) === id);

    if(!result) {
        throw new Error('id não encontrado');
    }
    return `${result.id} - ${result.name}`;
}

async function dropChar() {
    const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
    const char = JSON.parse(data)
    const list = char.filter((char) => char.id !== '10' && char.id !== '6')
    const strings = JSON.stringify(list)
    console.log(strings);
    return await fs.writeFile(path.resolve(__dirname, './simpsons.json'), strings);
}

async function SimpsonFamily() {
    const data = await fs.readFile(path.resolve(__dirname, './simpsons.json'));
    const char = JSON.parse(data)
    const list = char.filter((char) => char.id < '5')
    const strings = JSON.stringify(list)
    return await fs.writeFile(path.resolve(__dirname, './simpsonFamily.json'), strings);
}

async function addNelson() {
    
    const data = await fs.readFile(path.resolve(__dirname, './simpsonFamily.json'));
    const oldChar = JSON.parse(data)

    oldChar.push({ id: '11', name: 'Nelson Muntz'});

    await fs.writeFile(path.resolve(__dirname, './simpsonFamily.json'), JSON.stringify(oldChar));

}

async function nelsonMaggie() {
    const data = await fs.readFile(path.resolve(__dirname, './simpsonFamily.json'));
    const char = JSON.parse(data)
    const listWhitoutNelson = char.filter((char) => char.id !== '11')

    listWhitoutNelson.push({id: 12, name: 'Maggie Simpson'})

    await fs.writeFile(path.resolve(__dirname, './simpsonFamily.json'), JSON.stringify(listWhitoutNelson));

}

main();
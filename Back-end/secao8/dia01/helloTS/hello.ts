// Crie union types que representem: a. Os estados físicos da matéria como strings: líquido, sólido ou gasoso. b. O documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex.: “123.567.890-12” ou 123456789012. c. Sistemas operacionais: Linux, MacOS ou Windows.
type estadosDaMateria = 'liquido' | 'solido' | 'gasoso';
type cpf = number | string;
type os = 'Linux' | 'MacOS' | 'Windows';

// Crie type aliases para: a. Representar um ou mais nomes de pessoas em uma variável que guarda reservas de restaurante. b. Um objeto que represente um endereço.
type reservas = string | string[] // pode ter mais de 1 nome

type address = {
    street: string;
    number: number | string;
    city: string;
};
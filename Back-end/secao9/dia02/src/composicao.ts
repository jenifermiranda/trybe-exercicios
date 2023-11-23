interface Logger {
    //metodo
    log(param: string): void;
}

class ConsoleLogger implements Logger {
    public log(param: string): void {
        console.log(param);   
    }
}

class ConsoleLogger2 implements Logger {
    log(param: string): void {
        console.log(`logger2: ${param}`);
    }
}

interface DataBase {
    logger: Logger;

    save(key: string, value: string): void;
}

class ExampleDataBase implements DataBase {
    constructor(public logger: Logger = new ConsoleLogger()) { }

    save(key: string, value: string): void {
        this.logger.log(`valor ${value}, na chave ${key}`)
    }
}

const logger1 = new ConsoleLogger();

const logger2 = new ConsoleLogger2();

const exampleData1 = new ExampleDataBase(logger1)

const exampleData2 = new ExampleDataBase(logger2);

const exampleData3 = new ExampleDataBase();

exampleData1.save('chave1', 'valor1');
exampleData2.save('chave2', 'valor2');
exampleData3.save('chave3', 'valor3');